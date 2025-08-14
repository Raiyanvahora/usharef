'use client';

import { getCategoryBySlug, getProductBySlug } from '../../../../../data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, MessageCircle, Star, Shield, Truck, Award, CheckCircle, Heart, Share2 } from 'lucide-react';
import { useState } from 'react';
import ProductImage from '../../../../components/ui/ProductImage';

interface ProductPageClientProps {
  categoryId: string;
  productId: string;
}

export default function ProductPageClient({ categoryId, productId }: ProductPageClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const category = getCategoryBySlug(categoryId);
  if (!category) return notFound();
  
  const product = getProductBySlug(categoryId, productId);
  if (!product) return notFound();

  // Helper function to generate slug from product name
  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  };

  // WhatsApp contact details
  const whatsappNumber = '9898649362';
  const whatsappMessage = encodeURIComponent(`Hi, I'm interested in the ${product.name} from ${category.name}. Please provide more details.`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Calculate discount if prices are available
  const calculateDiscount = () => {
    if (product.price && product.originalPrice) {
      const currentPrice = parseFloat(product.price.replace(/[₹,]/g, ''));
      const originalPrice = parseFloat(product.originalPrice.replace(/[₹,]/g, ''));
      if (originalPrice > currentPrice) {
        const discountPercent = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
        return `${discountPercent}% OFF`;
      }
    }
    return null;
  };

  // Use actual product data from CSV
  const productDetails = {
    price: product.price || 'Price on Request',
    originalPrice: product.originalPrice,
    discount: calculateDiscount(),
    rating: 4.5,
    reviews: Math.floor(Math.random() * 200) + 50,
    availability: 'In Stock',
    warranty: '2 Years Comprehensive Warranty',
    features: product.features?.length ? product.features : [
      `High-quality ${category.name.toLowerCase()}`,
      'Energy efficient operation',
      'Durable construction',
      'Commercial grade performance',
      'Professional installation support',
      'Comprehensive warranty coverage'
    ],
    specifications: {
      'Brand': 'Western',
      'Model': product.name,
      ...(product.capacity && { 'Capacity': product.capacity }),
      ...(product.type && { 'Type': product.type }),
      ...(product.doorType && { 'Door Type': product.doorType }),
      ...(product.size && { 'Size': product.size }),
      ...(product.starRating && { 'Star Rating': product.starRating }),
      'Manufacturer': 'Western Refrigeration Pvt. Ltd.',
      ...(product.specifications || {})
    }
  };

  const productImages = [product.image || '/images/placeholder.jpg'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
            <span>/</span>
            <Link href={`/products/${categoryId}`} className="hover:text-blue-600 transition-colors">{category.name}</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm relative">
              <ProductImage
                src={productImages[activeImageIndex]}
                alt={product.name}
                fallbackSrc="/images/placeholder.jpg"
                fill
                className="object-contain p-8"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            {productImages.length > 1 && (
              <div className="flex space-x-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-20 h-20 rounded-lg border-2 overflow-hidden transition-all ${
                      activeImageIndex === index 
                        ? 'border-blue-600 ring-2 ring-blue-100' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="relative w-full h-full">
                      <ProductImage
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        fallbackSrc="/images/placeholder.jpg"
                        fill
                        className="object-contain p-2"
                        sizes="80px"
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {productDetails.availability}
                </span>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-2 rounded-full transition-colors ${
                    isWishlisted 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-gray-100 text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mb-2">{category.name} - {product.type || 'Standard'}</p>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(productDetails.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {productDetails.rating} ({productDetails.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-gray-900">
                  {productDetails.price}
                </span>
                {productDetails.originalPrice && productDetails.originalPrice !== productDetails.price && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      {productDetails.originalPrice}
                    </span>
                    {productDetails.discount && (
                      <span className="bg-red-100 text-red-800 text-sm font-semibold px-2 py-1 rounded">
                        {productDetails.discount}
                      </span>
                    )}
                  </>
                )}
              </div>
              <p className="text-sm text-gray-600">*Inclusive of all taxes</p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {productDetails.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="text-center">
                <Shield className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                <span className="text-xs text-gray-700 font-medium">2 Year Warranty</span>
              </div>
              <div className="text-center">
                <Truck className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                <span className="text-xs text-gray-700 font-medium">Free Delivery</span>
              </div>
              <div className="text-center">
                <Award className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                <span className="text-xs text-gray-700 font-medium">Certified Quality</span>
              </div>
            </div>

            {/* Contact Actions */}
            <div className="space-y-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
              
              <a
                href={`tel:${whatsappNumber}`}
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              
              <button className="w-full bg-gray-200 text-gray-700 px-6 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center space-x-2">
                <Share2 className="w-5 h-5" />
                <span>Share Product</span>
              </button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-bold text-gray-900">Specifications</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(productDetails.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <span className="font-medium text-gray-700">{key}</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">More from {category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.models
              .filter(p => p.name !== product.name)
              .slice(0, 4)
              .map((relatedProduct, index) => (
                <Link 
                  key={index}
                  href={`/products/${categoryId}/${generateSlug(relatedProduct.name)}`}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square bg-gray-50 relative">
                    <ProductImage 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      fallbackSrc="/images/placeholder.jpg"
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 truncate">{relatedProduct.name}</h3>
                    <div className="flex items-center space-x-2">
                      {relatedProduct.price ? (
                        <>
                          <span className="font-bold text-blue-600">{relatedProduct.price}</span>
                          {relatedProduct.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">{relatedProduct.originalPrice}</span>
                          )}
                        </>
                      ) : (
                        <span className="text-sm text-gray-600">Price on request</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}