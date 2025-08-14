'use client';

import { getCategoryBySlug } from '@/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ProductGrid from '@/components/ProductGrid';

interface CategoryPageClientProps {
  categoryId: string;
}

export default function CategoryPageClient({ categoryId }: CategoryPageClientProps) {
  const category = getCategoryBySlug(categoryId);

  if (!category) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 pt-12">
      {/* Modern Header Section */}
      <div className="bg-gradient-to-br from-white via-blue-50/30 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate">{category.name}</span>
          </nav>
          
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 mb-3 sm:mb-4">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Premium Collection
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                {category.name}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed max-w-2xl">
                {category.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  </div>
                  <span>{category.models?.length || 0} Models Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  </div>
                  <span>Energy Efficient</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  </div>
                  <span>2 Year Warranty</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="lg:flex-shrink-0">
              <div className="relative w-full lg:w-80 xl:w-96 h-64 lg:h-80 xl:h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={category.image || '/images/placeholder.jpg'}
                  alt={category.name}
                  fill
                  className="object-contain p-4 transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <ProductGrid 
        categories={[{
          id: category.id,
          name: category.name,
          slug: category.id,
          description: category.description,
          products: category.models.map(model => ({
            id: model.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            model: model.name,
            name: model.name,
            slug: model.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            images: [model.image],
            imageUrl: model.image,
            imageAlt: model.image,
            capacity: model.capacity,
            price: model.price && model.originalPrice ? {
              selling: parseFloat(model.price.replace(/[₹,]/g, '')),
              mrp: parseFloat(model.originalPrice.replace(/[₹,]/g, ''))
            } : undefined,
            features: model.features,
            specifications: model.specifications,
            brand: 'Western'
          }))
        }]} 
        selectedCategory={categoryId} 
      />
    </div>
  );
}