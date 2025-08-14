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

// Track image usage
const imageUsage = {};
const productsWithoutUniqueImages = [];
let totalProducts = 0;

categories.forEach(category => {
  category.products.forEach(product => {
    totalProducts++;
    
    const productImages = new Set();
    
    // Collect all images for this product
    if (product.images && Array.isArray(product.images)) {
      product.images.forEach(img => {
        if (!img.startsWith('http://') && !img.startsWith('https://')) {
          productImages.add(img);
          
          if (!imageUsage[img]) {
            imageUsage[img] = [];
          }
          imageUsage[img].push({
            productName: product.name,
            model: product.model,
            productId: product.id,
            category: category.name
          });
        }
      });
    }
    
    if (product.imageUrl && !product.imageUrl.startsWith('http://') && !product.imageUrl.startsWith('https://')) {
      productImages.add(product.imageUrl);
      
      if (!imageUsage[product.imageUrl]) {
        imageUsage[product.imageUrl] = [];
      }
      imageUsage[product.imageUrl].push({
        productName: product.name,
        model: product.model,
        productId: product.id,
        category: category.name
      });
    }
    
    // Check if product is using generic/placeholder images
    const hasGenericImage = Array.from(productImages).some(img => 
      img.toLowerCase().includes('placeholder') ||
      img.toLowerCase().includes('default') ||
      img.toLowerCase().includes('no-image') ||
      img.includes('B325-300x300.png') || // Common placeholder
      img.includes('D150-300x300.png') ||  // Common placeholder
      img.includes('D100-300x300.png')     // Common placeholder
    );
    
    if (hasGenericImage || productImages.size === 0) {
      productsWithoutUniqueImages.push({
        productName: product.name,
        model: product.model,
        productId: product.id,
        category: category.name,
        images: Array.from(productImages)
      });
    }
  });
});

// Find images used by multiple products (potential placeholders)
const sharedImages = Object.entries(imageUsage)
  .filter(([img, products]) => products.length > 1)
  .sort((a, b) => b[1].length - a[1].length);

console.log(`\n=== Image Usage Analysis ===\n`);
console.log(`Total products: ${totalProducts}`);
console.log(`Unique local images: ${Object.keys(imageUsage).length}`);
console.log(`Images shared by multiple products: ${sharedImages.length}`);

if (sharedImages.length > 0) {
  console.log(`\n--- Images Used by Multiple Products (Potential Placeholders) ---\n`);
  sharedImages.forEach(([img, products]) => {
    console.log(`\nImage: ${img}`);
    console.log(`Used by ${products.length} products:`);
    products.slice(0, 5).forEach(p => {
      console.log(`  - ${p.productName} (Model: ${p.model})`);
    });
    if (products.length > 5) {
      console.log(`  ... and ${products.length - 5} more products`);
    }
  });
}

if (productsWithoutUniqueImages.length > 0) {
  console.log(`\n--- Products Possibly Using Generic/Placeholder Images ---\n`);
  console.log(`Found ${productsWithoutUniqueImages.length} products that might need unique images:\n`);
  
  productsWithoutUniqueImages.forEach(product => {
    console.log(`Product: ${product.productName}`);
    console.log(`Model: ${product.model}`);
    console.log(`Category: ${product.category}`);
    console.log(`Current images: ${product.images.length > 0 ? product.images.join(', ') : 'No local images'}`);
    console.log('---');
  });
}

// Summary
console.log(`\n=== Summary ===`);
console.log(`Products that might need unique product images: ${productsWithoutUniqueImages.length}`);
if (productsWithoutUniqueImages.length > 0) {
  console.log(`\nThese products are either:`);
  console.log(`- Using shared/placeholder images`);
  console.log(`- Using generic product category images`);
  console.log(`- Missing product-specific images`);
}