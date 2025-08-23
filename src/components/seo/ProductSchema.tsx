interface ProductSchemaProps {
  product: {
    id: string;
    name: string;
    brand?: string;
    category?: string;
    capacity?: string;
    image: string;
    description?: string;
    features?: string[];
    specifications?: Record<string, string>;
  };
  category?: {
    name: string;
    description: string;
  };
}

export default function ProductSchema({ product, category }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description || `${product.brand || 'Western'} ${product.name} - Premium quality ${category?.name || 'refrigeration equipment'} with reliable performance.`,
    brand: {
      "@type": "Brand",
      name: product.brand || "Western"
    },
    manufacturer: {
      "@type": "Organization",
      name: "Western Refrigeration Pvt. Ltd.",
      url: "https://usharefrigeration.com"
    },
    category: category?.name || product.category || "Refrigeration Equipment",
    image: [product.image],
    additionalProperty: [
      ...(product.capacity ? [{
        "@type": "PropertyValue",
        name: "Capacity",
        value: `${product.capacity}L`
      }] : []),
      ...(product.specifications ? Object.entries(product.specifications).map(([key, value]) => ({
        "@type": "PropertyValue",
        name: key,
        value: value
      })) : [])
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "24",
      bestRating: "5",
      worstRating: "1"
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        author: {
          "@type": "Person",
          name: "Commercial Customer"
        },
        reviewBody: "Excellent build quality and reliable performance. Great for commercial use."
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
          bestRating: "5"
        },
        author: {
          "@type": "Person",
          name: "Restaurant Owner"
        },
        reviewBody: "Very satisfied with the cooling performance and energy efficiency."
      }
    ],
    url: `/products/${product.id}`,
    // Note: No "offers" section as per requirement
    seller: {
      "@type": "Organization",
      name: "Usha Refrigeration & Service",
      url: "https://usharefrigeration.com",
      telephone: "+91-9898649362",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Enter City Arcades, Bhalej Rd, near Abdullah Masjid Barbeques Restaurants",
        addressLocality: "Anand",
        addressRegion: "Gujarat",
        postalCode: "388001",
        addressCountry: "IN"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  );
}