'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  image: string;
  backgroundImage?: string;
}

interface ProductCategorySectionProps {
  categories: Category[];
  title?: string;
}

export default function ProductCategorySection({ categories, title = "Shop by Category" }: ProductCategorySectionProps) {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with title and View All link */}
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
          <Link 
            href="/products" 
            className="flex items-center gap-1 text-green-600 hover:text-green-700 font-semibold text-lg transition-all duration-300 hover:gap-3"
          >
            View All
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/products/${category.id}`}
              className="group animate-float"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="relative overflow-hidden rounded-xl bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 transform border border-gray-100">
                {/* Faded background image */}
                <div 
                  className="absolute inset-0 opacity-20 bg-cover bg-center transition-all duration-700 group-hover:scale-125 group-hover:opacity-30"
                  style={{
                    backgroundImage: `url(${category.backgroundImage || category.image})`,
                    filter: 'blur(2px)'
                  }}
                />
                
                {/* Card content */}
                <div className="relative p-8 lg:p-10">
                  {/* Product image with shadow */}
                  <div className="mb-8 h-64 lg:h-72 flex items-center justify-center">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="max-w-full max-h-full object-contain drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    />
                  </div>
                  
                  {/* Category name */}
                  <h3 className="text-center font-bold text-green-600 text-xl lg:text-2xl border-b-2 border-green-600 pb-3 inline-block w-full transition-all duration-300 group-hover:text-green-700">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x snap-mandatory">
            {/* Duplicate categories for infinite scroll effect */}
            {[...categories, ...categories].map((category, index) => (
              <Link
                key={`${category.id}-${index}`}
                href={`/products/${category.id}`}
                className="flex-shrink-0 w-80 snap-center group"
              >
                <div className="relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 active:scale-95 border border-gray-100">
                  {/* Faded background image */}
                  <div 
                    className="absolute inset-0 opacity-20 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${category.backgroundImage || category.image})`,
                      filter: 'blur(2px)'
                    }}
                  />
                  
                  {/* Card content */}
                  <div className="relative p-10">
                    {/* Product image with shadow */}
                    <div className="mb-8 h-64 flex items-center justify-center">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="max-w-full max-h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                    
                    {/* Category name */}
                    <h3 className="text-center font-bold text-green-600 text-2xl border-b-2 border-green-600 pb-3 inline-block w-full">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            filter: brightness(1);
          }
          50% {
            transform: translateY(-15px) scale(1.02);
            filter: brightness(1.05);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                        0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          50% {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
                        0 10px 10px -5px rgba(0, 0, 0, 0.04),
                        0 0 30px rgba(34, 197, 94, 0.15);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite, pulse 4s ease-in-out infinite;
        }
        
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        
        .snap-center {
          scroll-snap-align: center;
        }
      `}</style>
    </section>
  );
}