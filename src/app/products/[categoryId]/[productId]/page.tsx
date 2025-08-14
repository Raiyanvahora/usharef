import { categories } from '../../../../../data/products';
import ProductPageClient from './page-client';

export async function generateStaticParams() {
  const params: { categoryId: string; productId: string }[] = [];
  
  // Helper function to generate slug from product name
  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  };
  
  categories.forEach((category) => {
    category.models.forEach((product) => {
      params.push({
        categoryId: category.id,
        productId: generateSlug(product.name),
      });
    });
  });
  
  return params;
}

interface ProductPageProps {
  params: Promise<{ categoryId: string; productId: string }>;
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { categoryId, productId } = await params;
  
  return <ProductPageClient categoryId={categoryId} productId={productId} />;
}