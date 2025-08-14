const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '..', 'data', 'products.ts');
let fileContent = fs.readFileSync(productsFilePath, 'utf-8');

// Products that need image updates with their new image paths
const imageUpdates = [
  {
    productId: 'd070h161',
    model: 'D070H161',
    newImagePath: '/images/products/D070H161.jpg',
    oldPlaceholder: '/PRD/DEEP FREEZER/main images/B325-300x300.png'
  },
  {
    productId: 'd150h-hc',
    model: 'D150H-HC',
    newImagePath: '/images/products/D150H-HC.jpg',
    oldPlaceholder: '/PRD/DEEP FREEZER/main images/D150-300x300.png'
  },
  {
    productId: 'd300h124',
    model: 'D300H124',
    newImagePath: '/images/products/D300H124.jpg',
    oldPlaceholder: '/PRD/DEEP FREEZER/main images/B325-300x300.png'
  },
  {
    productId: 'b325h220',
    model: 'B325H220',
    newImagePath: '/images/products/B325H220.jpg',
    oldPlaceholder: '/PRD/DEEP FREEZER/main images/B325-300x300.png'
  },
  {
    productId: 'b425h220',
    model: 'B425H220',
    newImagePath: '/images/products/B425H220.jpg',
    oldPlaceholder: '/PRD/DEEP FREEZER/main images/B425-300x300.png'
  },
  {
    productId: 'b525h220',
    model: 'B525H220',
    newImagePath: '/images/products/B525H220.jpg',
    oldPlaceholder: '/PRD/DEEP FREEZER/main images/B525-300x300.png'
  },
  {
    productId: 'hrfw-77ms4',
    model: 'HRFW-77MS4',
    newImagePath: '/images/products/HRFW-77MS4.jpg',
    oldPlaceholder: '/PRD/DEEP FREEZER/main images/B325-300x300.png'
  },
  {
    productId: 'hrfw127ms4',
    model: 'HRFW127MS4',
    newImagePath: '/images/products/HRFW127MS4.jpg',
    oldPlaceholder: '/PRD/DEEP FREEZER/main images/B325-300x300.png'
  },
  {
    productId: 'srf206hc-ergl',
    model: 'SRF206HC-ERGL',
    newImagePath: '/images/products/SRF206HC-ERGL.jpg',
    oldPlaceholder: '/PRD/DEEP FREEZER/main images/B325-300x300.png'
  },
  {
    productId: 'srf900-hc-gl',
    model: 'SRF900-HC-GL',
    newImagePath: '/images/products/SRF900-HC-GL.jpg',
    oldPlaceholder: '/PRD/DEEP FREEZER/main images/B325-300x300.png'
  },
  {
    productId: 'smf',
    model: 'SMF',
    newImagePath: '/images/products/SMF.jpg',
    oldPlaceholder: '/PRD/DEEP FREEZER/main images/B325-300x300.png'
  },
  {
    productId: 'slf-500',
    model: 'SLF-500',
    newImagePath: '/images/products/SLF-500.jpg',
    oldPlaceholder: '/PRD/DEEP FREEZER/main images/B325-300x300.png'
  },
  {
    productId: 'e325h220',
    model: 'E325H220',
    newImagePath: '/images/products/E325H220.jpg',
    oldPlaceholder: '/PRD/DEEP FREEZER/main images/B325-300x300.png'
  },
  {
    productId: 'g300h120',
    model: 'G300H120',
    newImagePath: '/images/products/G300H120.jpg',
    oldPlaceholder: '/PRD/DEEP FREEZER/main images/B325-300x300.png'
  },
  {
    productId: 'fh1d-110-ct',
    model: 'FH1D 110 CT',
    newImagePath: '/images/products/FH1D-110-CT.jpg',
    oldPlaceholder: '/PRD/DEEP FREEZER/main images/B325-300x300.png'
  },
  {
    productId: 'fh2d-560-ct',
    model: 'FH2D 560 CT',
    newImagePath: '/images/products/FH2D-560-CT.jpg',
    oldPlaceholder: '/PRD/DEEP FREEZER/main images/B325-300x300.png'
  },
  {
    productId: 'f450gl25',
    model: 'F450GL25',
    newImagePath: '/images/products/F450GL25.jpg',
    oldPlaceholder: '/PRD/DEEP FREEZER/main images/F450GL-1-300x300.png'
  }
];

let updatedCount = 0;

imageUpdates.forEach(update => {
  // Check if the new image file exists
  const imagePath = path.join(__dirname, '..', 'public', update.newImagePath);
  const imageExists = fs.existsSync(imagePath);
  
  if (!imageExists) {
    // Try with PNG extension if JPG doesn't exist
    const pngPath = update.newImagePath.replace('.jpg', '.png');
    const pngFullPath = path.join(__dirname, '..', 'public', pngPath);
    if (fs.existsSync(pngFullPath)) {
      update.newImagePath = pngPath;
    } else {
      console.log(`⚠ Image file not found for ${update.model}: ${update.newImagePath}`);
      return;
    }
  }
  
  // Find the product in the file and update its images
  const productPattern = new RegExp(
    `"id":\\s*"${update.productId}"[^}]*?"images":\\s*\\[[^\\]]*?\\]`,
    'gs'
  );
  
  const match = fileContent.match(productPattern);
  if (match) {
    const oldBlock = match[0];
    
    // Replace the images array with the new image path
    const newBlock = oldBlock.replace(
      /"images":\s*\[[^\]]*\]/,
      `"images": [\n          "${update.newImagePath}",\n          "${update.oldPlaceholder}"\n        ]`
    );
    
    if (oldBlock !== newBlock) {
      fileContent = fileContent.replace(oldBlock, newBlock);
      updatedCount++;
      console.log(`✓ Updated images for ${update.model} (${update.productId})`);
    }
  } else {
    console.log(`⚠ Could not find product ${update.model} (${update.productId}) in file`);
  }
  
  // Also update imageUrl if it's using the placeholder
  const imageUrlPattern = new RegExp(
    `"id":\\s*"${update.productId}"[^}]*?"imageUrl":\\s*"[^"]*"`,
    'gs'
  );
  
  const imageUrlMatch = fileContent.match(imageUrlPattern);
  if (imageUrlMatch) {
    const oldImageUrl = imageUrlMatch[0];
    if (oldImageUrl.includes(update.oldPlaceholder) || oldImageUrl.includes('westernequipments.com')) {
      const newImageUrl = oldImageUrl.replace(
        /"imageUrl":\s*"[^"]*"/,
        `"imageUrl": "${update.newImagePath}"`
      );
      fileContent = fileContent.replace(oldImageUrl, newImageUrl);
      console.log(`  → Also updated imageUrl for ${update.model}`);
    }
  }
});

// Write the updated content back to the file
fs.writeFileSync(productsFilePath, fileContent, 'utf-8');

console.log(`\n=== Update Summary ===`);
console.log(`Total products updated: ${updatedCount}`);
console.log(`Products file has been updated successfully!`);