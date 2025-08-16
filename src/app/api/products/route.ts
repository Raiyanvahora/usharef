import { NextResponse } from 'next/server';
import { productCategories } from '@/data/products';

// Export dynamic configuration for proper static generation
export const dynamic = 'force-static';

// Export revalidate configuration
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    // Transform categories data into product list
    const products = productCategories.flatMap(category => 
      category.models.map(model => ({
        id: model.id || model.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        title: model.name,
        price: model.price || 'Price on Request',
        image: model.image,
        gallery: model.images || [model.image],
        colors: [],
        whatsappLink: `https://wa.me/9898649362?text=${encodeURIComponent(`Hi, I'm interested in ${model.name}`)}`,
        badge: model.isNew ? 'New' : model.isBestseller ? 'Bestseller' : undefined,
        sizes: model.capacity || '',
        description: model.description || `${model.name} - Premium commercial refrigeration equipment`,
        currency: '₹',
        availability: 'In Stock',
        brand: model.brand || 'Western',
        category: category.name
      }))
    );

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}