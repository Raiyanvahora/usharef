'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
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
    <div className="min-h-[70svh] md:min-h-[85vh] bg-white">
      {/* Hero Section */}
      <section className="hero-section-dark relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 min-h-[70svh] md:min-h-[85vh] py-8 sm:py-10 md:py-16">
            {/* Left Side - Product Image */}
            <div className="order-first md:order-none">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src="/banners/60435acb-98b7-412c-b983-42433e438f72.png"
                  alt="Premium Refrigerator"
                  fill
                  className="object-cover"
                  priority
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-4 sm:space-y-6">
              {/* Brand Badge */}
              <div className="inline-flex items-center space-x-2 bg-gray-900 bg-opacity-10 px-4 py-2 rounded-full border border-gray-900 border-opacity-20">
                <Award className="w-4 h-4 text-gray-900" />
                <span className="text-gray-900 font-medium text-sm">Charotar&apos;s Trusted Refrigerator Brand</span>
              </div>

              {/* Main Business Name */}
              <h1 className="font-bold text-gray-900 leading-tight [font-size:clamp(24px,8vw,48px)]">
                <span className="text-blue-600">Usha</span> Refrigeration & Service
              </h1>
              
              {/* Main Heading */}
              <h2 className="font-bold text-gray-700 leading-tight [font-size:clamp(18px,5vw,32px)]">
                Your Trusted Cooling Partner
              </h2>

              {/* Subheading */}
              <p className="text-blue-600 font-semibold leading-snug [font-size:clamp(14px,3.8vw,20px)] line-clamp-4 sm:line-clamp-none">
                Efficient. Reliable. Affordable.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://maps.google.com/?q=Usha+Refrigeration+%26+A.C,+Enter+city+Arcades,+Bhalej+Rd,+near+Abdullah+Masjid+Barbeques+Restaurants,+Anand,+Gujarat+388001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl px-4 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Get Direction</span>
                </a>
                <button 
                  onClick={() => setIsServiceModalOpen(true)}
                  className="inline-flex items-center rounded-xl px-4 py-2 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors"
                >
                  <Wrench className="w-4 h-4 mr-2" />
                  <span>Book a Service</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-4 sm:py-8 lg:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center animate-on-scroll py-2 sm:py-4">
                <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium leading-tight px-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Brands We Have</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">We partner with leading refrigeration brands to bring you the best in cooling technology</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 justify-items-center">
            <Link href="/products?brand=western" className="flex flex-col items-center justify-center text-center animate-on-scroll hover:transform hover:scale-105 transition-transform duration-200">
              <div className="bg-white rounded-xl flex items-center justify-center mb-2 shadow-md border border-gray-200 p-3 hover:shadow-lg transition-shadow">
                <Image
                  src="/logo/western-head-logo-2025.png"
                  alt="Western Refrigeration"
                  width={240}
                  height={120}
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 120px"
                />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Western</h3>
              <p className="text-xs sm:text-sm text-gray-600">Premium Refrigeration</p>
            </Link>
            
            <Link href="/products?brand=icemake" className="flex flex-col items-center justify-center text-center animate-on-scroll hover:transform hover:scale-105 transition-transform duration-200">
              <div className="bg-white rounded-xl flex items-center justify-center mb-2 shadow-md border border-gray-200 p-3 hover:shadow-lg transition-shadow">
                <Image
                  src="/logo/logo-1.png"
                  alt="Icemake"
                  width={240}
                  height={120}
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 120px"
                />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Icemake</h3>
              <p className="text-xs sm:text-sm text-gray-600">Ice Solutions</p>
            </Link>
            
            <Link href="/products?brand=frigoglass" className="flex flex-col items-center justify-center text-center animate-on-scroll hover:transform hover:scale-105 transition-transform duration-200">
              <div className="bg-white rounded-xl flex items-center justify-center mb-2 shadow-md border border-gray-200 p-3 hover:shadow-lg transition-shadow">
                <Image
                  src="/logo/download.png"
                  alt="Frigoglass"
                  width={240}
                  height={120}
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 120px"
                />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Frigoglass</h3>
              <p className="text-xs sm:text-sm text-gray-600">European Technology</p>
            </Link>
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
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 text-gray-900 leading-tight">
              Is Your Refrigerator Not Cooling Right?
            </h2>
            <div className="flex justify-center">
              <button
                onClick={() => setIsServiceModalOpen(true)}
                className="group inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-base sm:text-lg lg:text-xl shadow-lg sm:shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out transform hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
                style={{ 
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #4338ca 100%)',
                  boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3), 0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />
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