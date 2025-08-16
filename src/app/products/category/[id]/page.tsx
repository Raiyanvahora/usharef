import { categories } from '../../../../../data/products';
import CategoryPageClient from './category-page-client';

export async function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id
  }));
}

interface CategoryPageProps {
  params: Promise<{ id: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = await params;
  
  const category = categories.find(cat => cat.id === id);
  
  if (!category) {
    return <div>Category not found</div>;
  }
  
  return <CategoryPageClient category={category} />;
}