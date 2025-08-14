const fs = require('fs');
const path = require('path');
const https = require('https');

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function main() {
  const imagesDir = path.join(__dirname, '..', 'public', 'images', 'products');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  const downloads = [
    {
      url: 'https://westernequipments.com/wp-content/uploads/2024/01/CT30HC.jpg',
      filename: 'CT30HC.jpg',
      productId: 'ct30hc'
    },
    {
      url: 'https://westernequipments.com/wp-content/uploads/2024/01/RBW-.jpg',
      filename: 'RBW.jpg',
      productId: 'rbw-'
    }
  ];

  console.log('Starting image downloads...\n');

  for (const item of downloads) {
    const filepath = path.join(imagesDir, item.filename);
    try {
      await downloadImage(item.url, filepath);
      console.log(`✓ Successfully downloaded image for product ${item.productId}`);
    } catch (error) {
      console.error(`✗ Failed to download image for product ${item.productId}:`, error.message);
    }
  }

  console.log('\nDownload complete!');
}

main().catch(console.error);