import React from 'react';
import { FaSnowflake, FaBoxOpen, FaTint, FaGlassWhiskey, FaBirthdayCake } from 'react-icons/fa';

export default function ServicePage() {
  return (
    <div className="py-20 bg-neutral-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline & Subtitle */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary-600 mb-2 tracking-wide">Our Services & Products</h1>
          <p className="text-lg text-neutral-500 font-light mb-6">USHA REFRIGERATION offers a wide range of commercial and residential cooling solutions, known for quality and reliability.</p>
        </div>
        {/* Services Grid: 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center hover:shadow-xl transition-all">
            <FaSnowflake className="text-4xl text-primary-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-primary-700">Visi Cooler</h2>
            <p className="text-neutral-600">Commercial beverage cooler for display</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center hover:shadow-xl transition-all">
            <FaBoxOpen className="text-4xl text-primary-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-primary-700">Deep Freezer</h2>
            <p className="text-neutral-600">Large capacity deep freezer for storage</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center hover:shadow-xl transition-all">
            <FaTint className="text-4xl text-primary-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-primary-700">Water Dispenser</h2>
            <p className="text-neutral-600">Hot and cold water dispenser</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center hover:shadow-xl transition-all">
            <FaGlassWhiskey className="text-4xl text-primary-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-primary-700">Water Cooler</h2>
            <p className="text-neutral-600">Stainless steel water cooler for offices</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center hover:shadow-xl transition-all md:col-span-2">
            <FaBirthdayCake className="text-4xl text-primary-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-primary-700">Pastry Counter</h2>
            <p className="text-neutral-600">Display counter for pastries and desserts</p>
          </div>
        </div>
      </div>
    </div>
  );
} 