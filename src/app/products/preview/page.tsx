'use client';

import ProductCard from '@/components/ui/ProductCard';

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Product Card Preview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* New Product Card */}
          <ProductCard
            id="sample-product-1"
            title="Double Door Refrigerator"
            subtitle="Premium Series"
            description="High-performance refrigerator with advanced cooling technology and energy-efficient operation."
            imageUrl="/PRD/DOUBLE DOOR/product/IMG-20240703-WA0219.jpg"
            brand="Western"
            category="Double Door Refrigerator"
            capacity="500"
            rating={4.5}
            reviewCount={24}
            isNew={true}
            href="/products/double-door/sample-product"
          />

          {/* Bestseller Product Card */}
          <ProductCard
            id="sample-product-2"
            title="Deep Freezer 500L"
            subtitle="Commercial Series"
            description="Large capacity deep freezer perfect for commercial use with reliable cooling performance."
            imageUrl="/PRD/DEEP FREEZER/product/IMG-20240703-WA0219.jpg"
            brand="Western"
            category="Deep Freezer"
            capacity="500"
            rating={5}
            reviewCount={86}
            isBestseller={true}
            href="/products/deep-freezer/sample-product"
          />

          {/* Regular Product Card (No special badge) */}
          <ProductCard
            id="sample-product-3"
            title="Visi Cooler 300L"
            subtitle="Display Series"
            description="Premium display cooler with energy-efficient LED lighting and superior visibility."
            imageUrl="/PRD/VISI COOLER/product/IMG-20240703-WA0219.jpg"
            brand="Western"
            category="Visi Cooler"
            capacity="300"
            rating={4}
            reviewCount={15}
            href="/products/visi-cooler/sample-product"
          />

          {/* Product Card with Long Title */}
          <ProductCard
            id="sample-product-4"
            title="Water Cooler with Advanced Purification System and Storage"
            subtitle="Commercial Series"
            description="Commercial grade water cooler with built-in purification system and large storage capacity."
            imageUrl="/PRD/WATER COOLER/product/IMG-20240703-WA0219.jpg"
            brand="Western"
            category="Water Cooler"
            capacity="100"
            rating={4.5}
            reviewCount={42}
            href="/products/water-cooler/sample-product"
          />
        </div>
      </div>
    </div>
  );
} 