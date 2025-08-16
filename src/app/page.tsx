'use client';

import React, { useEffect, useRef, useState } from 'react';
import { 
  Award,
  Wrench,
  MapPin
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { categories } from '../../data/products';

// Lazy load heavy components
const HappyCustomers = dynamic(() => import('./HappyCustomers'), {
  loading: () => <div className="py-16 text-center">Loading testimonials...</div>
});
const ServiceBookingModal = dynamic(() => import('@/components/ServiceBookingModal'), {
  ssr: false
});
const ProductCategorySection = dynamic(() => import('@/components/ProductCategorySection'));


// Define the Category type to match what ProductCategorySection expects
interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  backgroundImage?: string;
  models: Array<{ id: string; name: string; price?: number; }>;
}

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  // const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [, setCategoriesLoading] = useState(true);
  const [productCategories] = useState<Category[]>(categories.slice(0, 6).map(cat => ({
    id: cat.id,
    name: cat.name,
    description: cat.description,
    image: cat.image,
    backgroundImage: cat.image,
    models: cat.models.slice(0, 3).map(model => ({
      id: model.id || model.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: model.name,
      price: model.price ? parseFloat(model.price.replace(/[₹,]/g, '')) : undefined
    }))
  })));

  useEffect(() => {
    // Use hardcoded categories for fast loading
    setCategoriesLoading(false);

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
      <section className="hero-section-dark min-h-screen flex items-center relative">
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

              {/* Main Business Name */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                <span className="text-blue-400">Usha</span> Refrigeration
              </h1>
              
              {/* Main Heading */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-200 mb-4 leading-tight">
                Your Trusted Cooling Partner
              </h2>

              {/* Subheading */}
              <h3 className="text-lg md:text-xl text-blue-400 font-semibold mb-6">
                Efficient. Reliable. Affordable.
              </h3>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="https://maps.google.com/?q=Usha+Refrigeration+%26+A.C,+Enter+city+Arcades,+Bhalej+Rd,+near+Abdullah+Masjid+Barbeques+Restaurants,+Anand,+Gujarat+388001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 text-base sm:text-lg"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Get Direction</span>
                </a>
                <button 
                  onClick={() => setIsServiceModalOpen(true)}
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors flex items-center justify-center space-x-2 text-base sm:text-lg"
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

      {/* Our Brands Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Brands We Have</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We partner with leading refrigeration brands to bring you the best in cooling technology</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16 mb-12 justify-items-center">
            <div className="flex flex-col items-center justify-center text-center animate-on-scroll">
              <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-gray-200 p-4">
                <Image
                  src="/logo/western-head-logo-2025.png"
                  alt="Western Refrigeration"
                  width={120}
                  height={120}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Western</h3>
              <p className="text-sm text-gray-600">Premium Refrigeration</p>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center animate-on-scroll">
              <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-gray-200 p-4">
                <Image
                  src="/logo/logo-1.png"
                  alt="Icemake"
                  width={120}
                  height={120}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Icemake</h3>
              <p className="text-sm text-gray-600">Ice Solutions</p>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center animate-on-scroll">
              <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-gray-200 p-4">
                <Image
                  src="/logo/download.png"
                  alt="Frigoglass"
                  width={120}
                  height={120}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Frigoglass</h3>
              <p className="text-sm text-gray-600">European Technology</p>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center animate-on-scroll">
              <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-gray-200 p-4">
                <Image
                  src="/logo/images.png"
                  alt="Blue Star"
                  width={120}
                  height={120}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Blue Star</h3>
              <p className="text-sm text-gray-600">Cooling Excellence</p>
            </div>
          </div>

        </div>
      </section>

      {/* Product Category Section */}
      <ProductCategorySection 
        categories={productCategories}
        title="Complete Range of Products"
      />

      {/* Our Happy Customers Section */}
      <HappyCustomers />

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 text-gray-900">
              Is Your Refrigerator Not Cooling Right?
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
                <span>Schedule a Repair</span>
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