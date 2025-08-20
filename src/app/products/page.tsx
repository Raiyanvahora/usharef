'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { categories } from '../../../data/products';
import ProductGrid from '../../components/ProductGrid';
import { Grid, List, X } from 'lucide-react';

// Utility function to slugify brand names
function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

// Utility function to capitalize brand names
function capitalizeBrand(slug: string): string {
  const brandMap: { [key: string]: string } = {
    'western': 'Western',
    'icemake': 'Icemake', 
    'frigoglass': 'Frigoglass'
  };
  return brandMap[slug] || slug;
}

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const brandFilter = searchParams.get('brand');
  // When brand filter is active, always show 'all' products view, otherwise default to 'categories'
  const [viewMode, setViewMode] = useState<'categories' | 'all'>(brandFilter ? 'all' : 'categories');

  // Update view mode when brand filter changes
  React.useEffect(() => {
    if (brandFilter) {
      setViewMode('all');
    } else {
      setViewMode('categories');
    }
  }, [brandFilter]);

  // Filter categories based on brand
  const filteredCategories = useMemo(() => {
    if (!brandFilter) return categories;
    
    return categories.map(category => ({
      ...category,
      models: category.models.filter(model => {
        // Default to 'Western' if brand is not specified (for legacy products)
        const productBrand = model.brand || 'Western';
        return slugify(productBrand) === brandFilter;
      })
    })).filter(category => category.models.length > 0);
  }, [brandFilter]);

  return (
    <div className="min-h-[70svh] md:min-h-[85vh] bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {brandFilter ? `${capitalizeBrand(brandFilter)} Products` : 'Our Products'}
            </h1>
            {brandFilter && (
              <div className="mb-4">
                <Link 
                  href="/products" 
                  className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear filter
                </Link>
              </div>
            )}
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              {brandFilter 
                ? `Browse our complete range of ${capitalizeBrand(brandFilter)} commercial refrigeration equipment.`
                : 'Browse our complete range of commercial refrigeration equipment. From freezers to coolers, find the perfect solution for your business needs.'
              }
            </p>
            
            {/* View Mode Toggle - only show when no brand filter is active */}
            {!brandFilter && (
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
            )}
          </div>
        </div>
      </div>

      {viewMode === 'categories' ? (
        /* Category View */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => {
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
        <ProductGrid categories={filteredCategories.map(category => ({
          id: category.id,
          name: category.name,
          slug: category.id,
          description: category.description,
          products: category.models.map(model => ({
            id: model.id || model.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            model: model.name,
            name: model.name,
            slug: model.id || model.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            images: model.images || [model.image],
            imageUrl: model.image,
            imageAlt: model.name,
            capacity: model.capacity,
            price: model.mrp && model.mrp.includes('₹') ? {
              selling: parseFloat(model.mrp.replace(/[₹,]/g, '')),
              mrp: parseFloat(model.mrp.replace(/[₹,]/g, ''))
            } : model.price && model.originalPrice ? {
              selling: parseFloat(model.price.replace(/[₹,]/g, '')),
              mrp: parseFloat(model.originalPrice.replace(/[₹,]/g, ''))
            } : undefined,
            features: model.features,
            specifications: model.specifications,
            brand: model.brand || 'Western'
          }))
        }))} />
      )}
    </div>
  );
}