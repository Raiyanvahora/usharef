"use client";

import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Customer {
  filename: string;
}

const HappyCustomers: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Starting CSV fetch...");
    
    fetch("/happy_customers.csv", {
      headers: {
        'Accept': 'text/csv',
        'Cache-Control': 'no-cache'
      }
    })
      .then((res) => {
        console.log("CSV Response Status:", res.status);
        console.log("CSV Response OK:", res.ok);
        if (!res.ok) throw new Error(`Failed to fetch CSV: ${res.status}`);
        return res.text();
      })
      .then((csvText) => {
        console.log("CSV Content Length:", csvText.length);
        console.log("First 100 chars:", csvText.substring(0, 100));
        
        Papa.parse<Customer>(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            console.log("Parse Results:", {
              rows: results.data.length,
              fields: results.meta.fields,
              errors: results.errors
            });
            
            const filteredCustomers = results.data
              .filter((row) => row.filename && row.filename.trim() !== "");
            
            console.log("Filtered Customers:", filteredCustomers.length);
            setCustomers(filteredCustomers);
            setLoading(false);
          },
          error: (error: any) => {
            console.error("CSV Parse Error:", error);
            setError(`Failed to parse CSV: ${error.message}`);
            setLoading(false);
          }
        });
      })
      .catch((error) => {
        console.error("CSV Fetch Error:", error);
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
            spaceBetween={20}
            slidesPerView={2}
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
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            className="customer-carousel"
          >
            {customers.map((customer, idx) => {
              const imagePath = `/customerimages/${customer.filename}`;
              
              return (
                <SwiperSlide key={customer.filename + idx}>
                  <div className="aspect-square bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <img
                      src={imagePath}
                      alt={`Happy Customer ${idx + 1}`}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onLoad={() => console.log(`✓ Loaded: ${imagePath}`)}
                      onError={(e) => {
                        console.error(`✗ Failed to load: ${imagePath}`);
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="p-4 text-xs text-red-500 flex items-center justify-center h-full">Image not available</div>`;
                        }
                      }}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#1428A0] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#1428A0] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
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