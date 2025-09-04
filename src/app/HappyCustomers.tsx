"use client";

import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Swiper styles imported in globals.css

interface Customer {
  filename: string;
}

const HappyCustomers: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/happy_customers.csv", {
      headers: {
        'Accept': 'text/csv',
        'Cache-Control': 'no-cache'
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch CSV: ${res.status}`);
        return res.text();
      })
      .then((csvText) => {
        
        Papa.parse<Customer>(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const filteredCustomers = results.data
              .filter((row) => row.filename && row.filename.trim() !== "");
            
            setCustomers(filteredCustomers);
            setLoading(false);
          },
          error: (error: Error) => {
            setError(`Failed to parse CSV: ${error.message}`);
            setLoading(false);
          }
        });
      })
      .catch((error) => {
        setError(`Failed to load CSV: ${error.message}`);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-[#F5F7FA]">
        <div className="text-center py-8 text-gray-500">Loading customers...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-[#F5F7FA]">
        <div className="text-center py-8">
          <div className="text-red-500 font-semibold mb-2">Error loading customers</div>
          <div className="text-sm text-gray-600">{error}</div>
        </div>
      </section>
    );
  }

  if (!customers.length) {
    return (
      <section className="py-16 bg-[#F5F7FA]">
        <div className="text-center py-8 text-gray-500">No customer images found.</div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1428A0]">
            Our Happy Customers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
            See what our satisfied customers have to say about their Usha refrigerators
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={12}
            slidesPerView={3}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: false,
            }}
            loop={true}
            speed={800}
            effect="slide"
            grabCursor={true}
            centeredSlides={false}
            breakpoints={{
              480: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 7,
                spaceBetween: 30,
              },
            }}
            className="customer-carousel"
          >
            {customers.map((customer, idx) => {
              const imagePath = `/customerimages/${customer.filename}`;
              
              return (
                <SwiperSlide key={customer.filename + idx}>
                  <div className="aspect-square bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <Image
                      src={imagePath}
                      alt={`Happy Customer ${idx + 1}`}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onLoad={() => {}}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="p-2 md:p-4 text-xs text-red-500 flex items-center justify-center h-full">Image not available</div>`;
                        }
                      }}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#1428A0] rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <svg className="w-4 h-4 md:w-6 md:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="swiper-button-next-custom absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#1428A0] rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <svg className="w-4 h-4 md:w-6 md:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Customer Reviews */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#1428A0]">Customer Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
              </div>
              <p className="text-gray-700 mb-4">&ldquo;Excellent service! My Western deep freezer has been working perfectly for 3 years. Usha team is very professional and reliable.&rdquo;</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">R</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Rajesh Patel</p>
                  <p className="text-sm text-gray-600">Anand</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
              </div>
              <p className="text-gray-700 mb-4">&ldquo;Best refrigeration dealer in Gujarat! Quick installation and great after-sales service. Highly recommend for commercial needs.&rdquo;</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-semibold">M</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mukesh Shah</p>
                  <p className="text-sm text-gray-600">Vadodara</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
              </div>
              <p className="text-gray-700 mb-4">&ldquo;Usha Refrigeration saved our restaurant business! Their Icemake visi cooler is energy efficient and keeps our products fresh.&rdquo;</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-semibold">P</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Priya Restaurant</p>
                  <p className="text-sm text-gray-600">Ahmedabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            Join thousands of satisfied customers who trust Usha for their refrigeration needs
          </p>
        </div>
      </div>

      <style jsx>{`
        .customer-carousel .swiper-pagination {
          bottom: -50px !important;
        }
        
        .customer-carousel .swiper-pagination-bullet {
          background: #1428A0 !important;
          opacity: 0.3 !important;
          transition: all 0.3s ease !important;
        }
        
        .customer-carousel .swiper-pagination-bullet-active {
          opacity: 1 !important;
          transform: scale(1.2) !important;
        }
        
        .customer-carousel .swiper-slide {
          height: auto !important;
          transition: transform 0.3s ease !important;
        }
        
        .customer-carousel:hover .swiper-slide {
          transform: scale(0.98) !important;
        }
        
        .customer-carousel .swiper-slide-active {
          transform: scale(1.02) !important;
        }
        
        .customer-carousel .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
      `}</style>
    </section>
  );
};

export default HappyCustomers; 