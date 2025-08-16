import { categories } from '../../../../data/products';
import ProductDetailsClient from './product-details-client';

export async function generateStaticParams() {
  const params: { id: string }[] = [];
  
  categories.forEach((category) => {
    category.models.forEach((product) => {
      params.push({
        id: product.id
      });
    });
  });
  
  return params;
}

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { id } = await params;
  
  // Find product and category on server side
  let product: (typeof categories[0]['models'][0]) | null = null;
  let category: (typeof categories[0]) | null = null;
  
  for (const cat of categories) {
    const foundProduct = cat.models.find(p => p.id === id);
    if (foundProduct) {
      product = foundProduct;
      category = cat;
      break;
    }
  }
  
  if (!product || !category) {
    return <div>Product not found</div>;
  }
  
  // Get related products
  const relatedProducts = category.models.filter(p => p.id !== product.id && p.type === product.type).slice(0, 4);
  
  return <ProductDetailsClient product={product} category={category} relatedProducts={relatedProducts} />;
}