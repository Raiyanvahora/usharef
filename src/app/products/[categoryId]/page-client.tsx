'use client';

import { productCategories } from '@/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ui/ProductCard';

interface CategoryPageClientProps {
  categoryId: string;
}

export default function CategoryPageClient({ categoryId }: CategoryPageClientProps) {
  const category = productCategories.find(cat => cat.id === categoryId);

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
                  src={category.image}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">All Models</h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1">Choose from our wide range of {category.name.toLowerCase()} models</p>
          </div>
          <div className="text-xs sm:text-sm text-gray-500">
            {category.models?.length || 0} products
          </div>
        </div>

        {category.models && category.models.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {category.models.map((product, index) => (
              <ProductCard
                key={index}
                id={product.name.toLowerCase().replace(/\s+/g, '-')}
                title={product.name}
                description={`${category.name} - Premium quality cooling solution`}
                imageUrl={product.image}
                price={product.price || '₹25,999'}
                originalPrice={product.originalPrice}
                href={`/products/${category.id}/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v1m6 0h-2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Products Available</h3>
            <p className="text-gray-600 mb-6">We&apos;re working on adding products to this category. Check back soon!</p>
            <Link
              href="/products"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Other Categories
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}