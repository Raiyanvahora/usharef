'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { MessageCircle } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
  ];

  const whatsappNumber = '9898649362';
  const prefilledMessage = encodeURIComponent("Hi, I want to know about your refrigerators!");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`;

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <nav className="container mx-auto flex items-center justify-between h-full px-6">
        {/* Brand Logo/Name */}
        <Link 
          href="/" 
          className="flex items-center group select-none mr-6 pr-6 border-r border-[#E6E6E6]"
        >
          {mounted && (
            <div className={styles.brand}>
              <span>USHA</span> <span>REFRIGERATION</span>
            </div>
          )}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={styles.navLink}
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
            className={styles.chatButton}
            title="Chat with Us"
          >
            <MessageCircle className="w-5 h-5 text-green-600" />
            <span className={styles.chatTooltip}>Chat with Us</span>
          </Link>
          <Link 
            href="/products" 
            className="bg-primary-600 text-white rounded-full px-5 py-2 text-sm font-semibold shadow-md hover:bg-primary-700 transition-all duration-200 transform hover:-translate-y-0.5"
            style={{ 
              backgroundColor: '#1046D8',
              borderColor: '#1046D8'
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
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="border-t border-neutral-200 bg-white">
          <div className="container mx-auto py-4 px-6 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-neutral-200 space-y-3">
              <Link 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-green-600 hover:text-green-700 py-2"
                title="Chat with Us"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat with Us</span>
              </Link>
              <Link 
                href="/products" 
                className="block text-center bg-primary-600 text-white rounded-full px-5 py-2 text-sm font-semibold shadow-md hover:bg-primary-700 transition-all duration-200"
                style={{ 
                  backgroundColor: '#1046D8',
                  borderColor: '#1046D8'
                }}
                onClick={() => setMobileMenuOpen(false)}
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
