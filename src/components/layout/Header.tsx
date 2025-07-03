'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Refrigerators', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Service', href: '/service' },
    { name: 'Contact', href: '/contact' },
  ];

  // WhatsApp number and message (encoded)
  const whatsappNumber = '9898649362';
  const prefilledMessage = encodeURIComponent("Hi, I want to know about your refrigerators!");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-neutral-200 shadow-sm bg-white ${scrolled ? 'glass-effect' : ''}`}>
      <nav className="container mx-auto flex items-center justify-between h-20 px-8">
        {/* Brand Name Only */}
        <Link href="/" className="flex items-center group select-none">
          <span className="text-2xl md:text-3xl font-extrabold tracking-wide text-primary-700 font-montserrat">USHA REFRIGERATION</span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 font-montserrat">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-neutral-700 hover:text-primary-600 font-medium px-3 py-1 transition-colors hover:underline underline-offset-8"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-600 hover:text-green-700 font-medium transition-colors p-2 rounded-full hover:bg-green-50"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </Link>
          <Link 
            href="/products" 
            className="bg-primary-600 text-white rounded-full px-6 py-3 text-sm font-bold shadow-md hover:bg-primary-700 transition-all duration-200 font-montserrat border-2 border-primary-600"
            style={{ 
              color: 'white !important',
              backgroundColor: '#1e40af',
              borderColor: '#1e40af'
            }}
          >
            Explore Products
          </Link>
        </div>
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center text-neutral-700 hover:text-primary-600 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>
      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="glass-effect border-t border-neutral-200">
          <div className="container mx-auto py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-lg font-medium text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-montserrat hover:underline underline-offset-8"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-neutral-200 space-y-3">
              <Link 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center flex items-center justify-center text-green-600 hover:text-green-700 border-green-600 hover:border-green-700 py-3"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </Link>
              <Link 
                href="/products" 
                className="bg-primary-600 text-white rounded-full px-6 py-3 text-sm font-bold shadow-md hover:bg-primary-700 transition-all duration-200 font-montserrat w-full text-center flex items-center justify-center border-2 border-primary-600"
                style={{ 
                  color: 'white !important',
                  backgroundColor: '#1e40af',
                  borderColor: '#1e40af'
                }}
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
