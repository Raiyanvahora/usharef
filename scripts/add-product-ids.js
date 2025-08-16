const fs = require('fs');
const path = require('path');

// Read the products file
const filePath = path.join(__dirname, '..', 'data', 'products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Regular expression to find product objects without id field
const productPattern = /(\s+)(\{ name: '([^']+)')/g;

// Add id field based on the name
content = content.replace(productPattern, (match, indent, original, productName) => {
  // Check if this already has an id (to avoid duplicating)
  const checkPattern = new RegExp(`${indent}\\{ id: '${productName}'`);
  if (content.includes(`${indent}{ id: '${productName}'`)) {
    return match; // Already has id, return unchanged
  }
  
  // Add id field
  return `${indent}{ id: '${productName}', name: '${productName}'`;
});

// Write the updated content back
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully added product IDs to all products');