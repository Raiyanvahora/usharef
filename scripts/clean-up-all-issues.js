const fs = require('fs');
const path = require('path');

// Read the products.ts file
const filePath = path.join(__dirname, '..', 'data', 'products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove all external URLs from images arrays and imageUrl
content = content.replace(/https:\/\/[^"',\s]+/g, '/images/placeholder.jpg');

// 2. Fix syntax errors - remove standalone commas
content = content.replace(/,\s*\n\s*"/g, '\n        "');

// 3. Remove any lines that are just commas
const lines = content.split('\n').filter(line => {
  const trimmed = line.trim();
  return trimmed !== ',' && trimmed !== '';
});

content = lines.join('\n');

// Write the updated content back
fs.writeFileSync(filePath, content, 'utf8');

console.log('Fixed all syntax errors and external URLs');

// Verify the changes
const updatedContent = fs.readFileSync(filePath, 'utf8');
const externalMatches = updatedContent.match(/https:\/\/[^"',\s]+/g);
const commaErrors = updatedContent.match(/,\s*\n\s*"/g);

console.log(`Remaining external URLs: ${externalMatches ? externalMatches.length : 0}`);
console.log(`Remaining comma syntax errors: ${commaErrors ? commaErrors.length : 0}`);