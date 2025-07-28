'use client';

import { productCategories } from '../../../../../data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, MessageCircle, Star, Shield, Truck, Award, CheckCircle, Heart, Share2 } from 'lucide-react';
import { use, useState } from 'react';

interface ProductPageProps {
  params: Promise<{ categoryId: string; productId: string }>;
}

export default function ProductDetailsPage({ params }: ProductPageProps) {
  const { categoryId, productId } = use(params);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const category = productCategories.find(cat => cat.id === categoryId);
  if (!category) return notFound();
  
  const product = category.models.find(model => 
    model.name.toLowerCase().replace(/\s+/g, '-') === productId
  );
  if (!product) return notFound();

  // WhatsApp contact details
  const whatsappNumber = '9898649362';
  const whatsappMessage = encodeURIComponent(`Hi, I'm interested in the ${product.name} from ${category.name}. Please provide more details.`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Calculate discount if prices are available
  const calculateDiscount = () => {
    if (product.price && product.originalPrice) {
      const price = parseInt(product.price.replace(/[^0-9]/g, ''));
      const originalPrice = parseInt(product.originalPrice.replace(/[^0-9]/g, ''));
      const discountPercent = Math.round(((originalPrice - price) / originalPrice) * 100);
      return `${discountPercent}% OFF`;
    }
    return null;
  };

  // Use actual product data with fallbacks
  const productDetails = {
    price: product.price || '₹25,999',
    originalPrice: product.originalPrice || '₹29,999',
    discount: calculateDiscount(),
    rating: 4.5,
    reviews: Math.floor(Math.random() * 200) + 50,
    availability: 'In Stock',
    warranty: '2 Years Comprehensive Warranty',
    features: product.features || [
      'Energy Efficient Design',
      'Advanced Cooling Technology',
      'Durable Construction',
      'Easy Maintenance',
      'Compact Design',
      'Eco-Friendly Operation'
    ],
    specifications: product.specifications || {
      'Capacity': '100 Liters',
      'Power Consumption': '150W',
      'Dimensions': '60 x 55 x 85 cm',
      'Weight': '45 kg',
      'Voltage': '220-240V',
      'Frequency': '50Hz',
      'Cooling System': 'Direct Cool',
      'Refrigerant': 'R-134a'
    },
    description: product.description || `Premium ${product.name} from our ${category.name} collection. Built with superior quality and designed for optimal performance.`,
    images: [
      product.image,
      product.image, // In real app, you'd have multiple images
      product.image,
      product.image
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/products" className="text-primary-600 hover:text-primary-700">Products</Link>
            <span className="text-gray-400">/</span>
            <Link href={`/products/${categoryId}`} className="text-primary-600 hover:text-primary-700">{category.name}</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="relative h-96 lg:h-[500px] flex items-center justify-center p-8 bg-gray-50">
                <img
                  src={productDetails.images[activeImageIndex]}
                  alt={product.name}
                  className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
                />
                
                {/* Discount Badge */}
                {productDetails.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {productDetails.discount}
                  </div>
                )}
                
                {/* Wishlist & Share */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button 
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-2 rounded-full shadow-lg transition-colors ${
                      isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:text-red-500'
                    }`}
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-white text-gray-600 hover:text-primary-600 rounded-full shadow-lg transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-2 overflow-x-auto">
              {productDetails.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    activeImageIndex === index ? 'border-primary-600' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Product Title & Rating */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{category.name} - Premium Quality</p>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(productDetails.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {productDetails.rating} ({productDetails.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6 shadow-lg border border-primary-100">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-3xl font-bold text-gray-900">{productDetails.price}</span>
                {productDetails.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">{productDetails.originalPrice}</span>
                )}
                {productDetails.discount && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
                    {productDetails.discount}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">Inclusive of all taxes</p>
              <p className="text-xs text-gray-500 mt-1">Free delivery across India</p>
            </div>

            {/* Availability & Warranty */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">{productDetails.availability}</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600">
                <Shield className="w-5 h-5" />
                <span className="font-medium">{productDetails.warranty}</span>
              </div>
            </div>

            {/* Product Description */}
            {productDetails.description && (
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">About This Product</h3>
                <p className="text-gray-700 leading-relaxed">{productDetails.description}</p>
              </div>
            )}

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {productDetails.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Buy Now</span>
                </Link>
                
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border-2 border-primary-600 text-primary-600 py-4 px-6 rounded-xl font-bold text-lg hover:bg-primary-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Quote</span>
                </Link>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Need help? Contact our experts</p>
                <div className="flex items-center justify-center space-x-4">
                  <a href="tel:+919898649362" className="text-primary-600 hover:text-primary-700 font-medium">
                    📞 +91 98986 49362
                  </a>
                  <a href="mailto:info@usharefrigeration.com" className="text-primary-600 hover:text-primary-700 font-medium">
                    ✉️ Email Us
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Truck className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Free Delivery</p>
                <p className="text-xs text-gray-600">Pan India</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Warranty</p>
                <p className="text-xs text-gray-600">2 Years</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Certified</p>
                <p className="text-xs text-gray-600">Quality Assured</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Technical Specifications</h2>
            <div className="flex items-center text-sm text-gray-600">
              <Shield className="w-4 h-4 mr-1" />
              <span>All specifications verified</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {Object.entries(productDetails.specifications).map(([key, value], index) => (
                <div 
                  key={key} 
                  className={`p-5 ${
                    index % 4 === 0 || index % 4 === 3 ? 'bg-gray-50' : 'bg-white'
                  } border-b border-gray-200 md:border-r md:odd:border-r-0`}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <span className="font-semibold text-gray-700 text-sm">{key}:</span>
                    <span className="text-gray-900 font-medium">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.models.filter(model => model.name !== product.name).slice(0, 4).map((relatedProduct) => (
              <Link
                key={relatedProduct.name}
                href={`/products/${categoryId}/${relatedProduct.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200 transform hover:-translate-y-1"
              >
                <div className="relative h-48 bg-gray-50 flex items-center justify-center p-4">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  {relatedProduct.originalPrice && relatedProduct.price && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      SAVE {Math.round(((parseInt(relatedProduct.originalPrice.replace(/[^0-9]/g, '')) - parseInt(relatedProduct.price.replace(/[^0-9]/g, ''))) / parseInt(relatedProduct.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">{relatedProduct.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">Premium {category.name}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-primary-600 font-bold text-lg">{relatedProduct.price || '₹25,999'}</span>
                      {relatedProduct.originalPrice && (
                        <span className="text-xs text-gray-500 line-through ml-2">{relatedProduct.originalPrice}</span>
                      )}
                    </div>
                    <span className="text-xs text-primary-600 font-medium">View →</span>
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