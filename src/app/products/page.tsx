'use client';

import React from 'react';
import Link from 'next/link';
import { productCategories } from '../../../data/products';
import Image from 'next/image';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-16">
        <h1 className="text-xl sm:text-3xl font-bold text-center text-gray-900 mb-4 sm:mb-12">
          Our Products
        </h1>

        {/* Simple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {productCategories.map((category) => (
            <Link 
              key={category.id} 
              href={`/products/${category.id}`}
              className="block"
            >
              <div className="text-center p-3 sm:p-8 border rounded hover:shadow-md transition-shadow">
                {/* Product Image */}
                <div className="h-32 sm:h-64 flex items-center justify-center mb-2 sm:mb-6">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={120}
                    height={100}
                    className="object-contain max-w-full max-h-full sm:w-[250px] sm:h-[200px]"
                  />
                </div>

                {/* Product Name */}
                <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">
                  {category.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-6">
                  {category.description}
                </p>

                {/* CTA Button */}
                <button className="bg-blue-600 text-white px-4 py-1.5 sm:px-8 sm:py-3 rounded text-xs sm:text-base font-medium hover:bg-blue-700 transition-colors">
                  View Models
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}