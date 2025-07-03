'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Snowflake, 
  Zap, 
  Shield, 
  Star, 
  ChevronRight, 
  Phone, 
  Award,
  Thermometer,
  Leaf,
  Users,
  Clock,
  ShoppingCart
} from 'lucide-react';
import HappyCustomers from './HappyCustomers';
import { productCategories } from '../../data/products';
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

  const refrigeratorTypes = [
    {
      name: 'Single Door',
      description: 'Perfect for small families and apartments',
      features: ['Compact Design', 'Energy Efficient', 'Affordable'],
      capacity: '150-250L'
    },
    {
      name: 'Double Door',
      description: 'Ideal for medium-sized families',
      features: ['Separate Freezer', 'More Storage', 'Advanced Cooling'],
      capacity: '250-350L'
    },
    {
      name: 'Side-by-Side',
      description: 'Premium choice for large families',
      features: ['Maximum Storage', 'Water Dispenser', 'Premium Design'],
      capacity: '500-700L'
    },
    {
      name: 'French Door',
      description: 'Luxury refrigeration solution',
      features: ['Premium Features', 'Smart Technology', 'Elegant Design'],
      capacity: '600-800L'
    }
  ];

  const features = [
    {
      icon: Thermometer,
      title: 'Advanced Cooling Technology',
      description: 'Precise temperature control keeps food fresh longer'
    },
    {
      icon: Leaf,
      title: 'Energy Efficient',
      description: '5-star energy rating saves money on electricity bills'
    },
    {
      icon: Shield,
      title: '10-Year Warranty',
      description: 'Comprehensive warranty coverage for peace of mind'
    },
    {
      icon: Users,
      title: 'Expert Service',
      description: 'Professional installation and 24/7 customer support'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '5,000+', label: 'Happy Customers' },
    { number: '99%', label: 'Customer Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-section section-padding pt-32">
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center space-x-2 bg-accent-50 px-4 py-2 rounded-full border border-accent-200 mb-6">
                <Award className="w-4 h-4 text-accent-600" />
                <span className="text-accent-700 font-medium text-sm">Charotar's Trusted Refrigerator Brand</span>
              </div>
              
              <h1 className="font-display text-display-xl font-bold text-neutral-900 mb-6 leading-tight">
                Premium Refrigerators for 
                <span className="brand-gradient"> Every Home</span>
              </h1>
              
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Discover our complete range of energy-efficient refrigerators designed to keep your food fresh and your family happy. From compact single-door models to luxury French-door refrigerators.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/products" 
                  className="group inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-12 py-5 rounded-full font-semibold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out transform hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
                  style={{ 
                    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #4338ca 100%)',
                    boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3), 0 4px 10px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span>Shop Refrigerators</span>
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
              Choose from our extensive collection of products designed for every need. Each category offers a range of models with advanced features and elegant design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category) => (
              <Link
                key={category.id}
                href={`/products/${category.id}`}
                className="appliance-card p-6 animate-on-scroll group block bg-white rounded-2xl shadow-md border border-blue-100 hover:border-yellow-400 hover:shadow-xl transition-all duration-200 cursor-pointer relative overflow-hidden"
              >
                <div className="bg-neutral-100 rounded-lg h-40 mb-4 flex items-center justify-center">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={120}
                    height={120}
                    className="object-contain h-24 w-24"
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