const fs = require('fs');
const path = require('path');

// Read the CSV file
const csvPath = 'C:/Users/Admin/Downloads/products_master_with_images_and_prices.csv';
const csvContent = fs.readFileSync(csvPath, 'utf8');

// Parse CSV manually (simple CSV parser)
function parseCSV(content) {
  const lines = content.split('\n').filter(line => line.trim());
  const headers = lines[0].split(',');
  const products = [];
  
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const product = {};
    
    headers.forEach((header, index) => {
      product[header.trim()] = values[index] ? values[index].trim() : '';
    });
    
    products.push(product);
  }
  
  return products;
}

// Parse the CSV
const products = parseCSV(csvContent);

// Transform products to match our category structure
const categoryMapping = {
  'Convertible Freezer & Cooler': 'freezers',
  'Combi Freezer/Cooler': 'freezers',
  'Vertical Freezer': 'freezers',
  'Glass Top Deep Freezer': 'freezers',
  'Eutectic Freezer': 'freezers',
  'Scooping Parlour': 'freezers',
  'Freezer on Wheel': 'freezers',
  'Visi Cooler': 'coolers',
  'Water Cooler': 'water-solutions',
  'Water Dispenser': 'water-solutions',
  'Ice Machine': 'ice-back-bar-solutions',
  'Back Bar Units': 'ice-back-bar-solutions',
  'Pastry Counter': 'display-pastry-counters',
  'Display Counter': 'display-pastry-counters'
};

// Group products by category
const categorizedProducts = {};

products.forEach(product => {
  const categoryKey = categoryMapping[product.category] || 'freezers';
  
  if (!categorizedProducts[categoryKey]) {
    categorizedProducts[categoryKey] = [];
  }
  
  // Transform the product data
  const transformedProduct = {
    name: product.model,
    brand: product.brand,
    image: product.image_url,
    altText: product.alt_text,
    price: product.billing_price ? `₹${Math.round(parseFloat(product.billing_price)).toLocaleString('en-IN')}` : 'Price on Request',
    originalPrice: product.mrp ? `₹${Math.round(parseFloat(product.mrp)).toLocaleString('en-IN')}` : null,
    capacity: product.capacity || 'N/A',
    category: product.category,
    sourceDoc: product.source_doc,
    description: `${product.brand} ${product.model} - ${product.category}. ${product.alt_text}`,
    specifications: {
      'Brand': product.brand,
      'Model': product.model,
      'Capacity': product.capacity || 'N/A',
      'Category': product.category,
      'MRP': product.mrp ? `₹${Math.round(parseFloat(product.mrp)).toLocaleString('en-IN')}` : 'N/A',
      'Billing Price': product.billing_price ? `₹${Math.round(parseFloat(product.billing_price)).toLocaleString('en-IN')}` : 'N/A',
      'Source Document': product.source_doc
    },
    features: [
      `High-quality ${product.category.toLowerCase()}`,
      'Energy efficient operation',
      'Durable construction',
      'Commercial grade performance'
    ],
    isNew: false,
    isBestseller: false
  };
  
  // Add type based on category
  if (categoryKey === 'freezers') {
    transformedProduct.type = product.category;
    transformedProduct.size = product.capacity && parseInt(product.capacity) < 200 ? 'Small' : 
                               product.capacity && parseInt(product.capacity) < 500 ? 'Medium' : 'Large';
    transformedProduct.starRating = '4 Star';
  } else if (categoryKey === 'coolers') {
    transformedProduct.doorType = 'Single'; // Default, can be updated based on model
    transformedProduct.type = 'Visi Cooler';
  }
  
  categorizedProducts[categoryKey].push(transformedProduct);
});

