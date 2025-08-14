'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Grid, List, Heart, MessageCircle } from 'lucide-react';
import ProductImage from './ui/ProductImage';

interface Product {
  id: string;
  model: string;
  name: string;
  slug: string;
  images: string[];
  imageUrl: string;
  imageAlt?: string;
  capacity?: string;
  rating?: string;
  dimensions?: {
    width: string;
    depth: string;
    height: string;
  };
  price?: {
    mrp: number;
    selling: number;
  };
  features?: string[];
  specifications?: Record<string, string>;
  brand?: string;
  manufacturer?: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  products: Product[];
}

interface ProductGridProps {
  categories: Category[];
  selectedCategory?: string;
}

export default function ProductGrid({ categories, selectedCategory }: ProductGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState(selectedCategory || 'all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');

  // Get all products from all categories
  const allProducts = useMemo(() => {
    const products: (Product & { categoryId: string; categoryName: string })[] = [];
    categories.forEach(category => {
      category.products.forEach(product => {
        products.push({
          ...product,
          categoryId: category.id,
          categoryName: category.name
        });
      });
    });
    return products;
  }, [categories]);

  // Filter and search products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Filter by category
    if (filterCategory !== 'all') {
      filtered = filtered.filter(product => product.categoryId === filterCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.brand?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          const priceA = a.price?.selling || 0;
          const priceB = b.price?.selling || 0;
          return priceA - priceB;
        case 'capacity':
          const capacityA = parseFloat(a.capacity || '0') || 0;
          const capacityB = parseFloat(b.capacity || '0') || 0;
          return capacityA - capacityB;
        case 'brand':
          return (a.brand || '').localeCompare(b.brand || '');
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [allProducts, filterCategory, searchTerm, sortBy]);

  // Get unique categories for filter dropdown
  const uniqueCategories = useMemo(() => {
    const cats = new Set(categories.map(cat => ({ id: cat.id, name: cat.name })));
    return Array.from(cats);
  }, [categories]);

  const calculateDiscount = (mrp: number, selling: number) => {
    if (mrp && selling && mrp > selling) {
      return Math.round(((mrp - selling) / mrp) * 100);
    }
    return 0;
  };


  const whatsappNumber = '9898649362';
  const getWhatsAppLink = (product: Product & { categoryId: string; categoryName: string }) => {
    const message = encodeURIComponent(`Hi, I'm interested in the ${product.brand || 'Western'} ${product.model} - ${product.name} (${product.categoryName}). Please provide more details.`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products, brands, or models..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            {/* Category Filter */}
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {uniqueCategories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="capacity">Sort by Capacity</option>
              <option value="brand">Sort by Brand</option>
            </select>

            {/* View Mode */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Showing {filteredProducts.length} of {allProducts.length} products
            {filterCategory !== 'all' && (
              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                {uniqueCategories.find(cat => cat.id === filterCategory)?.name}
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Products Grid/List */}
      <div className={viewMode === 'grid' 
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
        : "space-y-4"
      }>
        {filteredProducts.map((product, index) => {
          const discount = product.price ? calculateDiscount(product.price.mrp, product.price.selling) : 0;
          const productUrl = `/products/${product.categoryId}/${product.slug}`;

          if (viewMode === 'list') {
            return (
              <div key={`${product.categoryId}-${product.name}`} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Product Image */}
                  <div className="md:w-48 h-48 flex-shrink-0">
                    <ProductImage
                      src={product.imageUrl}
                      alt={product.name}
                      fallbackSrc={product.imageAlt}
                      width={192}
                      height={192}
                      className="w-full h-full object-contain rounded-lg bg-gray-50"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          <Link href={productUrl} className="hover:text-blue-600 transition-colors">
                            {product.brand || 'Western'} {product.model}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{product.name}</p>
                        <p className="text-sm text-gray-500">Capacity: {product.capacity || 'N/A'} Liters</p>
                      </div>
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3 mb-4">
                      {product.price && (
                        <>
                          <span className="text-2xl font-bold text-gray-900">₹{product.price.selling.toLocaleString()}</span>
                          {product.price.mrp > product.price.selling && (
                            <>
                              <span className="text-lg text-gray-500 line-through">₹{product.price.mrp.toLocaleString()}</span>
                              {discount > 0 && (
                                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                                  {discount}% OFF
                                </span>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={productUrl}
                        className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                      >
                        View Details
                      </Link>
                      <a
                        href={getWhatsAppLink(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={`${product.categoryId}-${product.name}`} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Product Image */}
              <div className="aspect-square bg-gray-50 relative group">
                <ProductImage
                  src={product.imageUrl}
                  alt={product.name}
                  fallbackSrc={product.imageAlt}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading={index < 12 ? "eager" : "lazy"}
                  priority={index < 12}
                />
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                {product.rating && product.rating.includes('5') && (
                  <span className="absolute top-3 left-3 px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                    ⭐ Top Rated
                  </span>
                )}
              </div>

              <div className="p-4">
                {/* Product Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-blue-600 transition-colors">
                  <Link href={productUrl}>
                    {product.brand || 'Western'} {product.model}
                  </Link>
                </h3>
                
                <p className="text-sm text-gray-600 mb-2">{product.name}</p>
                <p className="text-sm text-gray-500 mb-3">Capacity: {product.capacity || 'N/A'} Liters</p>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  {product.price ? (
                    <>
                      <span className="text-xl font-bold text-gray-900">₹{product.price.selling.toLocaleString()}</span>
                      {product.price.mrp > product.price.selling && (
                        <>
                          <span className="text-sm text-gray-500 line-through">₹{product.price.mrp.toLocaleString()}</span>
                          {discount > 0 && (
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                              {discount}% OFF
                            </span>
                          )}
                        </>
                      )}
                    </>
                  ) : (
                    <span className="text-lg text-gray-600">Price on request</span>
                  )}
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Link
                    href={productUrl}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium block"
                  >
                    View Details
                  </Link>
                  <a
                    href={getWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search terms or filters to find what you&apos;re looking for.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setFilterCategory('all');
            }}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}