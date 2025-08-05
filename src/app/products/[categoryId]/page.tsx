import { productCategories } from '@/data/products';
import CategoryPageClient from './page-client';

export async function generateStaticParams() {
  return productCategories.map((category) => ({
    categoryId: category.id,
  }));
}

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = await params;
  
  return <CategoryPageClient categoryId={categoryId} />;
}