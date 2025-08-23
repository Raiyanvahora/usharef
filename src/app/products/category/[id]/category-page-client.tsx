'use client';

import { useState, useMemo } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, ChevronRight, Search } from 'lucide-react';

interface CategoryPageClientProps {
  category: {
    id: string;
    name: string;
    description: string;
    warranty?: string;
    deliveryInfo?: string;
    models: Array<{
      id: string;
      name: string;
      image: string;
      mrp?: string;
      price?: string;
      originalPrice?: string;
      capacity?: string;
      type?: string;
      brand?: string;
      description?: string;
      isNew?: boolean;
      isBestseller?: boolean;
    }>;
  };
}

export default function CategoryPageClient({ category }: CategoryPageClientProps) {
  // State for filtering and load more
  const [searchTerm, setSearchTerm] = useState('');
  const [capacityFilter, setCapacityFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [displayedCount, setDisplayedCount] = useState(12);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || '919898649362';
  
  // Capacity range helper function
  const getCapacityRange = (capacity?: string): string => {
    if (!capacity) return 'unknown';
    const capacityNum = parseFloat(capacity);
    if (capacityNum <= 100) return '0-100L';
    if (capacityNum <= 300) return '100-300L';
    if (capacityNum <= 500) return '300-500L';
    if (capacityNum <= 800) return '500-800L';
    if (capacityNum <= 1200) return '800-1200L';
    return '1200L+';
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    if (!category || !category.models) return [];
    let filtered = [...category.models];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.brand?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (product.type?.toLowerCase() || '').includes(searchTerm.toLowerCase())
      );
    }

    // Filter by capacity range
    if (capacityFilter !== 'all') {
      filtered = filtered.filter(product => {
        const productCapacityRange = getCapacityRange(product.capacity);
        return productCapacityRange === capacityFilter;
      });
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'capacity':
          const capacityA = parseFloat(a.capacity || '0') || 0;
          const capacityB = parseFloat(b.capacity || '0') || 0;
          return capacityA - capacityB;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [category, searchTerm, capacityFilter, sortBy]);

  // Displayed products with load more functionality
  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, displayedCount);
  }, [filteredProducts, displayedCount]);

  // Load more handler
  const handleLoadMore = () => {
    setDisplayedCount(prev => Math.min(prev + 12, filteredProducts.length));
  };

  // Reset displayed count when filters change
  const resetDisplayedCount = () => {
    setDisplayedCount(12);
  };

  if (!category) {
    return notFound();
  }

  const getWhatsAppLink = (product: typeof category.models[0], forOffer: boolean = false) => {
    const message = forOffer 
      ? `Hi, I'm interested in ${product.name} (${product.id}); please share your best offer.`
      : `Hi, I'm interested in the ${product.name} from ${category.name}. Please provide more details.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };


  return (
    <div className="min-h-[70svh] md:min-h-[85vh] bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* Category Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {category.name}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            {category.description}
          </p>
          
          {/* Category Info */}
          <div className="mt-6 flex flex-wrap gap-4">
            {category.warranty && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {category.warranty}
              </span>
            )}
            {category.deliveryInfo && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {category.deliveryInfo}
              </span>
            )}
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              {category.models.length} Products Available
            </span>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  resetDisplayedCount();
                }}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Capacity Range Filter */}
              <select
                value={capacityFilter}
                onChange={(e) => {
                  setCapacityFilter(e.target.value);
                  resetDisplayedCount();
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Capacities</option>
                <option value="0-100L">0-100L</option>
                <option value="100-300L">100-300L</option>
                <option value="300-500L">300-500L</option>
                <option value="500-800L">500-800L</option>
                <option value="800-1200L">800-1200L</option>
                <option value="1200L+">1200L+</option>
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="capacity">Sort by Capacity (Liters)</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm text-gray-600">
                Showing {displayedProducts.length} of {filteredProducts.length} products
                {filteredProducts.length !== category.models.length && (
                  <span className="text-gray-400"> (filtered from {category.models.length} total)</span>
                )}
              </p>
              {capacityFilter !== 'all' && (
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                  {capacityFilter}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedProducts.map((product) => {
            
            return (
              <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                {/* Product Image */}
                <Link href={`/products/${product.id}`} className="block">
                  <div className="product-image-container">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="no-crop group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    {product.isNew && (
                      <span className="absolute top-3 left-3 px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded">
                        NEW
                      </span>
                    )}
                    {product.isBestseller && (
                      <span className="absolute top-3 left-3 px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded">
                        BESTSELLER
                      </span>
                    )}
                    {/* Removed discount badge as we only show MRP */}
                  </div>
                </Link>

                <div className="p-4">
                  {/* Product Name */}
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  
                  {/* Product Info */}
                  {(product.capacity || product.type) && (
                    <p className="text-sm text-gray-600 mb-2">
                      {product.type && <span>{product.type}</span>}
                      {product.type && product.capacity && <span> • </span>}
                      {product.capacity && <span>{product.capacity}</span>}
                    </p>
                  )}

                  {/* Price Display */}
                  <div className="mb-3">
                    <div className="mb-3">
                      <span className="text-lg font-semibold text-gray-800">Contact for MRP</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full">
                        Offer Available
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">T & C Apply</p>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Link
                      href={`/products/${product.id}`}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium flex items-center justify-center gap-2"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={getWhatsAppLink(product, true)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp for Offer</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {displayedProducts.length < filteredProducts.length && filteredProducts.length > 0 && (
          <div className="text-center mt-12 mb-8">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
            >
              Load More Products ({filteredProducts.length - displayedProducts.length} remaining)
            </button>
          </div>
        )}

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
                setCapacityFilter('all');
                resetDisplayedCount();
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}