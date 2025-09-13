import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Deep Freezer Dealer Vadodara | Visi Cooler Vadodara | Best Prices',
  description: 'Top deep freezer & visi cooler dealer in Vadodara! Western, Icemake authorized. 500L freezer ₹34,000. Free delivery Vadodara, Alkapuri, Waghodia. Call 9898649362.',
  keywords: 'deep freezer vadodara, visi cooler vadodara, commercial refrigeration vadodara, freezer dealer vadodara, western dealer vadodara, icemake vadodara, refrigeration vadodara gujarat, deep freezer price vadodara, visi cooler shop vadodara, freezer repair vadodara, વડોદરા ડીપ ફ્રીઝર, વડોદરા વિઝી કૂલર, Baroda freezer dealer',
  openGraph: {
    title: 'Vadodara #1 Deep Freezer & Visi Cooler Dealer - Usha Refrigeration',
    description: 'Best commercial refrigeration dealer in Vadodara. Western & Icemake authorized. Serving all Vadodara areas.',
  }
};

export default function VadodaraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Vadodara's Trusted Deep Freezer & Visi Cooler Dealer
            </h1>
            <p className="text-xl mb-8">
              વડોદરામાં નંબર 1 કોમર્શિયલ રેફ્રિજરેશન સપ્લાયર | Same Day Delivery
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:9898649362" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call: 98986 49362
              </a>
              <a href="https://wa.me/919898649362?text=Hi, I need deep freezer in Vadodara" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold">
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas in Vadodara */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Serving All Areas of Vadodara (Baroda)</h2>
            
            {/* Area Coverage */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-purple-700">Central Vadodara</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Alkapuri</li>
                    <li>• Sayajigunj</li>
                    <li>• Raopura</li>
                    <li>• Mandvi</li>
                    <li>• Fatehgunj</li>
                    <li>• Navapura</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-purple-700">West Vadodara</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Race Course</li>
                    <li>• Kalali</li>
                    <li>• Atladara</li>
                    <li>• Tandalja</li>
                    <li>• Vasna Road</li>
                    <li>• Sama</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-purple-700">East Vadodara</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Waghodia Road</li>
                    <li>• Gotri</li>
                    <li>• Manjalpur</li>
                    <li>• Makarpura</li>
                    <li>• GIDC Makarpura</li>
                    <li>• Tarsali</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-purple-700">Nearby Areas</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Waghodia</li>
                    <li>• Padra</li>
                    <li>• Dabhoi</li>
                    <li>• Savli</li>
                    <li>• Halol</li>
                    <li>• Chhani</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Special Offers for Vadodara */}
            <div className="bg-purple-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-6">Special Offers for Vadodara Customers</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">🔥 Hot Deals on Deep Freezers</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ Western 300L Hard Top - <span className="line-through">₹30,000</span> <span className="text-red-600 font-bold">₹27,500</span></li>
                    <li>✅ Western 500L Glass Top - <span className="line-through">₹37,000</span> <span className="text-red-600 font-bold">₹34,000</span></li>
                    <li>✅ Icemake 400L Convertible - <span className="line-through">₹34,000</span> <span className="text-red-600 font-bold">₹31,000</span></li>
                    <li>✅ Blue Star 600L - <span className="line-through">₹45,000</span> <span className="text-red-600 font-bold">₹41,000</span></li>
                    <li>💰 Extra 5% off on 2+ units</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">🥤 Visi Cooler Best Prices</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ Icemake 320L Single Door - <span className="text-green-600 font-bold">₹21,000</span></li>
                    <li>✅ Western 650L Double Door - <span className="text-green-600 font-bold">₹36,500</span></li>
                    <li>✅ Frigoglass 450L Pepsi - <span className="text-green-600 font-bold">₹29,000</span></li>
                    <li>✅ Voltas 550L Triple Door - <span className="text-green-600 font-bold">₹43,000</span></li>
                    <li>🚚 FREE delivery in Vadodara city</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Solutions */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h2 className="text-2xl font-bold mb-6">Complete Solutions for Vadodara Businesses</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="font-semibold mb-2">Restaurants & Hotels</h3>
                  <p className="text-gray-600 text-sm mb-2">Popular in Alkapuri, Sayajigunj</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Vertical freezers</li>
                    <li>• Under-counter chillers</li>
                    <li>• Walk-in coolers</li>
                    <li>• Ice machines</li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="font-semibold mb-2">Supermarkets</h3>
                  <p className="text-gray-600 text-sm mb-2">High demand in Gotri, Race Course</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Display freezers</li>
                    <li>• Open chillers</li>
                    <li>• Island freezers</li>
                    <li>• Meat display units</li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="font-semibold mb-2">Ice Cream & Dairy</h3>
                  <p className="text-gray-600 text-sm mb-2">Serving Manjalpur, Waghodia Road</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Scooping freezers</li>
                    <li>• Milk coolers</li>
                    <li>• Curved glass freezers</li>
                    <li>• Eutectic freezers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">2 Hours</div>
                <p className="text-gray-600">Delivery in Vadodara City</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <p className="text-gray-600">Emergency Service</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                <p className="text-gray-600">Happy Customers in Vadodara</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10%</div>
                <p className="text-gray-600">Cheaper than Competition</p>
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="bg-gray-100 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-6">Vadodara Customer Reviews</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <p className="text-gray-700 mb-2">"Excellent service! Got 3 deep freezers for my supermarket in Gotri. Best prices in Vadodara."</p>
                  <p className="text-sm font-semibold">- Mehul Desai, Gotri Supermarket</p>
                  <div className="text-yellow-500">★★★★★</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-gray-700 mb-2">"Quick delivery to Waghodia. Western freezer working perfectly for 2 years now."</p>
                  <p className="text-sm font-semibold">- Restaurant Owner, Waghodia Road</p>
                  <div className="text-yellow-500">★★★★★</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-gray-700 mb-2">"વડોદરામાં બેસ્ટ ડીલર. ખૂબ જ સારી સર્વિસ અને સસ્તા ભાવ."</p>
                  <p className="text-sm font-semibold">- Ice Cream Parlor, Alkapuri</p>
                  <div className="text-yellow-500">★★★★★</div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">
                Get Instant Quote for Vadodara Delivery
              </h2>
              <p className="text-xl mb-6">
                Free Site Visit | Free Installation | GST Bills | EMI Options
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:9898649362" className="bg-white text-purple-800 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold">
                  📞 98986 49362
                </a>
                <a href="tel:9898535735" className="bg-white text-purple-800 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold">
                  📞 98985 35735
                </a>
              </div>
              <p className="mt-4 text-sm">
                Visit: Enter City Arcades, Bhalej Road, Anand (45 mins from Vadodara)
              </p>
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
            "@type": "Service",
            "name": "Deep Freezer & Visi Cooler Supply Vadodara",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Usha Refrigeration",
              "telephone": "+919898649362"
            },
            "areaServed": {
              "@type": "City",
              "name": "Vadodara",
              "sameAs": "https://en.wikipedia.org/wiki/Vadodara"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Commercial Refrigeration Products",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Deep Freezer",
                    "brand": "Western"
                  },
                  "price": "27500",
                  "priceCurrency": "INR"
                }
              ]
            }
          })
        }}
      />
    </div>
  );
}