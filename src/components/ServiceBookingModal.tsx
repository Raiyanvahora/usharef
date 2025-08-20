'use client';

import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';

interface ServiceBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceBookingModal({ isOpen, onClose }: ServiceBookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    productType: '',
    message: ''
  });

  const productTypes = [
    'Visi Cooler',
    'Deep Freezer',
    'Water Cooler',
    'Water Dispenser',
    'Pastry Counter'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.mobile || !formData.productType) {
      alert('Please fill in all required fields (Name, Mobile, Product Type)');
      return;
    }

    // Store in localStorage for record keeping
    const existingRequests = JSON.parse(localStorage.getItem('serviceRequests') || '[]');
    const newRequest = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    localStorage.setItem('serviceRequests', JSON.stringify([...existingRequests, newRequest]));
    
    // Create WhatsApp message
    const whatsappNumber = '9898649362'; // Your WhatsApp number
    const message = `New Service Request:
    
Name: ${formData.name}
Mobile: ${formData.mobile}
Product: ${formData.productType}
Issue: ${formData.message || 'Not specified'}
    
Please assist me with this service request.`;
    
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappLink, '_blank');
    
    // Reset and close modal
    setFormData({
      name: '',
      mobile: '',
      productType: '',
      message: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-full p-2 sm:p-4">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={onClose}
        />

        {/* Modal panel */}
        <div className="relative w-full max-w-sm sm:max-w-md p-4 sm:p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg sm:rounded-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900">Book a Service</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors p-1"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-3 sm:space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                  placeholder="Enter your name"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label htmlFor="mobile" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  required
                  pattern="[0-9]{10}"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                  placeholder="Enter 10-digit mobile number"
                />
              </div>

              {/* Product Type */}
              <div>
                <label htmlFor="productType" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Product Type *
                </label>
                <select
                  id="productType"
                  name="productType"
                  required
                  value={formData.productType}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                >
                  <option value="">Select a product</option>
                  {productTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Message / Issue (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none text-sm sm:text-base"
                  placeholder="Describe your issue"
                />
              </div>

              {/* WhatsApp Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base mt-4 sm:mt-6"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Send via WhatsApp</span>
              </button>
            </form>
        </div>
      </div>
    </div>
  );
}