'use client';

import { productCategories } from '@/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useState, use } from 'react';
import ImageLightbox from '@/components/ui/ImageLightbox';
import ProductCard from '@/components/ui/ProductCard';

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = use(params);
  const category = productCategories.find(cat => cat.id === categoryId);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: '', alt: '', productName: '' });

  if (!category) return notFound();

  const openLightbox = (src: string, alt: string, productName: string) => {
    setLightboxImage({ src, alt, productName });
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-12">
      {/* Header Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Back Button */}
          <Link 
            href="/products" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
          
          {/* Page Title */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 font-display">
              {category.name}
            </h1>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {category.models.map((model) => (
            <ProductCard
              key={model.name}
              id={model.name.toLowerCase().replace(/\s+/g, '-')}
              title={model.name}
              subtitle={`${category.name} Series`}
              description="High-performance refrigeration designed for freshness and efficiency."
              imageUrl={model.image}
              price={model.price}
              originalPrice={model.originalPrice}
              rating={4.5}
              reviewCount={24}
              isNew={model.isNew}
              href={`/products/${categoryId}/${model.name.toLowerCase().replace(/\s+/g, '-')}`}
            />
          ))}
        </div>

        {/* Empty State */}
        {category.models.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-gray-400"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0-3 3V6a3 3 0 1 0 3-3 3 3 0 0 1 3 3 3 3 0 0 1-3 3"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Models Available</h3>
              <p className="text-gray-600 mb-6">
                We&apos;re currently updating our {category.name.toLowerCase()} collection. 
                Please check back soon for new models.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <div className="bg-white border-t border-gray-200 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Need Help Choosing?
            </h2>
            <p className="text-base text-gray-600 mb-4 max-w-2xl mx-auto">
              Our experts are here to help you find the perfect {category.name.toLowerCase()} for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Get Expert Advice
              </Link>
              <Link 
                href="/products"
                className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                View All Categories
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        src={lightboxImage.src}
        alt={lightboxImage.alt}
        productName={lightboxImage.productName}
      />
    </div>
  );
} 