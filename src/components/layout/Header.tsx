'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { MessageCircle, MapPin } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Refrigerators', href: '/products', icon: null },
    { name: 'About Us', href: '/about', icon: null },
    { name: 'Service', href: '/service', icon: null },
    { name: 'Location', href: 'https://maps.google.com/?q=Usha+Refrigeration+%26+A.C,+Enter+city+Arcades,+Bhalej+Rd,+near+Abdullah+Masjid+Barbeques+Restaurants,+Anand,+Gujarat+388001', icon: MapPin, external: true },
  ];

  const whatsappNumber = '9898649362';
  const prefilledMessage = encodeURIComponent("Hi, I want to know about your refrigerators!");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`;

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        {/* Brand Logo/Name */}
        <Link 
          href="/" 
          className="flex items-center group select-none mr-3 sm:mr-6 pr-3 sm:pr-6 border-r border-[#E6E6E6]"
        >
          {mounted && (
            <div className={styles.brand}>
              <span className={styles.brandPrimary}>USHA</span>
            </div>
          )}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href === '/products' && pathname.startsWith('/products'));
            if (item.external) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.navLink}
                >
                  {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                  {item.name}
                </a>
              );
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
              >
                {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
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
            className={styles.ctaButton}
          >
            Explore Products
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary-600 transition-colors duration-200"
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
        <div className="border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 space-y-3">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href === '/products' && pathname.startsWith('/products'));
              if (item.external) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-base font-medium py-3 px-4 rounded-lg transition-all duration-200 text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                    {item.name}
                  </a>
                );
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center text-base font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50 font-semibold' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-gray-200 space-y-3">
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
                className="block text-center bg-blue-600 text-white rounded-lg px-5 py-3 text-sm font-semibold hover:bg-blue-700 transition-all duration-200"
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
