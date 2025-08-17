const fs = require('fs');
const path = require('path');

// Read the products file
const filePath = path.join(__dirname, '..', 'data', 'products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace all occurrences of originalPrice with mrp
// For products that have originalPrice, use that as MRP
// For products that only have price, use price as MRP

// Pattern 1: When there's originalPrice, use it as MRP
content = content.replace(/price:\s*'([^']+)',\s*originalPrice:\s*'([^']+)'/g, 
  "mrp: '$2'");

// Pattern 2: When there's only price (no originalPrice), use price as MRP
content = content.replace(/price:\s*'([^']+)',(?!\s*originalPrice)/g, 
  "mrp: '$1'");

// Pattern 3: Handle "Price on Request" cases
content = content.replace(/price:\s*'Price on Request'/g, 
  "mrp: 'Contact for MRP'");

// Write back the updated content
fs.writeFileSync(filePath, content, 'utf8');

console.log('Migration to MRP completed successfully!');