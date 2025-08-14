const fs = require('fs');
const path = require('path');

// Read the products.ts file
const filePath = path.join(__dirname, '..', 'data', 'products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Track changes
let changeCount = 0;
let notFoundImages = new Set();

// Get list of available images
const imagesDir = path.join(__dirname, '..', 'public', 'images', 'products');
const availableImages = fs.readdirSync(imagesDir).map(f => f.toLowerCase());

// Function to extract model number from PRD path and find matching image
function findMatchingImage(prdPath, modelNumber) {
  // Extract filename from PRD path
  const pathParts = prdPath.split('/');
  const prdFilename = pathParts[pathParts.length - 1].toLowerCase();
  
  // Try to find exact match first
  if (availableImages.includes(prdFilename)) {
    return `/images/products/${prdFilename}`;
  }
  
  // Try to match by model number
  const modelImage = `${modelNumber}.jpg`.toLowerCase();
  if (availableImages.includes(modelImage)) {
    return `/images/products/${modelImage}`;
  }
  
  // If not found, return placeholder
  notFoundImages.add(prdPath);
  return '/images/placeholder.jpg';
}

// Process each product to fix image paths
const lines = content.split('\n');
let currentModel = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Track current model
  if (line.includes('"model":')) {
    const modelMatch = line.match(/"model":\s*"([^"]+)"/);
    if (modelMatch) {
      currentModel = modelMatch[1];
    }
  }
  
  // Fix images array
  if (line.includes('"/PRD/')) {
    const originalLine = line;
    // Replace PRD paths with proper image paths
    lines[i] = line.replace(/["']\/PRD\/[^"']+["']/g, (match) => {
      const cleanMatch = match.slice(1, -1); // Remove quotes
      const replacement = findMatchingImage(cleanMatch, currentModel);
      changeCount++;
      return match[0] + replacement + match[0];
    });
    
    if (lines[i] !== originalLine) {
      console.log(`Fixed: ${currentModel}`);
    }
  }
  
  // Fix imageAlt that incorrectly contains image paths
  if (line.includes('"imageAlt":') && line.includes('/PRD/')) {
    lines[i] = line.replace(/"imageAlt":\s*"[^"]+"/g, '"imageAlt": "Product Image"');
  }
}

// Join lines back
content = lines.join('\n');

// Write the updated content back
fs.writeFileSync(filePath, content, 'utf8');

console.log(`\nFixed ${changeCount} image path references`);

if (notFoundImages.size > 0) {
  console.log('\nImages not found (using placeholder):');
  notFoundImages.forEach(img => console.log(`  - ${img}`));
}

// Verify the changes
const updatedContent = fs.readFileSync(filePath, 'utf8');
const prdMatches = updatedContent.match(/\/PRD\//g);
const imageMatches = updatedContent.match(/\/images\//g);

console.log('\nVerification:');
console.log(`Remaining /PRD/ paths: ${prdMatches ? prdMatches.length : 0}`);
console.log(`Total /images/ paths: ${imageMatches ? imageMatches.length : 0}`);