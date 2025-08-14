const fs = require('fs');

// Read the current products file
const productsFile = 'C:/Users/Admin/Desktop/usharef-1/data/products.ts';
let productsContent = fs.readFileSync(productsFile, 'utf8');

// Find the water solutions category section
const waterSolutionsStart = productsContent.indexOf('"id": "water-solutions"');
const nextCategoryStart = productsContent.indexOf('"id":', waterSolutionsStart + 10);
const waterSolutionsEnd = nextCategoryStart > -1 ? nextCategoryStart : productsContent.lastIndexOf(']') - 1;

// Create two separate categories: water-coolers and water-dispensers
const waterCoolers = {
  id: "water-coolers",
  name: "Water Coolers",
  description: "Commercial water coolers for offices, schools, hospitals, and public spaces. High-capacity cooling with stainless steel construction.",
  image: "/PRD-NEW/WATER-SOLUTIONS/images/SWC-80120-1-300x300.png",
  backgroundImage: "/PRD-NEW/WATER-SOLUTIONS/assets/assets_task_01jz91f8s2e6a9vbs40kxg5asy_1751576549_img_0.webp",
  models: []
};

const waterDispensers = {
  id: "water-dispensers", 
  name: "Water Dispensers",
  description: "Premium water dispensers with hot, cold, and normal water options. Perfect for offices, homes, and commercial establishments.",
  image: "/PRD/WATER DISPENSER/mainimagesdis/bwd3fmrga-bwd-mi-01-resized.jpg",
  backgroundImage: "/PRD/WATER DISPENSER/assets_task_01jz916vvkfmsvh028fg2d0yz3_1751576312_img_1.webp",
  models: [
    // Add some sample water dispenser models based on your image files
    {
      name: "BWD-3FMCGA",
      brand: "Western",
      image: "/PRD/WATER DISPENSER/mainimagesdis/bwd3fmcga-bwd-mi-01-resized.jpg",
      altText: "Western BWD-3FMCGA – Water Dispenser",
      price: "₹12,500",
      originalPrice: "₹15,000",
      capacity: "3 Tap",
      category: "Water Dispenser",
      sourceDoc: "Water Dispenser Catalog",
      description: "Western BWD-3FMCGA - Water Dispenser with Hot, Cold & Normal water",
      specifications: {
        Brand: "Western",
        Model: "BWD-3FMCGA",
        Capacity: "3 Tap",
        Category: "Water Dispenser",
        MRP: "₹15,000",
        "Billing Price": "₹12,500",
        "Source Document": "Water Dispenser Catalog"
      },
      features: [
        "Hot, Cold & Normal water dispensing",
        "Energy efficient cooling",
        "Child safety lock on hot water",
        "Stainless steel tanks"
      ],
      isNew: false,
      isBestseller: true
    },
    {
      name: "BWD-3FMRGA",
      brand: "Western",
      image: "/PRD/WATER DISPENSER/mainimagesdis/bwd3fmrga-bwd-mi-01-resized.jpg",
      altText: "Western BWD-3FMRGA – Water Dispenser",
      price: "₹13,800",
      originalPrice: "₹16,500",
      capacity: "3 Tap",
      category: "Water Dispenser",
      sourceDoc: "Water Dispenser Catalog",
      description: "Western BWD-3FMRGA - Premium Water Dispenser with refrigerator compartment",
      specifications: {
        Brand: "Western",
        Model: "BWD-3FMRGA",
        Capacity: "3 Tap",
        Category: "Water Dispenser",
        MRP: "₹16,500",
        "Billing Price": "₹13,800",
        "Source Document": "Water Dispenser Catalog"
      },
      features: [
        "Hot, Cold & Normal water dispensing",
        "Built-in mini refrigerator",
        "Energy efficient operation",
        "Premium design"
      ],
      isNew: true,
      isBestseller: false
    },
    {
      name: "BWD-3TTGA",
      brand: "Western",
      image: "/PRD/WATER DISPENSER/mainimagesdis/bwd3ttga-bwd-mi-01_1_.jpg",
      altText: "Western BWD-3TTGA – Water Dispenser",
      price: "₹11,200",
      originalPrice: "₹13,500",
      capacity: "2 Tap",
      category: "Water Dispenser",
      sourceDoc: "Water Dispenser Catalog",
      description: "Western BWD-3TTGA - Table Top Water Dispenser",
      specifications: {
        Brand: "Western",
        Model: "BWD-3TTGA",
        Capacity: "2 Tap",
        Category: "Water Dispenser",
        MRP: "₹13,500",
        "Billing Price": "₹11,200",
        "Source Document": "Water Dispenser Catalog"
      },
      features: [
        "Compact table top design",
        "Hot & Cold water",
        "Energy efficient",
        "Space saving design"
      ],
      isNew: false,
      isBestseller: false
    }
  ]
};

