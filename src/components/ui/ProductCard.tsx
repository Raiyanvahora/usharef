import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, StarHalf, MessageCircle } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  brand?: string;
  category?: string;
  capacity?: string;
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
  brand,
  category,
  capacity,
  rating = 4.5,
  reviewCount = 24,
  isNew = false,
  isBestseller = false,
  href
}: ProductCardProps) {

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

        {/* Quote Area - Replace Price */}
        <div className="text-sm">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-xs font-semibold text-gray-900 mb-1">
              Get best price on WhatsApp
            </p>
            <p className="text-xs text-gray-600 mb-2">
              GST invoice • Brand-authorized
            </p>
            <button 
              onClick={(e) => {
                e.preventDefault();
                const waLink = `https://wa.me/919898649362?text=${encodeURIComponent(
                  `Hi Usha Refrigeration, I'm interested in ${brand || 'Western'} ${category || 'Refrigerator'} – ${title} (${capacity || 'N/A'} L).\nLink: ${typeof window !== 'undefined' ? window.location.origin + href : href}\nCity: Anand, Gujarat\nPlease share today's best price and delivery time.`
                )}`;
                window.open(waLink, '_blank');
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-2 py-1.5 rounded text-xs font-medium transition-colors flex items-center justify-center space-x-1"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </button>
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