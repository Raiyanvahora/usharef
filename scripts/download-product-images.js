const https = require('https');
const fs = require('fs');
const path = require('path');

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        file.close();
        fs.unlinkSync(filepath);
        return downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function fetchPageAndFindImage(pageUrl, modelNumber) {
  return new Promise((resolve, reject) => {
    https.get(pageUrl, (response) => {
      let data = '';
      
      response.on('data', (chunk) => {
        data += chunk;
      });
      
      response.on('end', () => {
        // Look for product images in the HTML
        const patterns = [
          new RegExp(`https://westernequipments\\.com/wp-content/uploads/[^"]*${modelNumber}[^"]*\\.jpg`, 'gi'),
          new RegExp(`https://westernequipments\\.com/wp-content/uploads/[^"]*${modelNumber}[^"]*\\.png`, 'gi'),
          /class="woocommerce-product-gallery__image"[^>]*href="([^"]+)"/gi,
          /data-large_image="([^"]+)"/gi,
          /class="wp-post-image"[^>]*src="([^"]+)"/gi
        ];
        
        for (const pattern of patterns) {
          const matches = data.matchAll(pattern);
          for (const match of matches) {
            const imageUrl = match[1] || match[0];
            if (imageUrl && imageUrl.includes('.jpg') || imageUrl.includes('.png')) {
              resolve(imageUrl);
              return;
            }
          }
        }
        
        // If no image found with model number, get the first product image
        const productImageMatch = data.match(/class="woocommerce-product-gallery__image"[^>]*href="([^"]+\.(?:jpg|png))"/i);
        if (productImageMatch) {
          resolve(productImageMatch[1]);
          return;
        }
        
        reject(new Error('No image found on page'));
      });
    }).on('error', reject);
  });
}

async function main() {
  const imagesDir = path.join(__dirname, '..', 'public', 'images', 'products');
  
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  const products = [
    {
      pageUrl: 'https://westernequipments.com/product/deep-freezer/hard-top/d070h161/',
      model: 'D070H161',
      expectedImage: 'https://westernequipments.com/wp-content/uploads/2024/01/D070H161.jpg'
    },
    {
      pageUrl: 'https://westernequipments.com/product/deep-freezer/glass-top/f450gl25/',
      model: 'F450GL25',
      expectedImage: null
    },
    {
      pageUrl: 'https://westernequipments.com/product/deep-freezer/hard-top-eutectic/e325h220/',
      model: 'E325H220',
      expectedImage: null
    },
    {
      pageUrl: 'https://westernequipments.com/product/deep-freezer/freezer-on-wheels/g200h120/',
      model: 'G200H120',
      expectedImage: null
    },
    {
      pageUrl: 'https://westernequipments.com/products/deep-freezer/combination/',
      model: 'B325H220',
      expectedImage: null
    },
    {
      pageUrl: 'https://westernequipments.com/products/deep-freezer/combination/',
      model: 'B425H220',
      expectedImage: null
    },
    {
      pageUrl: 'https://westernequipments.com/products/deep-freezer/combination/',
      model: 'B525H220',
      expectedImage: null
    }
  ];

  console.log('Starting to download product images...\n');

  for (const product of products) {
    try {
      console.log(`\nProcessing ${product.model}...`);
      console.log(`Page URL: ${product.pageUrl}`);
      
      let imageUrl;
      
      if (product.expectedImage) {
        imageUrl = product.expectedImage;
        console.log(`Using known image URL: ${imageUrl}`);
      } else {
        console.log(`Fetching page to find image...`);
        try {
          imageUrl = await fetchPageAndFindImage(product.pageUrl, product.model);
          console.log(`Found image URL: ${imageUrl}`);
        } catch (err) {
          console.log(`Could not find image on page, trying direct URL...`);
          // Try common URL pattern
          imageUrl = `https://westernequipments.com/wp-content/uploads/2024/01/${product.model}.jpg`;
        }
      }
      
      const filename = `${product.model}.jpg`;
      const filepath = path.join(imagesDir, filename);
      
      if (fs.existsSync(filepath)) {
        console.log(`✓ Image already exists: ${filename}`);
        continue;
      }
      
      await downloadImage(imageUrl, filepath);
      
    } catch (error) {
      console.error(`✗ Failed to process ${product.model}: ${error.message}`);
    }
  }
  
  console.log('\n=== Download Summary ===');
  console.log('Check the /public/images/products/ directory for downloaded images.');
}

main().catch(console.error);