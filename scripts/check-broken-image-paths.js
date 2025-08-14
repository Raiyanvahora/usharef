const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '..', 'data', 'products.ts');
const fileContent = fs.readFileSync(productsFilePath, 'utf-8');

const categoriesMatch = fileContent.match(/export const categories: Category\[\] = (\[[\s\S]*\]);/);
if (!categoriesMatch) {
  console.error('Could not find categories in products.ts');
  process.exit(1);
}

const categoriesString = categoriesMatch[1];
const categories = eval(categoriesString);

const brokenImages = [];
const allImagePaths = new Set();
let totalProducts = 0;
let totalImageRefs = 0;

categories.forEach(category => {
  category.products.forEach(product => {
    totalProducts++;
    
    const checkImage = (imagePath, source) => {
      if (!imagePath) return;
      
      totalImageRefs++;
      
      // Skip remote URLs
      if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        return;
      }
      
      allImagePaths.add(imagePath);
      
      // Check if local file exists
      const fullPath = path.join(__dirname, '..', 'public', imagePath);
      if (!fs.existsSync(fullPath)) {
        brokenImages.push({
          category: category.name,
          categoryId: category.id,
          productId: product.id,
          productName: product.name,
          model: product.model,
          imagePath: imagePath,
          fullPath: fullPath,
          source: source
        });
      }
    };
    
    // Check images array
    if (product.images && Array.isArray(product.images)) {
      product.images.forEach(img => checkImage(img, 'images array'));
    }
    
    // Check imageUrl
    if (product.imageUrl) {
      checkImage(product.imageUrl, 'imageUrl');
    }
    
    // Check imageAlt (sometimes used as fallback)
    if (product.imageAlt && !product.imageAlt.includes(' ')) {
      checkImage(product.imageAlt, 'imageAlt');
    }
  });
});

console.log(`\n=== Image Path Analysis ===\n`);
console.log(`Total products: ${totalProducts}`);
console.log(`Total image references: ${totalImageRefs}`);
console.log(`Unique local image paths: ${allImagePaths.size}`);
console.log(`Broken image references: ${brokenImages.length}`);

if (brokenImages.length > 0) {
  console.log(`\n--- Products with Broken Local Image Paths ---\n`);
  
  // Group by image path to see which images affect multiple products
  const imageToProducts = {};
  brokenImages.forEach(item => {
    if (!imageToProducts[item.imagePath]) {
      imageToProducts[item.imagePath] = [];
    }
    imageToProducts[item.imagePath].push(item);
  });
  
  // Sort by number of affected products
  const sortedPaths = Object.keys(imageToProducts).sort((a, b) => 
    imageToProducts[b].length - imageToProducts[a].length
  );
  
  sortedPaths.forEach(imagePath => {
    const products = imageToProducts[imagePath];
    console.log(`\nMissing Image: ${imagePath}`);
    console.log(`Affects ${products.length} product(s):`);
    products.forEach(item => {
      console.log(`  - ${item.productName} (Model: ${item.model}, ID: ${item.productId})`);
      console.log(`    Category: ${item.category}`);
      console.log(`    Source: ${item.source}`);
    });
  });
  
  console.log(`\n--- Summary of Missing Image Files ---\n`);
  sortedPaths.forEach(imagePath => {
    console.log(`${imagePath} (${imageToProducts[imagePath].length} products)`);
  });
} else {
  console.log(`\n✅ All local image paths are valid and files exist!`);
}

// Also check what directories exist
console.log(`\n--- Existing Image Directories ---`);
const publicDir = path.join(__dirname, '..', 'public');
const checkDir = (dir, indent = '') => {
  const fullPath = path.join(publicDir, dir);
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      console.log(`${indent}${dir}/`);
      const items = fs.readdirSync(fullPath);
      const imageDirs = items.filter(item => {
        const itemPath = path.join(fullPath, item);
        return fs.statSync(itemPath).isDirectory() && 
               (item.toLowerCase().includes('image') || 
                item.toLowerCase().includes('prd') ||
                item === 'PRD' ||
                item === 'PRD-NEW');
      });
      imageDirs.forEach(subdir => {
        checkDir(path.join(dir, subdir), indent + '  ');
      });
    }
  }
};

checkDir('');
checkDir('images');
checkDir('PRD');
checkDir('PRD-NEW');