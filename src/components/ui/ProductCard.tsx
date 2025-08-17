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
    <article className="group relative h-full flex flex-col bg-white rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full">
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
      <div className="product-image-container rounded-t-xl">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="no-crop"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-3 sm:p-4 gap-2 sm:gap-3">
        {/* Title & Rating */}
        <div>
          <h3 className="text-sm sm:text-base font-medium line-clamp-2 mb-1">
            <Link href={href} className="hover:text-blue-600 transition-colors">
              {title}
            </Link>
          </h3>
          {subtitle && (
            <p className="text-xs text-gray-500 line-clamp-2 mb-2">{subtitle}</p>
          )}
          <div className="flex items-center space-x-1">
            <div className="flex">
              {renderStars(rating)}
            </div>
            <span className="text-xs text-gray-600">
              ({reviewCount})
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="text-[13px] sm:text-base">
          <div className="flex items-baseline gap-1 flex-wrap">
            <span className="text-sm sm:text-xl font-bold text-gray-900">{price}</span>
            {originalPrice && (
              <>
                <span className="text-xs text-gray-500 line-through">
                  {originalPrice}
                </span>
                <span className="text-[10px] sm:text-xs font-medium px-1 py-0.5 bg-green-100 text-green-700 rounded">
                  Save ₹{calculateSavings().toLocaleString()}
                </span>
              </>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-auto pt-2">
          <Link
            href={href}
            className="hidden sm:inline-flex items-center justify-center w-full bg-blue-600 text-white px-3 py-1.5 rounded-lg font-medium transition-colors hover:bg-blue-700 text-sm"
          >
            View Details
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
} 