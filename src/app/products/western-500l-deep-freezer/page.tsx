import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Western 500L Deep Freezer Price Gujarat | ₹33,000 | Free Delivery',
  description: 'Western 500L deep freezer best price ₹33,000 in Gujarat. Hard top model WHF525H. Perfect for ice cream shops. 5 year compressor warranty. Free installation. EMI available. Call 9898649362.',
  keywords: 'western 500l deep freezer, WHF525H price, western 500 liter freezer gujarat, hard top deep freezer 500l, ice cream freezer 500 liter, western deep freezer dealer',
};

export default function Western500LPage() {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Western 500L Deep Freezer WHF525H",
    "image": "https://usharefrigerationandservice.com/products/western-500l.jpg",
    "description": "Western 500 Liter Hard Top Deep Freezer - Best for ice cream shops, restaurants, and supermarkets",
    "brand": {
      "@type": "Brand",
      "name": "Western Refrigeration"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://usharefrigerationandservice.com/products/western-500l-deep-freezer",
      "priceCurrency": "INR",
      "price": "33000",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Usha Refrigeration & Service"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "89"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      <section className="py-8">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-4">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="text-blue-600 hover:underline">Products</Link>
            <span className="mx-2">/</span>
            <span>Western 500L Deep Freezer</span>
          </nav>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Western WHF525H</h2>
                    <p className="text-gray-600">500 Liter Hard Top Deep Freezer</p>
                    <div className="mt-4 p-4 bg-blue-50 rounded">
                      <p className="text-sm">Actual product image</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="bg-gray-200 rounded p-4 text-center text-xs">
                      View {i}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h1 className="text-3xl font-bold mb-4">
                  Western 500L Deep Freezer - WHF525H
                </h1>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-yellow-500">★★★★★</div>
                  <span className="text-gray-600">4.8 (89 reviews)</span>
                  <span className="text-green-600 font-semibold">✓ In Stock</span>
                </div>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-green-600">₹33,000</div>
                  <div className="text-gray-500 line-through">MRP: ₹39,000</div>
                  <div className="text-red-600 font-semibold">You Save: ₹6,000 (15% OFF)</div>
                </div>

                <div className="bg-yellow-50 border border-yellow-300 rounded p-4 mb-6">
                  <p className="font-semibold">🔥 Limited Time Offer!</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>✅ Free Installation (Worth ₹2,000)</li>
                    <li>✅ Free Stabilizer (Worth ₹3,000)</li>
                    <li>✅ 5 Year Compressor Warranty</li>
                    <li>✅ EMI Starting ₹2,750/month</li>
                  </ul>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-semibold">Capacity</span>
                    <span>500 Liters</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-semibold">Type</span>
                    <span>Hard Top</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-semibold">Temperature</span>
                    <span>-18°C to -25°C</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-semibold">Power</span>
                    <span>280W</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-semibold">Dimensions</span>
                    <span>1655 x 820 x 850 mm</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="tel:9898649362" className="flex-1 bg-green-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-green-700">
                    📞 Call Now: 98986 49362
                  </a>
                  <a href="https://wa.me/919898649362?text=I want Western 500L Deep Freezer WHF525H" 
                     className="flex-1 bg-green-500 text-white py-3 rounded-lg text-center font-semibold hover:bg-green-600">
                    WhatsApp Inquiry
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Why Choose Western 500L Deep Freezer?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">❄️</div>
                  <h3 className="font-semibold mb-2">Superior Cooling</h3>
                  <p className="text-gray-600">Maintains -25°C even in 45°C ambient</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💪</div>
                  <h3 className="font-semibold mb-2">Heavy Duty</h3>
                  <p className="text-gray-600">Tropicalized compressor for Indian conditions</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <h3 className="font-semibold mb-2">Energy Efficient</h3>
                  <p className="text-gray-600">Low power consumption, saves electricity</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Ideal For:</h2>
              <ul className="grid md:grid-cols-2 gap-2">
                <li>✅ Ice Cream Parlors</li>
                <li>✅ Restaurants & Hotels</li>
                <li>✅ Supermarkets</li>
                <li>✅ Dairy Shops</li>
                <li>✅ Meat Shops</li>
                <li>✅ Frozen Food Storage</li>
                <li>✅ Catering Services</li>
                <li>✅ Sweet Shops</li>
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Delivery Available Across Gujarat</h2>
              <p className="text-gray-600">
                Free delivery in Anand, Vadodara, Ahmedabad, Surat, Rajkot, Bhavnagar, Nadiad, 
                and all major cities of Gujarat. Installation within 24 hours of delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}