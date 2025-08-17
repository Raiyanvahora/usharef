'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '../../../data/products';
import ProductGrid from '../../components/ProductGrid';
import { Grid, List } from 'lucide-react';

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'categories' | 'all'>('categories');

  return (
    <div className="min-h-[70svh] md:min-h-[85vh] bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Browse our complete range of commercial refrigeration equipment. 
              From freezers to coolers, find the perfect solution for your business needs.
            </p>
            
            {/* View Mode Toggle */}
            <div className="flex justify-center">
              <div className="bg-gray-100 rounded-lg p-1 flex">
                <button
                  onClick={() => setViewMode('categories')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'categories' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                  Categories
                </button>
                <button
                  onClick={() => setViewMode('all')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'all' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <List className="w-4 h-4" />
                  All Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {viewMode === 'categories' ? (
        /* Category View */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const categoryImage = category.image || '/images/placeholder.jpg';
              
              return (
                <Link 
                  key={category.id} 
                  href={`/products/category/${category.id}`}
                  className="block group"
                >
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    {/* Category Image */}
                    <div className="product-image-container">
                      <Image
                        src={categoryImage}
                        alt={category.name}
                        fill
                        className="no-crop group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <div className="p-6">
                      {/* Category Name */}
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {category.description}
                      </p>

                      {/* Product Count */}
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {category.models.length} products
                        </span>
                        <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                          View Models →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        /* All Products View */
        <ProductGrid categories={categories.map(category => ({
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
            imageAlt: model.name,
            capacity: model.capacity,
            price: model.price && model.originalPrice ? {
              selling: parseFloat(model.price.replace(/[₹,]/g, '')),
              mrp: parseFloat(model.originalPrice.replace(/[₹,]/g, ''))
            } : undefined,
            features: model.features,
            specifications: model.specifications,
            brand: 'Western'
          }))
        }))} />
      )}
    </div>
  );
}