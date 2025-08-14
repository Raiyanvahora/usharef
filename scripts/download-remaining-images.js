const https = require('https');
const fs = require('fs');
const path = require('path');

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
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

async function main() {
  const imagesDir = path.join(__dirname, '..', 'public', 'images', 'products');
  
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // Copy/rename existing file for SRF900-HC-GL
  const srcFile = path.join(imagesDir, 'SRF900HC-GL.jpg');
  const destFile = path.join(imagesDir, 'SRF900-HC-GL.jpg');
  if (fs.existsSync(srcFile) && !fs.existsSync(destFile)) {
    fs.copyFileSync(srcFile, destFile);
    console.log('✓ Copied SRF900HC-GL.jpg to SRF900-HC-GL.jpg');
  }

  // Download missing product images - try common patterns
  const missingProducts = [
    { model: 'HRFW-77MS4', alternates: ['HRFW77MS4', 'HRFW-77', 'HRFW77'] },
    { model: 'HRFW127MS4', alternates: ['HRFW-127MS4', 'HRFW127', 'HRFW-127'] },
    { model: 'SMF', alternates: ['SMF900', 'SMF-900'] },
    { model: 'SLF-500', alternates: ['SLF500', 'SLF'] },
    { model: 'FH1D-110-CT', alternates: ['FH1D110CT', 'FH1D-110', 'FH1D110'] },
    { model: 'FH2D-560-CT', alternates: ['FH2D560CT', 'FH2D-560', 'FH2D560'] }
  ];

  console.log('\nAttempting to download missing product images...\n');

  for (const product of missingProducts) {
    const filename = `${product.model}.jpg`;
    const filepath = path.join(imagesDir, filename);
    
    if (fs.existsSync(filepath)) {
      console.log(`✓ Image already exists: ${filename}`);
      continue;
    }
    
    let downloaded = false;
    
    // Try main model number first
    const urls = [
      `https://westernequipments.com/wp-content/uploads/2024/01/${product.model}.jpg`,
      `https://westernequipments.com/wp-content/uploads/2024/05/${product.model}.jpg`,
      `https://westernequipments.com/wp-content/uploads/2024/05/${product.model}.png`
    ];
    
    // Also try alternate naming patterns
    for (const alt of product.alternates) {
      urls.push(`https://westernequipments.com/wp-content/uploads/2024/01/${alt}.jpg`);
      urls.push(`https://westernequipments.com/wp-content/uploads/2024/05/${alt}.jpg`);
    }
    
    for (const url of urls) {
      try {
        console.log(`Trying: ${url}`);
        await downloadImage(url, filepath);
        downloaded = true;
        break;
      } catch (err) {
        // Continue to next URL
      }
    }
    
    if (!downloaded) {
      console.log(`✗ Could not find image for ${product.model}`);
      // Create a placeholder by copying a similar product image if available
      if (product.model.startsWith('HRFW')) {
        // Use B325H220 as placeholder for HRFW models
        const placeholderSrc = path.join(imagesDir, 'B325H220.jpg');
        if (fs.existsSync(placeholderSrc)) {
          fs.copyFileSync(placeholderSrc, filepath);
          console.log(`  → Used B325H220.jpg as placeholder for ${product.model}`);
        }
      } else if (product.model.startsWith('FH')) {
        // Use D070H161 as placeholder for FH models
        const placeholderSrc = path.join(imagesDir, 'D070H161.jpg');
        if (fs.existsSync(placeholderSrc)) {
          fs.copyFileSync(placeholderSrc, filepath);
          console.log(`  → Used D070H161.jpg as placeholder for ${product.model}`);
        }
      } else if (product.model === 'SMF' || product.model === 'SLF-500') {
        // Use SRF206HC-ERGL as placeholder for vertical freezers
        const placeholderSrc = path.join(imagesDir, 'SRF206HC-ERGL.jpg');
        if (fs.existsSync(placeholderSrc)) {
          fs.copyFileSync(placeholderSrc, filepath);
          console.log(`  → Used SRF206HC-ERGL.jpg as placeholder for ${product.model}`);
        }
      }
    }
  }
  
  console.log('\n=== Download Complete ===');
  console.log('Missing images have been handled with placeholders where necessary.');
}

main().catch(console.error);