'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  Award,
  Wrench
} from 'lucide-react';
import HappyCustomers from './HappyCustomers';
import Image from 'next/image';
import ServiceBookingModal from '@/components/ServiceBookingModal';
import ProductSkeleton from '@/components/ProductSkeleton';

// Hardcode the product data directly to ensure it works
const hardcodedCategories = [
  {
    id: 'visi-cooler',
    name: 'Visi Cooler',
    description: 'Energy-efficient coolers for beverages and perishables.',
    image: '/PRD/VISI COOLER/mainimagesvisi/0709091_SRC380HC-GL_Left-Angle-300x300.png',
    models: []
  },
  {
    id: 'deep-freezer',
    name: 'Deep Freezer',
    description: 'Reliable deep freezers for commercial and home use.',
    image: '/PRD/DEEP FREEZER/main images/D300-Double-dOOR-1-300x300.png',
    models: []
  },
  {
    id: 'water-dispenser',
    name: 'Water Dispenser',
    description: 'Convenient water dispensers for home and office.',
    image: '/PRD/WATER DISPENSER/mainimagesdis/bwd3fmcga-bwd-mi-01-resized.jpg',
    models: []
  },
  {
    id: 'water-cooler',
    name: 'Water Cooler',
    description: 'High-capacity water coolers for every need.',
    image: '/PRD/WATER COOLER/mainimageswater/PWC-40806080-1-300x300.png',
    models: []
  },
  {
    id: 'pastry-counter',
    name: 'Pastry Counter',
    description: 'Elegant pastry counters for bakeries and cafes.',
    image: '/PRD/PASTRY COUNTER/mainimages/Right-Angle-With-Stock-1-300x300.png',
    models: []
  }
];

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  // const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [categories, setCategories] = useState(hardcodedCategories);

  useEffect(() => {
    // Try to import product data dynamically
    import('../../data/products')
      .then((module) => {
        console.log('Products module loaded:', module);
        console.log('productCategories exists:', !!module.productCategories);
        console.log('productCategories length:', module.productCategories?.length);
        console.log('First category:', module.productCategories?.[0]);
        if (module.productCategories && module.productCategories.length > 0) {
          setCategories(module.productCategories);
          console.log('Using imported categories:', module.productCategories.length, 'categories');
          console.log('Categories set in state');
        } else {
          console.log('No products in module, using hardcoded data');
        }
      })
      .catch((error) => {
        console.error('Failed to load products:', error);
        console.log('Using hardcoded categories as fallback');
      })
      .finally(() => {
        setCategoriesLoading(false);
      });

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const stats = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '5,000+', label: 'Happy Customers' },
    { number: '99%', label: 'Customer Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-section-dark min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Product Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <Image
                  src="/banners/60435acb-98b7-412c-b983-42433e438f72.png"
                  alt="Premium Refrigerator"
                  width={600}
                  height={700}
                  className="object-contain max-w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-center lg:text-left">
              {/* Brand Badge */}
              <div className="inline-flex items-center space-x-2 bg-white bg-opacity-10 px-4 py-2 rounded-full border border-white border-opacity-20 mb-6">
                <Award className="w-4 h-4 text-white" />
                <span className="text-white font-medium text-sm">Charotar&apos;s Trusted Refrigerator Brand</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Your Trusted Cooling Partner
              </h1>

              {/* Subheading */}
              <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-4">
                Energy-Efficient. Reliable. Affordable.
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Keep your food fresh and your family happy—every day.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/products" 
                  className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 text-lg"
                >
                  <span>Shop Now</span>
                </Link>
                <button 
                  onClick={() => setIsServiceModalOpen(true)}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors flex items-center justify-center space-x-2 text-lg"
                >
                  <Wrench className="w-5 h-5" />
                  <span>Book a Service</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center animate-on-scroll px-4 py-4 w-full sm:w-auto">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refrigerator Types Section */}
      <section className="py-16 lg:py-20" style={{ minHeight: '500px', opacity: 1, display: 'block' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
              Complete Range of Products
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our energy-efficient refrigeration solutions made for homes, shops, and businesses. Built for performance, backed by trust.
            </p>
          </div>


          {/* Product Cards Grid */}
          <div 
            className="mt-8"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
              marginTop: '32px'
            }}
          >
            {categoriesLoading ? (
              // Show loading skeletons
              Array(5).fill(0).map((_, index) => (
                <div 
                  key={`skeleton-${index}`} 
                  className="bg-white rounded-lg p-4"
                  style={{
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}
                >
                  <ProductSkeleton />
                </div>
              ))
            ) : categories && categories.length > 0 ? (
              // Show product cards
              categories.map((category, index) => (
                <Link
                  key={category.id}
                  href={`/products/${category.id}`}
                  className="group block bg-white transition-all duration-300 hover:shadow-lg"
                  style={{
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    padding: '16px',
                    textDecoration: 'none'
                  }}
                >
                  {/* Product Image */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      style={{
                        width: '100%',
                        height: '160px',
                        maxWidth: '200px'
                      }}
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                  </div>
                  
                  {/* Product Name */}
                  <h3 
                    className="text-center mb-3 group-hover:text-primary-600 transition-colors"
                    style={{
                      fontWeight: 'bold',
                      fontSize: '18px',
                      color: '#1f2937'
                    }}
                  >
                    {category.name}
                  </h3>
                  
                  {/* Shop Now Button */}
                  <div className="text-center">
                    <button 
                      className="group-hover:bg-primary-700 transition-colors"
                      style={{
                        backgroundColor: '#2563eb',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        border: 'none',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}
                    >
                      Shop Now
                    </button>
                  </div>
                </Link>
              ))
            ) : (
              // Show fallback message
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No products available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Happy Customers Section */}
      <HappyCustomers />

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 text-gray-900">
              Ready to Upgrade Your Refrigerator?
            </h2>
            <div className="flex justify-center">
              <button
                onClick={() => setIsServiceModalOpen(true)}
                className="group inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-12 py-5 rounded-full font-semibold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out transform hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
                style={{ 
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #4338ca 100%)',
                  boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3), 0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Wrench className="w-6 h-6" />
                <span>Book a Service</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Booking Modal */}
      <ServiceBookingModal 
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
      />
    </div>
  );
} 