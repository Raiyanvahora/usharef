const fs = require('fs');
const path = require('path');

// Read the products.ts file
const filePath = path.join(__dirname, '..', 'data', 'products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Fix malformed paths - replace anything starting with "/images/placeholder.jpg" followed by a space and more text
content = content.replace(/\/images\/placeholder\.jpg [^'"]+/g, '/images/placeholder.jpg');

// Write back
fs.writeFileSync(filePath, content, 'utf8');

console.log('Fixed malformed image paths');