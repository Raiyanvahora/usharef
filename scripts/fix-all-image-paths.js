const fs = require('fs');
const path = require('path');

// Read the products.ts file
const filePath = path.join(__dirname, '..', 'data', 'products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Track changes
let changeCount = 0;
const originalContent = content;

// Fix all /PRD/ paths to use /images/products/
// Extract just the filename from the PRD paths
content = content.replace(/\/PRD\/[^"'\s]+([\w\-]+\.(png|jpg|jpeg|gif|webp))/gi, (match, filename) => {
  // Extract just the filename from the path
  const parts = match.split('/');
  const file = parts[parts.length - 1];
  changeCount++;
  return `/images/products/${file}`;
});

// Also fix any imageAlt that incorrectly stores image paths
content = content.replace(/"imageAlt":\s*"\/PRD\/[^"]+"/g, (match) => {
  return '"imageAlt": undefined';
});

// Write the updated content back
fs.writeFileSync(filePath, content, 'utf8');

console.log(`Fixed ${changeCount} image path references`);
console.log('All /PRD/ paths have been replaced with /images/products/ paths');

// Verify the changes
const updatedContent = fs.readFileSync(filePath, 'utf8');
const prdMatches = updatedContent.match(/\/PRD\//g);
const imageMatches = updatedContent.match(/\/images\/products\//g);

console.log('\nVerification:');
console.log(`Remaining /PRD/ paths: ${prdMatches ? prdMatches.length : 0}`);
console.log(`Total /images/products/ paths: ${imageMatches ? imageMatches.length : 0}`);