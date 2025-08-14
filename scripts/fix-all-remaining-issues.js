const fs = require('fs');
const path = require('path');

// Read the products.ts file
const filePath = path.join(__dirname, '..', 'data', 'products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Track changes
let externalUrlCount = 0;
let imageAltCount = 0;

// 1. Fix all remaining external URLs (icemakeindia.com and any others)
const externalUrlPatterns = [
  /https?:\/\/www\.icemakeindia\.com\/[^"'\s]+/gi,
  /https?:\/\/usha-refrigeration-anand\.netlify\.app\/[^"'\s]+/gi,
  /https?:\/\/[^"'\s]*\.(com|org|net|app)\/[^"'\s]+\.(jpg|jpeg|png|gif|webp)/gi
];

externalUrlPatterns.forEach(pattern => {
  content = content.replace(pattern, (match) => {
    // Skip if it's already a local path
    if (match.includes('/images/')) {
      return match;
    }
    externalUrlCount++;
    return '/images/placeholder.jpg';
  });
});

// 2. Clean up all imageAlt fields that contain URLs or paths
content = content.replace(/"imageAlt":\s*"[^"]*\/(images|PRD|products)[^"]*"/g, (match) => {
  imageAltCount++;
  return '';  // Remove the entire line
});

// Remove any remaining imageAlt fields with URLs
content = content.replace(/"imageAlt":\s*"https?:\/\/[^"]+"/g, (match) => {
  imageAltCount++;
  return '';  // Remove the entire line
});

// 3. Remove empty imageAlt fields
const lines = content.split('\n').filter(line => {
  // Keep lines that don't have imageAlt or have valid imageAlt content
  if (line.includes('"imageAlt":')) {
    // Only keep if it has actual alt text (not empty, not URL)
    return line.includes('"imageAlt": "') && 
           !line.includes('undefined') && 
           !line.includes('http') &&
           !line.includes('/images/') &&
           !line.includes('/PRD/');
  }
  return true;
});

content = lines.join('\n');

// Write the updated content back
fs.writeFileSync(filePath, content, 'utf8');

console.log(`Fixed ${externalUrlCount} external image URLs`);
console.log(`Cleaned ${imageAltCount} imageAlt fields`);

// Verify the changes
const updatedContent = fs.readFileSync(filePath, 'utf8');
const externalMatches = updatedContent.match(/https?:\/\/[^"'\s]*\.(com|org|net|app)\/[^"'\s]+\.(jpg|jpeg|png|gif|webp)/gi);
const badImageAltMatches = updatedContent.match(/"imageAlt":\s*"[^"]*\/(images|PRD|products)[^"]*"/g);

console.log('\nVerification:');
console.log(`Remaining external image URLs: ${externalMatches ? externalMatches.length : 0}`);
console.log(`Remaining bad imageAlt fields: ${badImageAltMatches ? badImageAltMatches.length : 0}`);