const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

const csvPath = path.join(__dirname, '..', 'public', 'all_brands_products_with_images.csv');
const outputPath = path.join(__dirname, '..', 'data', 'products.ts');

// Read existing local images
const getLocalImages = () => {
  const images = {};
  
  try {
    const deepFreezerPath = path.join(__dirname, '..', 'public', 'PRD', 'DEEP FREEZER', 'main images');
    const visiCoolerPath = path.join(__dirname, '..', 'public', 'PRD', 'VISI COOLER', 'mainimagesvisi');
    const waterCoolerPath = path.join(__dirname, '..', 'public', 'PRD', 'WATER COOLER', 'mainimageswater');
    const pastryPath = path.join(__dirname, '..', 'public', 'PRD', 'PASTRY COUNTER', 'mainimages');
    
    if (fs.existsSync(deepFreezerPath)) {
      images.freezer = fs.readdirSync(deepFreezerPath).map(img => `/PRD/DEEP FREEZER/main images/${img}`);
    }
    if (fs.existsSync(visiCoolerPath)) {
      images.cooler = fs.readdirSync(visiCoolerPath).map(img => `/PRD/VISI COOLER/mainimagesvisi/${img}`);
    }
    if (fs.existsSync(waterCoolerPath)) {
      images.water = fs.readdirSync(waterCoolerPath).map(img => `/PRD/WATER COOLER/mainimageswater/${img}`);
    }
    if (fs.existsSync(pastryPath)) {
      images.pastry = fs.readdirSync(pastryPath).map(img => `/PRD/PASTRY COUNTER/mainimages/${img}`);
    }
  } catch (error) {
    console.warn('Could not read local images:', error.message);
  }
  
  return images;
};

const localImages = getLocalImages();

// Create mapping function to find local fallback
function findLocalFallback(model, category) {
  // Clean model name for matching
  const cleanModel = model.replace(/[^A-Z0-9]/gi, '').toUpperCase();
  
  let searchImages = [];
  const categoryLower = category.toLowerCase();
  
  if (categoryLower.includes('freezer') || categoryLower.includes('eutectic') || categoryLower.includes('scooping')) {
    searchImages = localImages.freezer || [];
  } else if (categoryLower.includes('cooler') || categoryLower.includes('visi')) {
    searchImages = localImages.cooler || [];
  } else if (categoryLower.includes('water')) {
    searchImages = localImages.water || [];
  } else if (categoryLower.includes('pastry') || categoryLower.includes('display')) {
    searchImages = localImages.pastry || [];
  }
  
  // Try to find matching image by model code
  for (const imgPath of searchImages) {
    const imgName = path.basename(imgPath).toUpperCase().replace(/[^A-Z0-9]/gi, '');
    
    // Check if model matches the image name
    if (imgName.includes(cleanModel.substring(0, 4)) || 
        cleanModel.includes(imgName.substring(0, 4))) {
      return imgPath;
    }
    
    // Try more flexible matching
    const modelParts = cleanModel.match(/[A-Z]+|\d+/g) || [];
    const imgParts = imgName.match(/[A-Z]+|\d+/g) || [];
    
    if (modelParts.some(part => imgParts.some(imgPart => 
        part.length > 2 && imgPart.length > 2 && 
        (part.includes(imgPart) || imgPart.includes(part))
    ))) {
      return imgPath;
    }
  }
  
  // Return a generic image from the category if available
  if (searchImages.length > 0) {
    return searchImages[0]; // Return first image as generic fallback
  }
  
  return null;
}

const csvContent = fs.readFileSync(csvPath, 'utf8');
const { data } = Papa.parse(csvContent, { header: true });

const categoriesMap = {};

data.forEach(row => {
  if (!row.Category || !row.Model) return;
  
  const categorySlug = row.Category.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const productSlug = row.Model.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  
  if (!categoriesMap[categorySlug]) {
    categoriesMap[categorySlug] = {
      id: categorySlug,
      name: row.Category,
      slug: categorySlug,
      description: `${row.Brand || 'Western'} ${row.Category} - Premium quality equipment`,
      products: []
    };
  }
  
  // Use external URL as primary, with local fallback
  const externalImageUrl = row['Image URL'] || '';
  const altImageUrl = row['Image URL (Alt)'] || '';
  const localFallback = findLocalFallback(row.Model, row.Category);
  
  const product = {
    id: productSlug,
    model: row.Model,
    name: row.Description || `${row.Brand || 'Western'} ${row.Model}`,
    slug: productSlug,
    images: [externalImageUrl, altImageUrl, localFallback].filter(Boolean),
    imageUrl: externalImageUrl || localFallback || '/images/placeholder.jpg',
    imageAlt: altImageUrl || localFallback || '',
    capacity: row['Capacity (Liters)'] || '',
    rating: row.Rating || '',
    dimensions: {
      width: row['Width (inch)'] || row['Width (mm)'] || '',
      depth: row['Depth (inch)'] || row['Depth (mm)'] || '',
      height: row['Height (inch)'] || row['Height (mm)'] || ''
    },
    price: {
      mrp: parseFloat(row.MRP) || 0,
      selling: parseFloat(row['Billing Price']) || 0
    },
    features: [],
    specifications: {},
    brand: row.Brand || 'Western',
    manufacturer: row.Manufacturer || 'Western Refrigeration Pvt. Ltd.'
  };
  
  categoriesMap[categorySlug].products.push(product);
});

const categories = Object.values(categoriesMap);

const output = `export interface Product {
  id: string;
  model: string;
  name: string;
  slug: string;
  images: string[];
  imageUrl: string;
  imageAlt?: string;
  capacity?: string;
  rating?: string;
  dimensions?: {
    width: string;
    depth: string;
    height: string;
  };
  price?: {
    mrp: number;
    selling: number;
  };
  features?: string[];
  specifications?: Record<string, string>;
  brand?: string;
  manufacturer?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  products: Product[];
}

export const categories: Category[] = ${JSON.stringify(categories, null, 2)};

export const getAllProducts = (): Product[] => {
  return categories.flatMap(category => category.products);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

export const getProductBySlug = (categorySlug: string, productSlug: string): Product | undefined => {
  const category = getCategoryBySlug(categorySlug);
  return category?.products.find(product => product.slug === productSlug);
};
`;

fs.writeFileSync(outputPath, output);
console.log('Products data updated with external URLs and local fallbacks!');
console.log(`Total categories: ${categories.length}`);
console.log(`Total products: ${data.filter(row => row.Category && row.Model).length}`);

// Log some examples of mappings
console.log('\nImage mapping examples:');
categories.slice(0, 2).forEach(cat => {
  console.log(`\n${cat.name}:`);
  cat.products.slice(0, 3).forEach(prod => {
    console.log(`  ${prod.model}: ${prod.imageUrl} (fallback: ${prod.imageAlt})`);
  });
});