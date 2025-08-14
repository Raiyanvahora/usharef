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

const remoteOnlyProducts = [];
let totalProducts = 0;

categories.forEach(category => {
  category.products.forEach(product => {
    totalProducts++;
    
    let hasLocalImage = false;
    let remoteUrls = [];
    
    if (product.images && product.images.length > 0) {
      product.images.forEach(imagePath => {
        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
          remoteUrls.push(imagePath);
        } else {
          const fullPath = path.join(__dirname, '..', 'public', imagePath);
          if (fs.existsSync(fullPath)) {
            hasLocalImage = true;
          }
        }
      });
    }
    
    if (product.imageUrl) {
      if (product.imageUrl.startsWith('http://') || product.imageUrl.startsWith('https://')) {
        remoteUrls.push(product.imageUrl);
      } else {
        const fullPath = path.join(__dirname, '..', 'public', product.imageUrl);
        if (fs.existsSync(fullPath)) {
          hasLocalImage = true;
        }
      }
    }
    
    if (!hasLocalImage && remoteUrls.length > 0) {
      remoteOnlyProducts.push({
        category: category.name,
        categoryId: category.id,
        productId: product.id,
        productName: product.name,
        model: product.model,
        remoteUrls: [...new Set(remoteUrls)]
      });
    }
  });
});

console.log(`\n=== Products Using Only Remote Images ===\n`);
console.log(`Total products: ${totalProducts}`);
console.log(`Products with only remote images: ${remoteOnlyProducts.length}`);
console.log(`\n--- Detailed List ---\n`);

remoteOnlyProducts.forEach(item => {
  console.log(`Product Name: ${item.productName}`);
  console.log(`Model: ${item.model}`);
  console.log(`Category: ${item.category}`);
  console.log(`Product ID: ${item.productId}`);
  console.log(`Remote URLs:`);
  item.remoteUrls.forEach(url => console.log(`  - ${url}`));
  console.log('---');
});