// Create the final product categories structure
const productCategories = [
  {
    id: 'freezers',
    name: 'Freezers',
    description: 'Premium commercial freezers including convertible, combi, glass top, eutectic, scooping, vertical, and freezer on wheels. Perfect for ice cream parlours, supermarkets, and commercial establishments.',
    image: '/PRD-NEW/FREEZERS/images/D300-Double-dOOR-1-300x300.png',
    backgroundImage: '/PRD-NEW/FREEZERS/assets/assets_task_01jz91qtt4ec78qfrj1b2e738q_1751576837_img_0.webp',
    models: categorizedProducts['freezers'] || []
  },
  {
    id: 'coolers',
    name: 'Coolers',
    description: 'Professional visi coolers and vertical/supermarket coolers with single, double, and triple door options. Perfect for beverage display, retail stores, and supermarkets.',
    image: '/PRD-NEW/COOLERS/images/0709091_SRC380HC-GL_Left-Angle-300x300.png',
    backgroundImage: '/PRD-NEW/COOLERS/assets/assets_task_01jz928z7tf5kbvrem9tr2bn43_1751577397_img_1.webp',
    models: categorizedProducts['coolers'] || []
  },
  {
    id: 'display-pastry-counters',
    name: 'Display & Pastry Counters',
    description: 'Elegant display counters and pastry showcases for bakeries, cafes, pastry shops, and restaurants. Perfect for showcasing desserts, cakes, and prepared foods.',
    image: '/PRD-NEW/DISPLAY-PASTRY-COUNTERS/images/Right-Angle-With-Stock-1-300x300.png',
    backgroundImage: '/PRD-NEW/DISPLAY-PASTRY-COUNTERS/assets/assets_task_01jz931a3zefas9y7hmkgr1ze3_1751578188_img_0.webp',
    models: categorizedProducts['display-pastry-counters'] || []
  },
  {
    id: 'ice-back-bar-solutions',
    name: 'Ice & Back Bar Solutions',
    description: 'Complete ice machines and back bar cooling solutions for hospitality, restaurants, bars, and hotels. Compact and efficient cooling for professional kitchens.',
    image: '/PRD-NEW/ICE-BACK-BAR-SOLUTIONS/images/ICE-150-300x300.png',
    backgroundImage: '/PRD-NEW/ICE-BACK-BAR-SOLUTIONS/assets/assets_task_01jz91f8s2e6a9vbs40kxg5asy_1751576549_img_0.webp',
    models: categorizedProducts['ice-back-bar-solutions'] || []
  },
  {
    id: 'water-solutions',
    name: 'Water Solutions',
    description: 'Commercial water coolers and dispensers for offices, schools, hospitals, and public spaces. High-capacity cooling with stainless steel construction.',
    image: '/PRD-NEW/WATER-SOLUTIONS/images/PWC-40806080-1-300x300.png',
    backgroundImage: '/PRD-NEW/WATER-SOLUTIONS/assets/assets_task_01jz91f8s2e6a9vbs40kxg5asy_1751576549_img_0.webp',
    models: categorizedProducts['water-solutions'] || []
  }
];

// Generate TypeScript interfaces
const typeScriptContent = `// Auto-generated from CSV file
interface ProductModel {
  name: string;
  brand: string;
  image: string;
  altText: string;
  price: string;
  originalPrice?: string;
  capacity: string;
  category: string;
  sourceDoc: string;
  description?: string;
  features?: string[];
  specifications?: { [key: string]: string };
  isNew?: boolean;
  isBestseller?: boolean;
  type?: string;
  doorType?: string;
  size?: string;
  starRating?: string;
}

interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  backgroundImage?: string;
  models: ProductModel[];
}

export const productCategories: ProductCategory[] = ${JSON.stringify(productCategories, null, 2)};
`;

// Write the TypeScript file
fs.writeFileSync(path.join(__dirname, '../data/products-from-csv.ts'), typeScriptContent);

// Generate summary
console.log('CSV Processing Complete!');
console.log('Total products processed:', products.length);
console.log('Products per category:');
Object.keys(categorizedProducts).forEach(category => {
  console.log(`  ${category}: ${categorizedProducts[category].length} products`);
});
console.log('Generated file: data/products-from-csv.ts');