const { categories } = require('../data/products.ts');

console.log('🔍 Testing Image URLs...\n');

// Test first few products from different categories
categories.slice(0, 3).forEach(category => {
  console.log(`📁 ${category.name}:`);
  
  category.products.slice(0, 3).forEach(product => {
    console.log(`  📦 ${product.model}:`);
    console.log(`    Primary: ${product.imageUrl}`);
    console.log(`    Fallback: ${product.imageAlt}`);
    console.log(`    All images: [${product.images.join(', ')}]`);
    console.log('');
  });
  
  console.log('');
});

console.log(`✅ Total products processed: ${categories.reduce((sum, cat) => sum + cat.products.length, 0)}`);
console.log(`✅ Total categories: ${categories.length}`);