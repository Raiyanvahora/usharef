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

const missingImages = [];
let totalProducts = 0;

categories.forEach(category => {
  category.products.forEach(product => {
    totalProducts++;
    
    const hasValidImage = () => {
      if (!product.images || product.images.length === 0) return false;
      
      for (const imagePath of product.images) {
        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
          continue;
        }
        
        const fullPath = path.join(__dirname, '..', 'public', imagePath);
        if (fs.existsSync(fullPath)) {
          return true;
        }
      }
      
      if (product.imageUrl && (product.imageUrl.startsWith('http://') || product.imageUrl.startsWith('https://'))) {
        return true;
      }
      
      if (product.imageUrl) {
        const fullPath = path.join(__dirname, '..', 'public', product.imageUrl);
        if (fs.existsSync(fullPath)) {
          return true;
        }
      }
      
      return false;
    };
    
    if (!hasValidImage()) {
      missingImages.push({
        category: category.name,
        categoryId: category.id,
        productId: product.id,
        productName: product.name,
        model: product.model,
        images: product.images,
        imageUrl: product.imageUrl
      });
    }
  });
});

console.log(`\n=== Products with Missing Images ===\n`);
console.log(`Total products: ${totalProducts}`);
console.log(`Products with missing images: ${missingImages.length}`);
console.log(`\n--- Detailed List ---\n`);

missingImages.forEach(item => {
  console.log(`Category: ${item.category}`);
  console.log(`Product: ${item.productName}`);
  console.log(`Model: ${item.model}`);
  console.log(`Product ID: ${item.productId}`);
  console.log(`Image URLs: ${JSON.stringify(item.images)}`);
  console.log(`Image URL: ${item.imageUrl}`);
  console.log('---');
});