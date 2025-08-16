const fs = require('fs');
const path = require('path');

// Read the products file directly
const productsFile = fs.readFileSync(path.join(__dirname, 'data', 'products.ts'), 'utf8');

// Extract the productCategories array using regex
const categoryMatch = productsFile.match(/export const productCategories[^=]*=\s*(\[[\s\S]*?\]);/);

if (!categoryMatch) {
  console.error('Could not find productCategories in the file');
  process.exit(1);
}

// Use eval to parse the JavaScript object (not recommended for production but okay for validation)
let productCategories;
try {
  // Clean up the TypeScript syntax for basic parsing
  const cleanedData = categoryMatch[1]
    .replace(/\/\/[^\n]*/g, '') // Remove comments
    .replace(/'/g, '"'); // Replace single quotes with double quotes for JSON parsing
  
  productCategories = JSON.parse(cleanedData);
} catch (e) {
  console.error('Failed to parse categories:', e.message);
  process.exit(1);
}

console.log('=== USHA REFRIGERATION PRODUCT CATEGORIES VALIDATION ===');
console.log('Total categories:', productCategories.length);
console.log('');

productCategories.forEach((category, i) => {
  console.log(`${i + 1}. ${category.name}`);
  console.log(`   - ID: ${category.id}`);
  console.log(`   - Products: ${category.models.length}`);
  console.log(`   - Warranty: ${category.warranty || 'Not specified'}`);
  console.log(`   - Delivery: ${category.deliveryInfo || 'Not specified'}`);
  console.log(`   - Brands: ${category.brands ? category.brands.join(', ') : 'Not specified'}`);
  
  if (category.filterOptions) {
    console.log(`   - Filter Types: ${category.filterOptions.types ? category.filterOptions.types.join(', ') : 'None'}`);
  }
  
  // Count products by type
  const typeCount = {};
  category.models.forEach(product => {
    if (product.type) {
      typeCount[product.type] = (typeCount[product.type] || 0) + 1;
    }
  });
  
  if (Object.keys(typeCount).length > 0) {
    console.log(`   - Product breakdown:`);
    Object.entries(typeCount).forEach(([type, count]) => {
      console.log(`     * ${type}: ${count} products`);
    });
  }
  console.log('');
});

console.log('=== SUMMARY ===');
const totalProducts = productCategories.reduce((sum, cat) => sum + cat.models.length, 0);
console.log(`Total products across all categories: ${totalProducts}`);

console.log('\n=== FREEZERS DETAILED BREAKDOWN ===');
const freezersCategory = productCategories.find(cat => cat.id === 'freezers');
if (freezersCategory) {
  console.log('Freezer types and models:');
  const freezerTypes = {};
  freezersCategory.models.forEach(product => {
    if (!freezerTypes[product.type]) {
      freezerTypes[product.type] = [];
    }
    freezerTypes[product.type].push(product.name);
  });
  
  Object.entries(freezerTypes).forEach(([type, models]) => {
    console.log(`\n${type} Freezers (${models.length}):`);
    models.forEach(model => console.log(`  - ${model}`));
  });
}

console.log('\n=== COOLERS DETAILED BREAKDOWN ===');
const coolersCategory = productCategories.find(cat => cat.id === 'coolers');
if (coolersCategory) {
  console.log('Cooler types and models:');
  const coolerTypes = {};
  coolersCategory.models.forEach(product => {
    if (!coolerTypes[product.type]) {
      coolerTypes[product.type] = [];
    }
    coolerTypes[product.type].push(product.name);
  });
  
  Object.entries(coolerTypes).forEach(([type, models]) => {
    console.log(`\n${type} Coolers (${models.length}):`);
    models.forEach(model => console.log(`  - ${model}`));
  });
}