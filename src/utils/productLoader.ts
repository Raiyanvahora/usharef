interface ProductModel {
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  description?: string;
  features?: string[];
  specifications?: { [key: string]: string };
  isNew?: boolean;
  isBestseller?: boolean;
  type?: string;
  doorType?: string;
}

interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  backgroundImage?: string;
  models: ProductModel[];
}

// We'll get category metadata from the main products.ts file instead of hardcoding it here
// This ensures consistency with the actual product data
const getCategoryMetadata = async (): Promise<Omit<ProductCategory, 'models'>[]> => {
  try {
    const { categories } = await import('../../data/products');
    return categories.map(cat => ({
      id: cat.id,
      name: cat.name,
      description: cat.description,
      image: cat.image,
      backgroundImage: cat.backgroundImage
    }));
  } catch {
    // Fallback in case import fails
    return [];
  }
};

export async function loadProductCategory(categoryId: string): Promise<ProductCategory | null> {
  try {
    const { getCategoryBySlug } = await import('../../data/products');
    const fullCategory = getCategoryBySlug(categoryId);
    
    if (fullCategory) {
      return {
        id: fullCategory.id,
        name: fullCategory.name,
        description: fullCategory.description,
        image: fullCategory.image || '/images/placeholder.jpg',
        backgroundImage: fullCategory.backgroundImage,
        models: fullCategory.models?.map(p => ({
          name: p.name,
          brand: 'Western',
          image: p.image,
          altText: p.name,
          price: p.price || 'Price on Request',
          originalPrice: p.originalPrice,
          capacity: p.capacity
        })) || []
      };
    }
    
    return null;
  } catch {
    return null;
  }
}

export async function loadAllCategories(): Promise<ProductCategory[]> {
  try {
    const { categories } = await import('../../data/products');
    return categories.map(cat => ({
      id: cat.id,
      name: cat.name,
      description: cat.description,
      image: cat.image || '/images/placeholder.jpg',
      backgroundImage: cat.backgroundImage,
      models: cat.models?.map(p => ({
        name: p.name,
        brand: 'Western',
        image: p.image,
        altText: p.name,
        price: p.price || 'Price on Request',
        originalPrice: p.originalPrice,
        capacity: p.capacity
      })) || []
    }));
  } catch {
    return [];
  }
}

export async function getCategoryMetadataAsync(): Promise<Omit<ProductCategory, 'models'>[]> {
  return await getCategoryMetadata();
}

export async function getCategoryById(categoryId: string): Promise<Omit<ProductCategory, 'models'> | undefined> {
  const metadata = await getCategoryMetadata();
  return metadata.find(cat => cat.id === categoryId);
}