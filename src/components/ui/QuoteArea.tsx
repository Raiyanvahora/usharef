'use client';

import { useState } from 'react';
import { MessageCircle, Phone, Mail, Send } from 'lucide-react';

interface QuoteAreaProps {
  product: {
    id: string;
    name: string;
    brand?: string;
    category?: string;
    capacity?: string;
  };
  showForm?: boolean;
  className?: string;
}

const WHATSAPP_NUMBER = '919898649362';

export default function QuoteArea({ product, className = '' }: QuoteAreaProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [city, setCity] = useState('Anand, Gujarat');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pinCode: '',
    quantity: '1',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const buildWhatsAppLink = () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const message = `Hi Usha Refrigeration, I'm interested in ${product.brand || 'Western'} ${product.category || 'Refrigerator'} – ${product.name} (${product.capacity || 'N/A'} L).
Link: ${currentUrl}
City: ${city}
Please share today's best price and delivery time.`;
    
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const handleWhatsAppClick = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'whatsapp_click',
        model: product.name,
        liters: product.capacity,
        page: window.location.pathname
      });
    }
    
    window.open(buildWhatsAppLink(), '_blank');
  };

  const handleCallClick = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'call_click',
        model: product.name,
        liters: product.capacity,
        page: window.location.pathname
      });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = {
        ...formData,
        brand: product.brand || 'Western',
        category: product.category || 'Refrigerator',
        model: product.name,
        liters: product.capacity || 'N/A',
        pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        city
      };

      // Analytics tracking
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'quote_submit',
          model: product.name,
          liters: product.capacity,
          page: window.location.pathname
        });
      }

      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData)
      });

      if (response.ok) {
        alert('Quote request submitted successfully! We\'ll contact you soon.');
        setIsFormOpen(false);
        setFormData({ name: '', phone: '', pinCode: '', quantity: '1', notes: '' });
      } else {
        throw new Error('Failed to submit quote');
      }
    } catch (error) {
      console.error('Quote submission error:', error);
      alert('Sorry, there was an error submitting your quote. Please try WhatsApp instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Price Area - Replace with Quote CTA */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-4">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-900 mb-1">
            Get best price on WhatsApp
          </p>
          <p className="text-sm text-gray-600 mb-3">
            GST invoice • Brand-authorized • Fast delivery
          </p>
        </div>
        
        {/* City Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your City:
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your city"
          />
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp for Best Price</span>
          </button>
          
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${WHATSAPP_NUMBER}`}
              onClick={handleCallClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-1 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </a>
            
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-1 text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quote Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Request Quote
              </h3>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-xl font-bold"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4" data-netlify="true">
              {/* Hidden fields for Netlify Forms */}
              <input type="hidden" name="form-name" value="quote-request" />
              <input type="hidden" name="brand" value={product.brand || 'Western'} />
              <input type="hidden" name="category" value={product.category || 'Refrigerator'} />
              <input type="hidden" name="model" value={product.name} />
              <input type="hidden" name="liters" value={product.capacity || 'N/A'} />
              <input type="hidden" name="pageUrl" value={typeof window !== 'undefined' ? window.location.href : ''} />
              <input type="hidden" name="city" value={city} />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="10-digit mobile number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pin Code *
                </label>
                <input
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleInputChange}
                  pattern="[0-9]{6}"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="6-digit pin code"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <select
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {[1, 2, 3, 4, 5, 10, 15, 20].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Submitting...' : 'Submit Quote Request'}</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}