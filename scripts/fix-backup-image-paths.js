const fs = require('fs');
const path = require('path');

// Read the products.ts file
const filePath = path.join(__dirname, '..', 'data', 'products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace all /PRD/ paths with /images/placeholder.jpg
content = content.replace(/\/PRD\/[^"'\s]*/g, '/images/placeholder.jpg');

// Write back
fs.writeFileSync(filePath, content, 'utf8');

console.log('Fixed all image paths in backup file');