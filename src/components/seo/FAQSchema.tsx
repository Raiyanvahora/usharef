'use client';

import { useEffect } from 'react';

const FAQSchema = () => {
  useEffect(() => {
    // Voice search optimization - Add natural language queries
    const voiceSearchMeta = document.createElement('meta');
    voiceSearchMeta.name = 'voice-search-keywords';
    voiceSearchMeta.content = 'where to buy deep freezer near me, best visi cooler shop in gujarat, freezer repair service near me, commercial refrigeration dealer contact number';
    document.head.appendChild(voiceSearchMeta);
  }, []);

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the price of 500 liter deep freezer in Gujarat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The price of 500 liter deep freezer in Gujarat starts from ₹34,000 for Western brand and ₹32,000 for Icemake. We offer the best prices in Anand, Vadodara, Ahmedabad, Surat, and Rajkot. EMI options available. Call 9898649362 for instant quote."
        }
      },
      {
        "@type": "Question",
        "name": "Which is the best deep freezer brand in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Western Refrigeration, Icemake, Blue Star, and Voltas are the best deep freezer brands in India. Western is known for durability, Icemake for energy efficiency, Blue Star for cooling performance. We are authorized dealers for all major brands in Gujarat."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between hard top and glass top deep freezer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hard top deep freezers are more energy efficient and maintain temperature better, ideal for ice cream storage. Glass top freezers provide product visibility, perfect for retail display. Hard top costs ₹2000-3000 less than glass top models."
        }
      },
      {
        "@type": "Question",
        "name": "How much electricity does a commercial deep freezer consume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 500L commercial deep freezer consumes 3-4 units per day (₹20-30 daily). Energy-efficient models like Western and Icemake use advanced compressors that reduce consumption by 30%. Proper maintenance further reduces electricity bills."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide installation service for deep freezers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide FREE installation service across Gujarat including Anand, Vadodara, Ahmedabad, Surat, Rajkot. Our technicians will deliver, install, and demonstrate the equipment. Installation is done within 24 hours of purchase."
        }
      },
      {
        "@type": "Question",
        "name": "What is the warranty on Western deep freezers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Western deep freezers come with 1 year comprehensive warranty and 5 years compressor warranty. Extended warranty options available. We provide 24/7 service support across Gujarat. Genuine spare parts always available."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get deep freezer on EMI in Gujarat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, EMI options available on all deep freezers and visi coolers. 0% interest for 3-6 months. Documents required: Aadhar, PAN, and bank statement. Approval within 30 minutes. Available for amounts above ₹20,000."
        }
      },
      {
        "@type": "Question",
        "name": "Which visi cooler is best for soft drinks shop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For soft drinks, Icemake 320L or Western 400L visi coolers are best. They have adjustable shelves, LED lighting, and maintain 2-8°C temperature. Pepsi and Coca-Cola branded coolers also available. Prices start from ₹22,000."
        }
      },
      {
        "@type": "Question",
        "name": "Do you supply to restaurants and hotels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in bulk supply to restaurants, hotels, supermarkets across Gujarat. Special corporate rates, bulk discounts, and AMC packages available. We've supplied to 500+ restaurants in Anand, Vadodara, Ahmedabad."
        }
      },
      {
        "@type": "Question",
        "name": "What is the delivery time in Gujarat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Same day delivery in Anand, next day delivery in Vadodara, Ahmedabad, Surat, Rajkot. 2-3 days for other Gujarat cities. FREE delivery on orders above ₹25,000. Emergency delivery available for urgent requirements."
        }
      },
      {
        "@type": "Question",
        "name": "કયા બ્રાન્ડના ડીપ ફ્રીઝર સારા છે?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "વેસ્ટર્ન, આઈસમેક, બ્લુ સ્ટાર અને વોલ્ટાસ બેસ્ટ બ્રાન્ડ છે. અમે ગુજરાતમાં authorized dealer છીએ. આણંદ, વડોદરા, અમદાવાદ, સુરત, રાજકોટમાં સર્વિસ ઉપલબ્ધ. 9898649362 પર કોલ કરો."
        }
      },
      {
        "@type": "Question",
        "name": "How to choose the right size deep freezer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For small shops: 200-300L, Medium shops: 400-500L, Large stores: 600L+. Ice cream parlors need glass top, meat shops need hard top. Consider daily stock, space available, and budget. We provide free consultation."
        }
      },
      {
        "@type": "Question",
        "name": "What is convertible freezer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Convertible freezer can switch between freezer (-18°C) and cooler (2-8°C) modes. Ideal for seasonal businesses. Western and Icemake convertible models available from ₹32,000. Perfect for shops with varying storage needs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you buy old freezers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer exchange deals on old freezers. Get up to ₹8,000 off on new purchase. Old freezer should be in working condition. Exchange value depends on brand, capacity, and condition. Free pickup service available."
        }
      },
      {
        "@type": "Question",
        "name": "What is the maintenance cost of commercial freezers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Annual maintenance costs ₹3,000-5,000 including gas charging, cleaning, and minor repairs. AMC packages available from ₹2,500/year covering 4 services. Regular maintenance increases life by 5+ years and reduces electricity consumption."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData)
        }}
      />
      
      {/* Hidden content for SEO with natural language queries */}
      <div className="sr-only" aria-hidden="true">
        <h2>Frequently Asked Questions - Voice Search Optimized</h2>
        <div>
          <p>Hey Google, where can I buy deep freezer near me in Gujarat?</p>
          <p>OK Google, what is the price of visi cooler in Anand?</p>
          <p>Alexa, find commercial refrigeration dealer in Vadodara</p>
          <p>Show me best deep freezer shop in Ahmedabad</p>
          <p>I need freezer repair service in Surat</p>
          <p>Find Western refrigeration dealer contact number</p>
          <p>Which shop sells ice cream freezer in Rajkot?</p>
          <p>Tell me deep freezer price in Gujarat</p>
        </div>
      </div>
    </>
  );
};

export default FAQSchema;