'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Award, 
  Users, 
  MapPin, 
  Zap,
  Shield,
  Heart,
  ChevronRight,
  CheckCircle,
  Star,
  Building2,
  UserCheck
} from 'lucide-react';

export default function About() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const stats = [
    { icon: <Building2 className="w-8 h-8" />, number: "25+", label: "Years of Excellence", color: "text-blue-600" },
    { icon: <Users className="w-8 h-8" />, number: "50,000+", label: "Happy Customers", color: "text-green-600" },
    { icon: <MapPin className="w-8 h-8" />, number: "100+", label: "Service Points", color: "text-purple-600" },
    { icon: <Award className="w-8 h-8" />, number: "15+", label: "Industry Awards", color: "text-orange-600" }
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality First",
      description: "Every product undergoes rigorous testing to ensure superior performance and longevity"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description: "Continuously advancing refrigeration technology for better efficiency and user experience"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Customer Care",
      description: "Dedicated support team ensuring satisfaction at every step of your journey with us"
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Trust & Reliability",
      description: "Building lasting relationships through consistent quality and dependable service"
    }
  ];

  const timeline = [
    { year: "1998", title: "Company Founded", description: "Started with a vision to revolutionize refrigeration in India" },
    { year: "2005", title: "First Manufacturing Plant", description: "Established state-of-the-art facility in Gujarat" },
    { year: "2010", title: "National Expansion", description: "Extended operations across major Indian cities" },
    { year: "2015", title: "Innovation Award", description: "Recognized for energy-efficient cooling technology" },
    { year: "2020", title: "Digital Transformation", description: "Launched smart refrigeration solutions" },
    { year: "2024", title: "Sustainability Leader", description: "Achieved carbon-neutral manufacturing" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center animate-on-scroll">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cooling India Since 1998
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              From a small workshop in Anand to becoming Charotar&apos;s most trusted refrigeration brand, 
              we&apos;ve been keeping families happy with reliable cooling solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products" 
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Explore Products
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-xl p-6 text-center animate-on-scroll hover:shadow-2xl transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${stat.color} mb-4 flex justify-center`}>{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story: Built on Trust, Powered by Innovation
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  What started as a small refrigeration repair shop in Anand has grown into one of 
                  Gujarat&apos;s most trusted brands. Our founder, driven by a passion for quality and 
                  customer satisfaction, laid the foundation for what Usha Refrigeration is today.
                </p>
                <p className="text-lg">
                  Over the years, we&apos;ve expanded our product range, embraced new technologies, and 
                  built a network of dealers and service centers across the region. But our core 
                  values remain unchanged: Quality, Reliability, and Customer First.
                </p>
                <p className="text-lg">
                  Today, we&apos;re proud to be the cooling partner for thousands of homes, shops, and 
                  businesses across Charotar and beyond.
                </p>
              </div>
            </div>
            <div className="relative animate-on-scroll">
              <div className="grid grid-cols-2 gap-4">
                <Image 
                  src="/customerimages/IMG-20250701-WA0045.jpg" 
                  alt="Our facility" 
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg w-full h-auto"
                  loading="lazy"
                />
                <Image 
                  src="/customerimages/IMG-20250701-WA0050.jpg" 
                  alt="Our team" 
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg mt-8 w-full h-auto"
                  loading="lazy"
                />
                <Image 
                  src="/customerimages/IMG-20250701-WA0055.jpg" 
                  alt="Manufacturing" 
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg -mt-4 w-full h-auto"
                  loading="lazy"
                />
                <Image 
                  src="/customerimages/IMG-20250701-WA0060.jpg" 
                  alt="Quality testing" 
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg mt-4 w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey Through the Years
            </h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } animate-on-scroll`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-1 md:px-12">
                    <div className={`bg-white rounded-lg shadow-lg p-6 ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}>
                      <div className="text-blue-600 font-bold text-2xl mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 my-4 md:my-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Families Trust Usha Refrigeration
                </h2>
                <ul className="space-y-4">
                  {[
                    "25+ years of proven reliability and trust",
                    "Comprehensive warranty and after-sales support",
                    "Energy-efficient products that save money",
                    "Wide service network across Charotar region",
                    "Competitive prices without compromising quality",
                    "Expert guidance to choose the right product"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="animate-on-scroll">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <div className="text-5xl font-bold mb-2">99%</div>
                  <div className="text-xl mb-4">Customer Satisfaction Rate</div>
                  <div className="text-yellow-400 flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-current" />
                    ))}
                  </div>
                  <p className="text-blue-100">
                    Based on 5000+ customer reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Usha Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of satisfied customers who trust us for their cooling needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              Browse Products
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/service" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Book a Service
            </Link>
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}