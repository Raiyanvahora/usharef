'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  Phone, 
  Award,
  ShoppingCart
} from 'lucide-react';
import HappyCustomers from './HappyCustomers';
import { productCategories } from '@/data/products';
import Image from 'next/image';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                <Link 
                  href="/products" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors flex items-center justify-center space-x-2 text-lg"
                >
                  <span>Explore More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-neutral-50 py-16">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center animate-on-scroll px-4 py-4 w-full sm:w-auto">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refrigerator Types Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-display text-display-lg font-bold text-neutral-900 mb-4">
              Complete Range of Products
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Explore our energy-efficient refrigeration solutions made for homes, shops, and businesses. Built for performance, backed by trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category) => (
              <Link
                key={category.id}
                href={`/products/${category.id}`}
                className="appliance-card p-6 animate-on-scroll group block bg-white rounded-2xl shadow-md border border-blue-100 hover:border-yellow-400 hover:shadow-xl transition-all duration-200 cursor-pointer relative overflow-hidden"
              >
                <div className="bg-neutral-100 rounded-lg h-56 mb-4 flex items-center justify-center p-2">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={600}
                    height={600}
                    className="object-contain h-48 w-48"
                  />
                </div>
                <h3 className="font-bold text-neutral-900 mb-2 text-lg text-center">{category.name}</h3>
                <p className="text-neutral-600 mb-2 text-sm text-center">{category.description}</p>
                <span className="flex items-center text-primary-700 font-semibold group-hover:text-yellow-600 transition-colors text-sm justify-center mt-2">
                  View Models <ChevronRight className="w-4 h-4 ml-1" />
                </span>
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-blue-600 to-yellow-400 opacity-80" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Happy Customers Section */}
      <HappyCustomers />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container text-center">
          <div className="animate-on-scroll">
            <h2 className="font-display text-display-lg font-bold mb-4">
              Ready to Upgrade Your Refrigerator?
            </h2>
            <div className="flex justify-center mb-8">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-12 py-5 rounded-full font-semibold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out transform hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
                style={{ 
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #4338ca 100%)',
                  boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3), 0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
              >
                <ShoppingCart className="w-6 h-6" />
                <span>Explore</span>
              </Link>
            </div>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get expert advice on choosing the perfect refrigerator for your home. 
              Our specialists are here to help you find the ideal solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products" 
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Browse All Models</span>
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call for Free Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 