'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  productName?: string;
}

export default function ImageLightbox({ isOpen, onClose, src, alt, productName }: ImageLightboxProps) {
  const [isZoomed, setIsZoomed] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-90 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl max-h-screen w-full h-full flex items-center justify-center p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Zoom Controls */}
        <div className="absolute top-4 left-4 z-20 flex space-x-2">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>
        </div>

        {/* Product Name */}
        {productName && (
          <div className="absolute bottom-4 left-4 z-20">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
              <p className="font-semibold">{productName}</p>
            </div>
          </div>
        )}

        {/* Image Container */}
        <div className={`relative w-full h-full transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'}`}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
} 