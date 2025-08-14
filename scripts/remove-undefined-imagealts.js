const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Remove lines with undefined imageAlt
const lines = content.split('\n').filter(line => !line.includes('"imageAlt": undefined,'));

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Removed undefined imageAlt fields');