'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Package } from 'lucide-react';

interface ProductImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  sizes?: string;
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
  fill,
  className = '',
  sizes,
  priority,
  loading,
  objectFit = 'cover'
}: ProductImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    if (currentSrc === src && fallbackSrc && fallbackSrc !== src) {
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

  return (
    <div className="relative">
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-100 animate-pulse ${className}`} />
      )}
      <Image
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={className}
        style={{ objectFit }}
        sizes={sizes}
        priority={priority}
        loading={loading || 'lazy'}
        onError={handleImageError}
        onLoad={() => setIsLoading(false)}
        unoptimized={currentSrc.startsWith('http')}
      />
    </div>
  );
}