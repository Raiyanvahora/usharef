'use client';

import React from 'react';
import Link from 'next/link';
import { productCategories } from '../../../data/products';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Usha Pro Max 500L',
    image: '/products/fridge1.jpg',
    price: '₹45,999',
    description: 'Double-door refrigerator with smart cooling technology',
    features: [
      'Smart cooling system',
      'Energy-efficient operation',
      'Large capacity',
      'Digital temperature control',
    ],
  },
  {
    id: 2,
    name: 'Usha Elite 350L',
    image: '/products/fridge2.jpg',
    price: '₹35,999',
    description: 'Single-door refrigerator with energy-saving features',
    features: [
      'Energy-saving mode',
      'Quick cooling technology',
      'Adjustable shelves',
      'Fresh food compartment',
    ],
  },
  {
    id: 3,
    name: 'Usha Supreme 650L',
    image: '/products/fridge3.jpg',
    price: '₹65,999',
    description: 'Side-by-side refrigerator with advanced features',
    features: [
      'Water dispenser',
      'Ice maker',
      'Multi-airflow system',
      'Smart display',
    ],
  },
  // Add more products as needed
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-10 text-center">Our Product Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {productCategories.map(category => (
          <Link key={category.id} href={`/products/${category.id}`}
            className="group block bg-white rounded-2xl shadow-md border border-blue-100 hover:border-yellow-400 hover:shadow-xl transition-all duration-200 p-6 cursor-pointer relative overflow-hidden">
            <div className="flex flex-col items-center">
              <div className="bg-neutral-100 rounded-lg h-32 w-32 flex items-center justify-center mb-4">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={96}
                  height={96}
                  className="object-contain h-20 w-20"
                />
              </div>
              <h2 className="font-bold text-lg text-neutral-900 mb-1 text-center">{category.name}</h2>
              <p className="text-neutral-600 text-sm text-center mb-4 min-h-[48px]">{category.description}</p>
              <span className="flex items-center text-primary-700 font-semibold group-hover:text-yellow-600 transition-colors text-sm mt-auto">
                View Models <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </div>
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-blue-600 to-yellow-400 opacity-80" />
          </Link>
        ))}
      </div>
    </div>
  );
} 