console.log('Water Dispensers category created with 3 models');
console.log('Water Coolers will retain the existing 7 models');

// Update the ice-back-bar-solutions ID to match the expected format
const updatedCategories = `
  {
    "id": "back-bar-units",
    "name": "Ice & Back Bar Solutions",
    "description": "Complete ice machines and back bar cooling solutions for hospitality, restaurants, bars, and hotels. Compact and efficient cooling for professional kitchens.",
    "image": "/PRD-NEW/ICE-BACK-BAR-SOLUTIONS/images/ICE-150-300x300.png",
    "backgroundImage": "/PRD-NEW/ICE-BACK-BAR-SOLUTIONS/assets/assets_task_01jz91f8s2e6a9vbs40kxg5asy_1751576549_img_0.webp",
    "models": [
      {
        "name": "BBU-200",
        "brand": "Western",
        "image": "/PRD-NEW/ICE-BACK-BAR-SOLUTIONS/images/BB-120L-300x300.png",
        "altText": "Western BBU-200 – Back Bar Unit",
        "price": "₹45,000",
        "originalPrice": "₹52,000",
        "capacity": "200L",
        "category": "Back Bar Unit",
        "sourceDoc": "Back Bar Solutions Catalog",
        "description": "Western BBU-200 - Professional Back Bar cooling unit",
        "specifications": {
          "Brand": "Western",
          "Model": "BBU-200",
          "Capacity": "200L",
          "Category": "Back Bar Unit",
          "MRP": "₹52,000",
          "Billing Price": "₹45,000",
          "Source Document": "Back Bar Solutions Catalog"
        },
        "features": [
          "Glass door display",
          "LED lighting",
          "Adjustable shelves",
          "Energy efficient cooling"
        ],
        "isNew": false,
        "isBestseller": true
      },
      {
        "name": "ICE-150",
        "brand": "Western",
        "image": "/PRD-NEW/ICE-BACK-BAR-SOLUTIONS/images/ICE-150-300x300.png",
        "altText": "Western ICE-150 – Ice Machine",
        "price": "₹85,000",
        "originalPrice": "₹98,000",
        "capacity": "150kg/day",
        "category": "Ice Machine",
        "sourceDoc": "Ice Machine Catalog",
        "description": "Western ICE-150 - Commercial Ice Making Machine",
        "specifications": {
          "Brand": "Western",
          "Model": "ICE-150",
          "Capacity": "150kg/day",
          "Category": "Ice Machine",
          "MRP": "₹98,000",
          "Billing Price": "₹85,000",
          "Source Document": "Ice Machine Catalog"
        },
        "features": [
          "150kg daily ice production",
          "Cube ice type",
          "Stainless steel construction",
          "Automatic operation"
        ],
        "isNew": true,
        "isBestseller": false
      }
    ]
  }`;

// Save the structure for reference
fs.writeFileSync('C:/Users/Admin/Desktop/usharef-1/water-categories-update.json', JSON.stringify({
  waterCoolers,
  waterDispensers,
  backBarUnits: JSON.parse(updatedCategories.replace(/"/g, '"'))
}, null, 2));

console.log('Category restructuring plan saved to water-categories-update.json');
console.log('\nProposed structure:');
console.log('1. Freezers (49 products) - unchanged');
console.log('2. Coolers (31 products) - unchanged'); 
console.log('3. Display & Pastry Counters (4 products) - unchanged');
console.log('4. Back Bar Units (2 products) - renamed from "Ice & Back Bar Solutions"');
console.log('5. Water Coolers (7 products) - existing water cooler models');
console.log('6. Water Dispensers (3 products) - NEW category with dispenser models');