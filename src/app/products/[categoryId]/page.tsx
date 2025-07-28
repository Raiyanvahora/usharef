'use client';

import { productCategories } from '@/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';
import ProductCard from '@/components/ui/ProductCard';

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = use(params);
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
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>In Stock</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span>Warranty Included</span>
                </div>
              </div>
            </div>
            
            {/* Category Image */}
            <div className="lg:flex-shrink-0">
              <div className="relative w-full sm:w-80 lg:w-80 h-48 sm:h-64 lg:h-80 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-contain p-4 sm:p-6"
                  sizes="(max-width: 640px) 100vw, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {category.models.map((model) => (
            <ProductCard
              key={model.name}
              id={model.name.toLowerCase().replace(/\s+/g, '-')}
              title={model.name}
              subtitle={`${category.name} Series`}
              description="High-performance refrigeration designed for freshness and efficiency."
              imageUrl={model.image}
              price={model.price}
              originalPrice={model.originalPrice}
              rating={4.5}
              reviewCount={24}
              isNew={model.isNew}
              href={`/products/${categoryId}/${model.name.toLowerCase().replace(/\s+/g, '-')}`}
            />
          ))}
        </div>

        {/* Empty State */}
        {category.models.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-gray-400"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0-3 3V6a3 3 0 1 0 3-3 3 3 0 0 1 3 3 3 3 0 0 1-3 3"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Models Available</h3>
              <p className="text-gray-600 mb-6">
                We&apos;re currently updating our {category.name.toLowerCase()} collection. 
                Please check back soon for new models.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <div className="bg-white border-t border-gray-200 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="text-center">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Need Help Choosing?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 max-w-2xl mx-auto">
              Our experts are here to help you find the perfect {category.name.toLowerCase()} for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-sm sm:text-base"
              >
                Get Expert Advice
              </Link>
              <Link 
                href="/products"
                className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-sm sm:text-base"
              >
                View All Categories
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}