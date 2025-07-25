
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MessageCircle, Star, Heart, ShoppingCart, Filter, Grid, List } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  gallery?: string[];
  colors?: string[];
  whatsappLink: string;
  badge?: string;
  sizes?: string;
  description?: string;
  currency?: string;
  availability?: string;
  brand?: string;
  category?: string;
}

const ProductListing: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const [searchTerm, setSearchTerm] = useState('');
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Price filter
    filtered = filtered.filter(product => {
      const price = parseFloat(product.price);
      return price >= priceRange.min && price <= priceRange.max;
    });

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'price-high':
        filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case 'name':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // Keep original order for featured
        break;
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, priceRange, sortBy]);

  const formatPrice = (price: string, currency = 'USD') => {
    const currencySymbols: Record<string, string> = {
      USD: '$',
      EUR: '€',
      GBP: '£',
      INR: '₹'
    };
    return `${currencySymbols[currency] || currency}${price}`;
  };

  const toggleWishlist = (productId: string) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(productId)) {
      newWishlist.delete(productId);
    } else {
      newWishlist.add(productId);
    }
    setWishlist(newWishlist);
  };

  const getBadgeColor = (badge: string) => {
    switch (badge.toUpperCase()) {
      case 'NEW':
        return 'bg-emerald-500 text-white';
      case 'FEATURED':
        return 'bg-purple-500 text-white';
      case 'BESTSELLER':
        return 'bg-orange-500 text-white';
      case 'POPULAR':
        return 'bg-blue-500 text-white';
      case 'SALE':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-6">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-blue-600 rounded-full animate-ping"></div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Loading Products</h3>
              <p className="text-gray-600">Please wait while we fetch the latest products...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Premium VISI Coolers</h1>
              <p className="text-sm sm:text-base text-gray-600">Discover our collection of {filteredProducts.length} commercial display coolers</p>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Filters and Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl shadow-sm border">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-gray-600">Price:</span>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({...priceRange, max: parseInt(e.target.value)})}
                  className="w-16 sm:w-20"
                />
                <span className="text-xs sm:text-sm text-gray-600">${priceRange.max}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" 
          : "space-y-3 sm:space-y-4"
        }>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 ${
                viewMode === 'list' ? 'flex flex-col sm:flex-row items-start sm:items-center p-3 sm:p-4' : 'flex flex-col'
              }`}
            >
              {/* Product Image */}
              <div className={`relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 ${
                viewMode === 'list' ? 'w-full sm:w-32 h-32 rounded-xl sm:mr-4 mb-3 sm:mb-0 flex-shrink-0' : 'aspect-square'
              }`}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes={viewMode === 'list' ? "(max-width: 640px) 100vw, 128px" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"}
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                  priority={false}
                />
                
                {/* Badges */}
                {product.badge && (
                  <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded-full ${getBadgeColor(product.badge)}`}>
                    {product.badge}
                  </span>
                )}
                
                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-all duration-200"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      wishlist.has(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'
                    }`}
                  />
                </button>

                {/* Quick Actions */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-2">
                    <button className="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
                      <ShoppingCart className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className={`${viewMode === 'list' ? 'flex-1' : 'p-4 sm:p-6'}`}>
                <div className="mb-3">
                  {product.brand && (
                    <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full mb-2">
                      {product.brand}
                    </span>
                  )}
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">(4.8) • 127 reviews</span>
                  </div>
                  
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-lg sm:text-2xl font-bold text-gray-900">
                      {formatPrice(product.price, product.currency)}
                    </span>
                    <span className="text-xs sm:text-sm text-green-600 font-medium">Free shipping</span>
                  </div>
                </div>

                {product.description && viewMode === 'grid' && (
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {product.description}
                  </p>
                )}

                {/* Color Options */}
                {product.colors && Array.isArray(product.colors) && product.colors.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Available Colors:</p>
                    <div className="flex gap-2">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          className="w-6 h-6 rounded-full border-2 border-gray-300 hover:border-gray-400 focus:border-blue-500 transition-colors"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={`${product.whatsappLink}?text=${encodeURIComponent(`I'm interested in ${product.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">Order via WhatsApp</span>
                    <span className="sm:hidden">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <ShoppingCart className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setPriceRange({ min: 0, max: 2000 });
                setSortBy('featured');
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;