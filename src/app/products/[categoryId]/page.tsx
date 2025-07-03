import { productCategories } from '../../../../data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function CategoryPage({ params }) {
  const { categoryId } = params;
  const category = productCategories.find(cat => cat.id === categoryId);

  if (!category) return notFound();

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">{category.name} Models</h1>
      <p className="text-center text-gray-600 mb-10">{category.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {category.models.map(model => (
          <div key={model.name} className="rounded-xl shadow-md p-4 bg-white flex flex-col items-center">
            <div className="w-full h-40 relative mb-3">
              <Image
                src={model.image}
                alt={model.name}
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="text-lg font-semibold text-primary-700">{model.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 