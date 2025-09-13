import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Deep Freezer Dealer in Anand | Visi Cooler Anand | Usha Refrigeration',
  description: 'Best deep freezer dealer in Anand! Western, Icemake, Frigoglass authorized dealer. 500L deep freezer ₹35,000. Same day delivery. Call 9898649362 for instant quote.',
  keywords: 'deep freezer anand, visi cooler anand, commercial refrigeration anand, western dealer anand, icemake dealer anand, freezer shop anand, refrigeration anand gujarat, deep freezer price anand, visi cooler price anand, freezer repair anand, આણંદ ડીપ ફ્રીઝર, આણંદ વિઝી કૂલર',
  openGraph: {
    title: 'Deep Freezer & Visi Cooler Dealer in Anand - Usha Refrigeration',
    description: 'Anand\'s #1 commercial refrigeration dealer. Western & Icemake authorized. Best prices guaranteed!',
    images: ['/banners/anand-store.jpg'],
  }
};

export default function AnandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              #1 Deep Freezer & Visi Cooler Dealer in Anand
            </h1>
            <p className="text-xl mb-8">
              આણંદમાં સૌથી ભરોસાપાત્ર રેફ્રિજરેશન ડીલર | Western & Icemake Authorized Dealer
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:9898649362" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: 98986 49362
              </a>
              <Link href="/products" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Usha Refrigeration in Anand?</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <MapPin className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Presence in Anand</h3>
                <p className="text-gray-600">
                  Located at Enter City Arcades, Bhalej Road, near Abdullah Masjid. 
                  Serving Anand, Kheda, Nadiad, Petlad, Borsad, and surrounding areas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Clock className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Same Day Delivery</h3>
                <p className="text-gray-600">
                  Quick delivery across Anand district. Installation within 24 hours. 
                  Emergency service available for restaurants and shops.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <CheckCircle className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Best Prices in Anand</h3>
                <p className="text-gray-600">
                  Guaranteed lowest prices in Anand. Special discounts for bulk orders. 
                  EMI available. GST bills provided.
                </p>
              </div>
            </div>

            {/* Popular Products in Anand */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h2 className="text-2xl font-bold mb-6">Most Popular Products in Anand</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Deep Freezers (Most Sold in Anand)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ Western 300L Hard Top - ₹28,000 (Best for small shops)</li>
                    <li>✅ Western 500L Glass Top - ₹35,000 (Ice cream parlors)</li>
                    <li>✅ Icemake 400L Convertible - ₹32,000 (Multi-purpose)</li>
                    <li>✅ Blue Star 200L Chest - ₹25,000 (Dairy products)</li>
                    <li>✅ Voltas 600L Deep Freezer - ₹42,000 (Supermarkets)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Visi Coolers (High Demand)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ Icemake 320L Single Door - ₹22,000 (Soft drinks)</li>
                    <li>✅ Western 650L Double Door - ₹38,000 (Beverages)</li>
                    <li>✅ Frigoglass 450L - ₹30,000 (Coca Cola cooler)</li>
                    <li>✅ Blue Star 550L Triple Door - ₹45,000 (Large stores)</li>
                    <li>✅ Pepsi Cooler 400L - ₹28,000 (Exclusive design)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-blue-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-6">We Serve All Areas in and Around Anand</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Anand City</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>V V Nagar</li>
                    <li>Vallabh Vidyanagar</li>
                    <li>Karamsad</li>
                    <li>Bakrol</li>
                    <li>Gamdi</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Kheda District</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Nadiad</li>
                    <li>Kheda</li>
                    <li>Kapadvanj</li>
                    <li>Mahemdavad</li>
                    <li>Kathlal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Nearby Towns</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Petlad</li>
                    <li>Borsad</li>
                    <li>Sojitra</li>
                    <li>Tarapur</li>
                    <li>Umreth</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Industrial Areas</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>GIDC Karamsad</li>
                    <li>GIDC V U Nagar</li>
                    <li>Vitthal Udyognagar</li>
                    <li>Chikhodra GIDC</li>
                    <li>Anand Agriculture University</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Customer Testimonials */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">What Anand Customers Say</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4">
                    &ldquo;Bought Western 500L deep freezer for my ice cream parlor in V V Nagar. 
                    Excellent service and best price in Anand!&rdquo;
                  </p>
                  <p className="font-semibold">- Rajesh Patel, V V Nagar</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4">
                    &ldquo;Usha Refrigeration provided 3 visi coolers for my supermarket in Karamsad. 
                    Quick delivery and installation. Highly recommended!&rdquo;
                  </p>
                  <p className="font-semibold">- Amit Shah, Karamsad</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4">
                    &ldquo;Best dealer in Anand for commercial refrigeration. Genuine products and 
                    24/7 service support. Very satisfied!&rdquo;
                  </p>
                  <p className="font-semibold">- Dairy Farm Owner, Bakrol</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">
                Get Best Price for Deep Freezer & Visi Cooler in Anand
              </h2>
              <p className="text-xl mb-6">
                Free Delivery | Free Installation | 1 Year Warranty | EMI Available
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:9898649362" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">
                  📞 Call: 98986 49362
                </a>
                <a href="https://wa.me/919898649362" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold">
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Usha Refrigeration - Anand",
            "description": "Leading deep freezer and visi cooler dealer in Anand, Gujarat",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Enter City Arcades, Bhalej Road",
              "addressLocality": "Anand",
              "addressRegion": "Gujarat",
              "postalCode": "388001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "22.5645",
              "longitude": "72.9289"
            },
            "telephone": "+919898649362",
            "openingHours": "Mo-Sa 09:00-20:00",
            "priceRange": "₹₹",
            "servesCuisine": ["Anand", "Kheda", "Nadiad", "V V Nagar", "Petlad", "Borsad"],
            "hasMap": "https://maps.google.com/?q=Usha+Refrigeration+Anand"
          })
        }}
      />
    </div>
  );
}