'use client';

import React, { useState } from 'react';
import { 
  Wrench, 
  Shield, 
  Clock, 
  Phone, 
  CheckCircle,
  Zap,
  Thermometer,
  Settings,
  Calendar,
  MapPin,
  AlertCircle
} from 'lucide-react';
import ServiceBookingModal from '@/components/ServiceBookingModal';

export default function ServicePage() {
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Repair & Maintenance",
      description: "Expert repair services for all types of refrigeration equipment",
      features: [
        "Same-day emergency repairs",
        "Certified technicians",
        "Genuine spare parts",
        "Service warranty"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Annual Maintenance Contract",
      description: "Comprehensive AMC packages for worry-free operation",
      features: [
        "Regular preventive maintenance",
        "Priority service calls",
        "Discounted spare parts",
        "24/7 support helpline"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Installation Services",
      description: "Professional installation of new refrigeration equipment",
      features: [
        "Site assessment",
        "Expert installation",
        "Testing & commissioning",
        "Operation training"
      ]
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Gas Charging & Refilling",
      description: "Refrigerant gas refilling and leak detection services",
      features: [
        "Leak detection & repair",
        "Eco-friendly refrigerants",
        "Pressure testing",
        "Performance optimization"
      ]
    }
  ];

  const serviceTypes = [
    "Visi Cooler Service",
    "Deep Freezer Repair",
    "Water Cooler Maintenance",
    "Water Dispenser Service",
    "Pastry Counter Repair",
    "Commercial Refrigerator Service"
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Response",
      description: "24-hour service guarantee"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Certified Technicians",
      description: "Trained & experienced professionals"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Genuine Parts",
      description: "Original manufacturer parts only"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Service Warranty",
      description: "90-day warranty on repairs"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Refrigeration Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Expert repair and maintenance for all your cooling equipment
            </p>
            <button
              onClick={() => setIsServiceModalOpen(true)}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Service Now
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete refrigeration solutions from installation to maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment We Service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Equipment We Service
            </h2>
            <p className="text-lg text-gray-600">
              Specialized service for all types of commercial refrigeration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Usha Refrigeration & Service
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Service Coverage Area
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We provide prompt service across Charotar region including:
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {["Anand", "Nadiad", "V.V. Nagar", "Petlad", "Borsad", "Khambhat"].map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Emergency Service Available
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">24/7 Emergency hotline</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Response within 4 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 font-semibold">Call: +91 98765 43210</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Refrigeration Service?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book a service appointment today and keep your equipment running efficiently
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsServiceModalOpen(true)}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Schedule Service
            </button>
            <a
              href="tel:+919876543210"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Service Booking Modal */}
      <ServiceBookingModal 
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
      />
    </div>
  );
}