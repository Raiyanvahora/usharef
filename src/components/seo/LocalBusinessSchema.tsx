export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://usharefrigerationandservice.com/#business",
    name: "Usha Refrigeration & Service-Anand",
    alternateName: "ઉષા રેફ્રિજરેશન એન્ડ સર્વિસ",
    description: "Gujarat's No.1 commercial refrigeration dealer serving Anand, Vadodara, Ahmedabad, Surat, Rajkot. Authorized dealer for Western Deep Freezer, Icemake Visi Cooler, Frigoglass, Blue Star. Best prices, 24/7 service, genuine spare parts. ગુજરાતમાં કોમર્શિયલ રેફ્રિજરેશન સાધનોના અગ્રણી સપ્લાયર.",
    url: "https://usharefrigerationandservice.com",
    logo: "https://usharefrigerationandservice.com/logo/usha-logo.png",
    image: [
      "https://usharefrigerationandservice.com/banners/60435acb-98b7-412c-b983-42433e438f72.png"
    ],
    telephone: "+91-9898649362",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Enter City Arcades, Bhalej Rd, near Abdullah Masjid Barbeques Restaurants",
      addressLocality: "Anand",
      addressRegion: "Gujarat",
      postalCode: "388001",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.5645",
      longitude: "72.9289"
    },
    openingHours: [
      "Mo-Sa 09:00-20:00"
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9898649362",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi", "Gujarati"]
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9898535735",
        contactType: "sales",
        availableLanguage: ["English", "Hindi", "Gujarati"]
      }
    ],
    owner: {
      "@type": "Person",
      name: "Sabbir Vahora"
    },
    foundingDate: "2014",
    serviceArea: [
      {
        "@type": "AdministrativeArea",
        name: "Anand, Gujarat"
      },
      {
        "@type": "AdministrativeArea", 
        name: "Vadodara, Gujarat"
      },
      {
        "@type": "AdministrativeArea",
        name: "Ahmedabad, Gujarat"
      },
      {
        "@type": "AdministrativeArea",
        name: "Surat, Gujarat"
      },
      {
        "@type": "AdministrativeArea",
        name: "Rajkot, Gujarat"
      },
      {
        "@type": "AdministrativeArea",
        name: "Bhavnagar, Gujarat"
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial Refrigeration Equipment",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Convertible Freezer & Cooler",
          description: "Multi-function refrigeration units for commercial use"
        },
        {
          "@type": "OfferCatalog",
          name: "Deep Freezer",
          description: "Hard Top, Glass Top, Scooping deep freezers for commercial storage"
        },
        {
          "@type": "OfferCatalog",
          name: "Chest Freezer",
          description: "Large capacity chest freezers for bulk storage"
        },
        {
          "@type": "OfferCatalog",
          name: "Eutectic Freezer",
          description: "Advanced eutectic plate freezing technology"
        },
        {
          "@type": "OfferCatalog",
          name: "Freezer on Wheel (FOW)",
          description: "Mobile freezing solutions for commercial use"
        },
        {
          "@type": "OfferCatalog", 
          name: "Visi Cooler",
          description: "Glass door display coolers for beverages and products"
        },
        {
          "@type": "OfferCatalog",
          name: "Vertical Freezer / Vertical Cooler", 
          description: "Space-saving vertical refrigeration units"
        },
        {
          "@type": "OfferCatalog",
          name: "Super Market Cooler",
          description: "Large capacity cooling solutions for supermarkets"
        },
        {
          "@type": "OfferCatalog",
          name: "Pastry Cabinet / Confectionary Cabinet",
          description: "Temperature-controlled display for bakery and confectionary"
        },
        {
          "@type": "OfferCatalog",
          name: "Back Bar Chiller",
          description: "Under-counter cooling solutions for restaurants and bars"
        },
        {
          "@type": "OfferCatalog",
          name: "Ice Maker / Ice Machine",
          description: "Commercial ice making equipment and cube machines"
        },
        {
          "@type": "OfferCatalog",
          name: "Water Cooler",
          description: "SS Water Cooler, PCS Water Cooler - stainless steel and plastic body variants"
        }
      ]
    },
    brand: [
      {
        "@type": "Brand",
        name: "Western Refrigeration Pvt. Ltd."
      },
      {
        "@type": "Brand", 
        name: "Icemake"
      },
      {
        "@type": "Brand",
        name: "Frigoglass"
      },
      {
        "@type": "Brand",
        name: "Usha Refrigeration & Air Conditioning"
      }
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Refrigeration Installation & Service",
          description: "Professional installation, maintenance and repair services for commercial refrigeration equipment"
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Gujarat, India"
        }
      }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "150",
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
          name: "Local Business Owner"
        },
        reviewBody: "Excellent service and quality products. Usha Refrigeration has been our trusted partner for all refrigeration needs."
      }
    ],
    sameAs: [
      "https://www.google.com/maps/place/Usha+Refrigeration+%26+A.C/@22.5645,72.9289"
    ]
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