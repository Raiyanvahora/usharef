'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MessageCircle, ChevronRight } from 'lucide-react';
import ProductImage from '../../../../components/ui/ProductImage';

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
      price: string;
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
  if (!category) {
    return notFound();
  }

  const whatsappNumber = '9898649362';
  
  const getWhatsAppLink = (product: typeof category.models[0]) => {
    const message = encodeURIComponent(`Hi, I'm interested in the ${product.name} from ${category.name}. Please provide more details.`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  const calculateDiscount = (price: string, originalPrice?: string) => {
    if (price && originalPrice) {
      const currentPrice = parseFloat(price.replace(/[₹,]/g, ''));
      const origPrice = parseFloat(originalPrice.replace(/[₹,]/g, ''));
      if (origPrice > currentPrice) {
        return Math.round(((origPrice - currentPrice) / origPrice) * 100);
      }
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
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

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {category.models.map((product) => {
            const discount = calculateDiscount(product.price, product.originalPrice);
            
            return (
              <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                {/* Product Image */}
                <Link href={`/products/${product.id}`} className="block">
                  <div className="aspect-square bg-gray-50 relative overflow-hidden">
                    <ProductImage
                      src={product.image}
                      alt={product.name}
                      fallbackSrc="/images/placeholder.jpg"
                      className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
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
                    {discount > 0 && (
                      <span className="absolute top-3 right-3 px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded">
                        {discount}% OFF
                      </span>
                    )}
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
                  
                  {product.description && (
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                      {product.description}
                    </p>
                  )}

                  {/* Price */}
                  <div className="mb-4">
                    {product.price ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-gray-900">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                    ) : (
                      <span className="text-lg text-gray-600">Price on request</span>
                    )}
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
                      href={getWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}