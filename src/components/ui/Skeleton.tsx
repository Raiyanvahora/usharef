import React from 'react';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  width = '100%', 
  height = '20px' 
}) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      style={{ width, height }}
    />
  );
};

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <Skeleton height={200} className="mb-4" />
      <Skeleton height={20} className="mb-2" />
      <Skeleton height={16} width="60%" className="mb-4" />
      <div className="flex justify-between items-center">
        <Skeleton height={24} width="40%" />
        <Skeleton height={32} width="30%" />
      </div>
    </div>
  );
};

export const CategoryCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8">
      <Skeleton height={280} className="mb-8" />
      <Skeleton height={32} className="mb-4" />
      <Skeleton height={16} className="mb-2" />
      <Skeleton height={16} width="80%" />
    </div>
  );
};