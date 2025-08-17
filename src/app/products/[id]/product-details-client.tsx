'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Star, CheckCircle, Heart, Share2, Download, ChevronLeft, ChevronRight, ZoomIn, Mail } from 'lucide-react';
import { useState } from 'react';
import ProductImage from '../../../components/ui/ProductImage';

interface ProductDetailsClientProps {
  product: {
    id: string;
    name: string;
    image: string;
    images?: string[];
    mrp?: string;
    price?: string;
    originalPrice?: string;
    capacity?: string;
    description?: string;
    features?: string[];
    specifications?: Record<string, string>;
    brand?: string;
    type?: string;
    doorType?: string;
    size?: string;
    starRating?: string;
    warranty?: string;
    isNew?: boolean;
    isBestseller?: boolean;
    brochureUrl?: string;
  };
  category: {
    id: string;
    name: string;
    description: string;
    warranty?: string;
    deliveryInfo?: string;
  };
  relatedProducts: Array<{
    id: string;
    name: string;
    image: string;
    mrp?: string;
    price?: string;
    originalPrice?: string;
    capacity?: string;
    isNew?: boolean;
    isBestseller?: boolean;
  }>;
}

export default function ProductDetailsClient({ product, category, relatedProducts }: ProductDetailsClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeTab, setActiveTab] = useState('specifications');
  
  if (!product || !category) {
    return notFound();
  }

  // WhatsApp contact details
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || '919898649362';
  const getWhatsAppLink = (forOffer: boolean = false) => {
    const message = forOffer 
      ? `Hi, I'm interested in ${product.name} (${product.id}); please share your best offer.`
      : `Hi, I'm interested in the ${product.name} from ${category.name}. Please provide more details.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };
  const whatsappLink = getWhatsAppLink();

  // Get MRP display value
  const getMRPDisplay = () => {
    return product.mrp || product.originalPrice || product.price || 'Contact for MRP';
  };
  
  const mrpDisplay = getMRPDisplay();

  // Use product images or fallback to single image
  const productImages = product.images?.length ? product.images : [product.image || '/images/placeholder.jpg'];

  // Product specifications with enhanced structure
  const specifications = product.specifications || {
    'Brand': product.brand || 'Western',
    'Model': `${product.name} (${product.id})`,
    'Category': category.name,
    'Type': product.type || 'Standard',
    ...(product.capacity && { 'Capacity': product.capacity }),
    ...(product.doorType && { 'Door Type': product.doorType }),
    ...(product.size && { 'Size': product.size }),
    ...(product.starRating && { 'Energy Rating': product.starRating }),
    'Warranty': product.warranty || category.warranty || '1 Year',
    'Manufacturer': 'Western Refrigeration Pvt. Ltd.',
    'Country of Origin': 'India'
  };

  // Product features with fallback
  const features = product.features?.length ? product.features : [
    `Premium quality ${category.name.toLowerCase()}`,
    'Energy efficient operation',
    'Durable construction with long life',
    'Commercial grade performance',
    'Professional installation support',
    'Comprehensive warranty coverage',
    'After-sales service network',
    'Certified quality standards'
  ];

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-[70svh] md:min-h-[85vh] bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
            <span className="text-gray-400">/</span>
            <Link href={`/products#${category.id}`} className="hover:text-blue-600 transition-colors">{category.name}</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Product Images Gallery */}
          <div className="space-y-4">
            {/* Main Image with Zoom */}
            <div className="product-image-container bg-white border border-gray-200 group">
              {productImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
              
              <div 
                className="relative w-full h-full cursor-zoom-in"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <Image
                  src={productImages[activeImageIndex]}
                  alt={product.name}
                  fill
                  className={`no-crop transition-transform duration-300 ${isZoomed ? 'scale-150' : ''}`}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-gray-600" />
                </div>
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            {productImages.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden transition-all ${
                      activeImageIndex === index 
                        ? 'border-blue-600 ring-2 ring-blue-100' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="relative w-full h-full bg-white">
                      <Image
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        fill
                        className="no-crop"
                        sizes="80px"
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Product Title & Status */}
            <div>
              <div className="flex items-start justify-between mb-3">
                <h1 className="text-3xl font-bold text-gray-900">
                  {product.name}
                </h1>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-2 rounded-full transition-colors ${
                    isWishlisted 
                      ? 'bg-red-50 text-red-600' 
                      : 'bg-gray-100 text-gray-400 hover:text-red-500'
                  }`}
                  aria-label="Add to wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  In Stock
                </span>
                {product.isNew && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    New
                  </span>
                )}
                {product.isBestseller && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                    Bestseller
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.5 out of 5</span>
                <span className="text-sm text-gray-400">|</span>
                <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                  {Math.floor(Math.random() * 100) + 20} Reviews
                </span>
              </div>

              {/* Description */}
              {product.description && (
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              )}
            </div>

            {/* Crossed-out MRP with Offer Available */}
            <div className="border-t border-b border-gray-200 py-4">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                {mrpDisplay.includes('Contact') ? (
                  <span className="text-3xl font-bold text-gray-600">{mrpDisplay}</span>
                ) : (
                  <span className="text-3xl font-bold text-gray-500 line-through">
                    MRP: {mrpDisplay}
                  </span>
                )}
                <a
                  href={getWhatsAppLink(true)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-700 text-sm font-semibold rounded-full transition-colors"
                >
                  <span>Offer Available</span>
                </a>
              </div>
              <p className="text-xs text-gray-500">T & C Apply</p>
              <p className="text-sm text-gray-500 mt-1">*Inclusive of all taxes</p>
            </div>

            {/* Key Highlights */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.slice(0, 6).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>


            {/* Action Buttons */}
            <div className="space-y-3">
              <a
                href={getWhatsAppLink(true)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp for Offer</span>
              </a>
              
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enquiry</span>
                </a>
                
                <a
                  href={`tel:${whatsappNumber}`}
                  className="bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Enquiry</span>
                </button>
                
                {product.brochureUrl && (
                  <a
                    href={product.brochureUrl}
                    download
                    className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Brochure</span>
                  </a>
                )}
                {!product.brochureUrl && (
                  <button className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          {/* Tab Headers */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('specifications')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'specifications'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'features'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab('warranty')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'warranty'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Warranty & Service
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="py-8">
            {activeTab === 'specifications' && (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Technical Specifications</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {Object.entries(specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                        <span className="font-medium text-gray-600">{key}</span>
                        <span className="text-gray-900 text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'warranty' && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Warranty & Service Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Warranty Coverage</h4>
                    <p className="text-gray-700">
                      {product.warranty || category.warranty || '1 Year comprehensive warranty'} covering all manufacturing defects.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Service Support</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>24/7 customer support helpline</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Pan-India service network</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Trained technicians for installation and maintenance</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Genuine spare parts availability</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Delivery Information</h4>
                    <p className="text-gray-700">
                      {category.deliveryInfo || 'Free delivery and installation within city limits. Charges may apply for remote locations.'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12 border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts.map((relatedProduct, index) => (
                <Link 
                  key={index}
                  href={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="aspect-square bg-gray-50 relative">
                    <ProductImage 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      fallbackSrc="/images/placeholder.jpg"
                      className="w-full h-full object-contain p-4"
                      loading="lazy"
                    />
                    {relatedProduct.isNew && (
                      <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        NEW
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">{relatedProduct.name}</h3>
                    <p className="text-xs text-gray-500 mb-2">{relatedProduct.capacity || category.name}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        {relatedProduct.mrp || relatedProduct.originalPrice || relatedProduct.price ? (
                          <div className="space-y-1">
                            <div className="flex items-baseline space-x-1">
                              <span className="text-sm font-bold text-gray-500 line-through">
                                MRP: {relatedProduct.mrp || relatedProduct.originalPrice || relatedProduct.price}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500">T & C Apply</p>
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <span className="text-xs text-gray-600">Price on request</span>
                            <p className="text-xs text-gray-500">T & C Apply</p>
                          </div>
                        )}
                      </div>
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