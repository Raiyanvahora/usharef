const fs = require('fs');
const path = require('path');

// Read the products file
const filePath = path.join(__dirname, '..', 'data', 'products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Find all product objects that start with "{ name:" but don't have "id:" before them
const lines = content.split('\n');
let modified = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Look for lines that have "{ " followed by "name:" on the next line or same line
  if (line.trim().match(/^\{\s*$/) || line.trim().match(/^\{\s*name:/)) {
    // Check if the next few lines contain "name:" but no "id:"
    let hasId = false;
    let hasName = false;
    let nameValue = '';
    
    // Check current line and next few lines
    for (let j = i; j < Math.min(i + 3, lines.length); j++) {
      if (lines[j].includes('id:')) {
        hasId = true;
        break;
      }
      if (lines[j].includes('name:')) {
        hasName = true;
        const nameMatch = lines[j].match(/name:\s*'([^']+)'/);
        if (nameMatch) {
          nameValue = nameMatch[1];
        }
      }
    }
    
    // If we found a name but no id, add the id
    if (hasName && !hasId && nameValue) {
      const idValue = nameValue
        .replace(/[^a-zA-Z0-9\s\-\/]/g, '') // Remove special chars except spaces, hyphens, and slashes
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/\//g, '-') // Replace slashes with hyphens
        .toUpperCase();
      
      // Find the line with "name:" and add id before it
      for (let j = i; j < Math.min(i + 3, lines.length); j++) {
        if (lines[j].includes('name:')) {
          const indent = lines[j].match(/^(\s*)/)[1];
          lines.splice(j, 0, `${indent}id: '${idValue}',`);
          modified = true;
          console.log(`Added ID '${idValue}' for product '${nameValue}'`);
          break;
        }
      }
    }
  }
}

if (modified) {
  fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
  console.log('Successfully fixed remaining product IDs');
} else {
  console.log('No missing IDs found');
}