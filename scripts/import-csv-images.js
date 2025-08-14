const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

const csvPath = path.join(__dirname, '..', 'public', 'all_brands_products_with_images.csv');
const outputPath = path.join(__dirname, '..', 'data', 'products-with-images.ts');

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
  
  const imageUrl = row['Image URL'] || row['Image URL (Alt)'] || '/images/placeholder.jpg';
  
  const product = {
    id: productSlug,
    model: row.Model,
    name: row.Description || `${row.Brand || 'Western'} ${row.Model}`,
    slug: productSlug,
    images: [imageUrl],
    imageUrl: imageUrl,
    imageAlt: row['Image URL (Alt)'] || '',
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
console.log('Products data with images has been generated successfully!');
console.log(`Total categories: ${categories.length}`);
console.log(`Total products: ${data.length}`);