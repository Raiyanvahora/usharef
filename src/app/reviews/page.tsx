'use client';

import React, { useState } from 'react';
import { Star, Send, CheckCircle } from 'lucide-react';

interface ReviewData {
  name: string;
  location: string;
  rating: number;
  review: string;
  product: string;
}

export default function ReviewsPage() {
  const [formData, setFormData] = useState<ReviewData>({
    name: '',
    location: '',
    rating: 5,
    review: '',
    product: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        location: '',
        rating: 5,
        review: '',
        product: ''
      });
    }, 3000);
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600">Your review has been submitted successfully. We appreciate your feedback!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Share Your Experience
          </h1>
          <p className="text-lg text-gray-600">
            Help others by sharing your experience with Usha Refrigeration
          </p>
        </div>

        {/* Existing Reviews Display */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">5.0</span>
              </div>
              <p className="text-gray-700 mb-4">
                &ldquo;Excellent service! My Western deep freezer has been working perfectly for 3 years. Usha team is very professional and reliable.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">R</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Rajesh Patel</p>
                  <p className="text-sm text-gray-600">Anand • Western Deep Freezer</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">5.0</span>
              </div>
              <p className="text-gray-700 mb-4">
                &ldquo;Best refrigeration dealer in Gujarat! Quick installation and great after-sales service. Highly recommend for commercial needs.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-semibold">M</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mukesh Shah</p>
                  <p className="text-sm text-gray-600">Vadodara • Icemake Visi Cooler</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">5.0</span>
              </div>
              <p className="text-gray-700 mb-4">
                &ldquo;Usha Refrigeration saved our restaurant business! Their Icemake visi cooler is energy efficient and keeps our products fresh.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-semibold">P</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Priya Restaurant</p>
                  <p className="text-sm text-gray-600">Ahmedabad • Ice Machine</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Form */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Write a Review</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Anand, Gujarat"
                />
              </div>
            </div>

            {/* Product */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product/Service *
              </label>
              <select
                required
                value={formData.product}
                onChange={(e) => setFormData(prev => ({ ...prev, product: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a product or service</option>
                <option value="Western Deep Freezer">Western Deep Freezer</option>
                <option value="Icemake Visi Cooler">Icemake Visi Cooler</option>
                <option value="Water Cooler">Water Cooler</option>
                <option value="Ice Machine">Ice Machine</option>
                <option value="Pastry Counter">Pastry Counter</option>
                <option value="Back Bar Chiller">Back Bar Chiller</option>
                <option value="Frigoglass Product">Frigoglass Product</option>
                <option value="Repair Service">Repair Service</option>
                <option value="Installation Service">Installation Service</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Rating *
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    className={`text-3xl transition-colors ${
                      star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    <Star className={`w-8 h-8 ${star <= formData.rating ? 'fill-current' : ''}`} />
                  </button>
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {formData.rating} star{formData.rating !== 1 ? 's' : ''}
                </span>
              </div>
            </div>

            {/* Review Text */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Review *
              </label>
              <textarea
                required
                rows={4}
                value={formData.review}
                onChange={(e) => setFormData(prev => ({ ...prev, review: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Share your experience with Usha Refrigeration..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </div>
              ) : (
                <div className="flex items-center">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Review
                </div>
              )}
            </button>
          </form>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-sm text-gray-600">
          <p>Your review will help other customers make informed decisions. Thank you for your feedback!</p>
        </div>
      </div>
    </div>
  );
}