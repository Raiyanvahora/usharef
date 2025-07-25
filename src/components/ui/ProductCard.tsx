import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, StarHalf } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  price: string;
  originalPrice?: string;
  rating?: number;
  reviewCount?: number;
  isNew?: boolean;
  isBestseller?: boolean;
  href: string;
}

export default function ProductCard({
  title,
  subtitle,
  description,
  imageUrl,
  price,
  originalPrice,
  rating = 4.5,
  reviewCount = 24,
  isNew = false,
  isBestseller = false,
  href
}: ProductCardProps) {
  // Calculate savings
  const calculateSavings = () => {
    if (!originalPrice || !price) return 0;
    const original = parseInt(originalPrice.replace(/[^0-9]/g, ''));
    const current = parseInt(price.replace(/[^0-9]/g, ''));
    return original - current;
  };

  // Generate star rating display
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half-star"
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star
          key={`empty-star-${i}`}
          className="w-4 h-4 text-gray-300"
        />
      );
    }

    return stars;
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 w-full max-w-sm mx-auto sm:max-w-none">
      {/* Badge (New or Bestseller) */}
      {(isNew || isBestseller) && (
        <div className="absolute top-4 left-4 z-10">
          <div className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
            isNew 
              ? 'bg-blue-600 text-white' 
              : 'bg-yellow-400 text-black'
          }`}>
            {isNew ? 'New' : 'Bestseller'}
          </div>
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-gray-50 to-gray-100 opacity-50"></div>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, 100vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-6 pt-6 sm:pt-8">
        {/* Title & Rating */}
        <div className="mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 min-h-[48px] sm:min-h-[56px] line-clamp-2">
            <Link href={href} className="hover:text-blue-600 transition-colors">
              {title}
            </Link>
          </h3>
          {subtitle && (
            <p className="text-sm text-gray-600 mb-3">{subtitle}</p>
          )}
          <div className="flex items-center space-x-2">
            <div className="flex">
              {renderStars(rating)}
            </div>
            <span className="text-sm text-gray-600">
              ({reviewCount})
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 sm:mb-6 line-clamp-2 flex-grow">
          {description}
        </p>

        {/* Price */}
        <div className="mb-4 sm:mb-6">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-xl sm:text-2xl font-bold text-gray-900">{price}</span>
            {originalPrice && (
              <>
                <span className="text-sm text-gray-500 line-through">
                  {originalPrice}
                </span>
                <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded-full">
                  Save ₹{calculateSavings().toLocaleString()}
                </span>
              </>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href={href}
          className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all duration-200 group/btn text-sm sm:text-base"
        >
          View Details
          <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
} 