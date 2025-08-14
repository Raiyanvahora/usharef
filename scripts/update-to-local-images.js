const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

const csvPath = path.join(__dirname, '..', 'public', 'all_brands_products_with_images.csv');
const outputPath = path.join(__dirname, '..', 'data', 'products.ts');

// Read existing local images
const deepFreezerImages = fs.readdirSync(path.join(__dirname, '..', 'public', 'PRD', 'DEEP FREEZER', 'main images'));
const visiCoolerImages = fs.readdirSync(path.join(__dirname, '..', 'public', 'PRD', 'VISI COOLER', 'mainimagesvisi'));
const waterCoolerImages = fs.readdirSync(path.join(__dirname, '..', 'public', 'PRD', 'WATER COOLER', 'mainimageswater'));

// Create mapping function
function findLocalImage(model, category) {
  // Clean model name for matching
  const cleanModel = model.replace(/[^A-Z0-9]/gi, '').toUpperCase();
  
  // Try to find matching image
  let imagePath = null;
  
  if (category.toLowerCase().includes('freezer') || category.toLowerCase().includes('eutectic') || category.toLowerCase().includes('scooping')) {
    // Check deep freezer images
    const match = deepFreezerImages.find(img => {
      const imgName = img.toUpperCase().replace(/[^A-Z0-9]/gi, '');
      return imgName.includes(cleanModel.substring(0, 4)) || 
             cleanModel.includes(imgName.substring(0, 4));
    });
    if (match) {
      imagePath = `/PRD/DEEP FREEZER/main images/${match}`;
    }
  } else if (category.toLowerCase().includes('cooler') || category.toLowerCase().includes('visi')) {
    // Check visi cooler images
    const match = visiCoolerImages.find(img => {
      const imgName = img.toUpperCase().replace(/[^A-Z0-9]/gi, '');
      return imgName.includes(cleanModel.substring(0, 6)) || 
             cleanModel.includes(imgName.substring(0, 6));
    });
    if (match) {
      imagePath = `/PRD/VISI COOLER/mainimagesvisi/${match}`;
    }
  } else if (category.toLowerCase().includes('water')) {
    // Check water cooler images
    const match = waterCoolerImages.find(img => {
      const imgName = img.toUpperCase().replace(/[^A-Z0-9]/gi, '');
      return imgName.includes(cleanModel.substring(0, 6)) || 
             cleanModel.includes(imgName.substring(0, 6));
    });
    if (match) {
      imagePath = `/PRD/WATER COOLER/mainimageswater/${match}`;
    }
  }
  
  return imagePath || '/images/placeholder.jpg';
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
  
  // Use local image instead of external URL
  const localImage = findLocalImage(row.Model, row.Category);
  
  const product = {
    id: productSlug,
    model: row.Model,
    name: row.Description || `${row.Brand || 'Western'} ${row.Model}`,
    slug: productSlug,
    images: [localImage],
    imageUrl: localImage,
    imageAlt: '',
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
console.log('Products data updated with local images!');
console.log(`Total categories: ${categories.length}`);
console.log(`Total products: ${data.filter(row => row.Category && row.Model).length}`);