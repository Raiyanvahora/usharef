'use client';

import React from 'react';
import Link from 'next/link';
import { productCategories } from '../../../data/products';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Our Product Categories
            </h1>
          </div>
        </div>
        
        {/* Visual Separator */}
        <div className="h-1 bg-gradient-to-r from-primary-600 via-blue-500 to-primary-600"></div>
      </div>

      {/* Products Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <Link 
              key={category.id} 
              href={`/products/${category.id}`}
              className="product-card group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200 transform hover:-translate-y-1 p-4 flex flex-col items-center"
            >
              {/* Category Image */}
              <div className="relative w-full flex justify-center items-center bg-gray-50 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={320}
                  height={240}
                  className="product-card-img object-cover w-full max-w-[320px] h-auto transition-transform duration-300 group-hover:scale-105 rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
                />
                
                {/* Gradient Overlay remains */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-blue-500"></div>
              </div>

              {/* Category Details */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 text-center font-display group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h2>
                
                <p className="text-gray-800 text-sm font-medium text-center mb-4 leading-relaxed min-h-[40px]">
                  {category.description}
                </p>

                {/* Models Count */}
                <div className="text-center mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700">
                    {category.models?.length || 0} Models Available
                  </span>
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-center text-primary-600 font-bold group-hover:text-primary-700 transition-colors">
                  <span className="mr-2">View Models</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you find the perfect appliance solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Get Expert Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/"
                className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 