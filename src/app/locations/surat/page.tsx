import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deep Freezer Surat | Visi Cooler Dealer Surat | Western Icemake',
  description: 'Top deep freezer dealer in Surat! Western & Icemake authorized. Best prices in Adajan, Vesu, City Light, Varachha. 500L ₹32,000. Free delivery. Call 9898649362.',
  keywords: 'deep freezer surat, visi cooler surat, commercial refrigeration surat, freezer dealer surat, western surat, icemake surat, deep freezer price surat, visi cooler adajan, freezer vesu, સુરત ડીપ ફ્રીઝર, સુરત વિઝી કૂલર',
};

export default function SuratPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Surat&apos;s Trusted Deep Freezer & Visi Cooler Supplier
          </h1>
          <p className="text-xl mb-8">સુરતમાં બેસ્ટ રેફ્રિજરેશન ડીલર | Diamond City&apos;s #1 Choice</p>
          <a href="tel:9898649362" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold">
            📞 Call: 98986 49362
          </a>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Coverage Areas in Surat</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {['Adajan', 'Vesu', 'City Light', 'Varachha', 'Katargam', 'Athwa', 'Althan', 'Piplod', 
              'Ghod Dod Road', 'Ring Road', 'VIP Road', 'Dumas', 'Parle Point', 'Majura Gate', 
              'Udhna', 'Sachin'].map(area => (
              <div key={area} className="bg-white p-4 rounded shadow text-center">
                <p className="font-semibold">{area}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Surat Special Offers</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li>✅ Western 500L Deep Freezer - ₹32,000</li>
              <li>✅ Icemake 650L Visi Cooler - ₹35,000</li>
              <li>✅ Blue Star Chest Freezer - ₹38,000</li>
              <li>✅ Voltas Display Cooler - ₹28,000</li>
            </ul>
            <p className="mt-4 text-center">
              <strong>Free Delivery in Surat | Installation Within 4 Hours</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}