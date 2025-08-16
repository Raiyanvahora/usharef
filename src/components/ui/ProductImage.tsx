'use client';

import { useState } from 'react';
import { Package } from 'lucide-react';

interface ProductImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

export default function ProductImage({
  src,
  alt,
  fallbackSrc = '/images/placeholder.jpg',
  width,
  height,
  className = '',
  priority,
  loading,
  objectFit = 'contain'
}: ProductImageProps) {
  // Keep the path as-is since Next.js will handle URL encoding
  const normalizedSrc = src || fallbackSrc;
  const [currentSrc, setCurrentSrc] = useState(normalizedSrc);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    if (currentSrc === normalizedSrc && fallbackSrc && fallbackSrc !== normalizedSrc) {
      setCurrentSrc(fallbackSrc);
    } else if (currentSrc === fallbackSrc && fallbackSrc !== '/images/placeholder.jpg') {
      setCurrentSrc('/images/placeholder.jpg');
    } else {
      setImageError(true);
    }
  };

  if (imageError) {
    return (
      <div className={`bg-gray-100 flex items-center justify-center ${className}`}>
        <div className="text-center text-gray-400">
          <Package className="w-12 h-12 mx-auto mb-2" />
          <p className="text-xs">Image not available</p>
        </div>
      </div>
    );
  }

  // Always use regular img tag for static serving - no Next.js Image optimization
  return (
    <div className="relative">
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-100 animate-pulse ${className}`} />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={{ objectFit }}
        loading={priority ? 'eager' : (loading || 'lazy')}
        onError={handleImageError}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}