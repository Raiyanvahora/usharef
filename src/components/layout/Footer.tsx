import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#18244e] text-[#e5eaf3]">
      <div className="container px-4 md:px-8 xl:px-16">
        {/* Main Footer Content */}
        <div className="py-14">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16">
            {/* Brand Section */}
            <div className="flex-1 min-w-[220px] space-y-6">
              <div className="mb-2">
                <span className="text-2xl md:text-3xl font-extrabold tracking-wide text-white">Usha Refrigerators</span>
              </div>
              <p className="text-[#c7d0e2] leading-relaxed max-w-md text-base">
                Charotar&apos;s trusted refrigerator brand for over 10 years. Premium quality, energy-efficient refrigerators for every home.
              </p>
              <div className="flex space-x-4 mt-2">
                <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><FaFacebookF size={18} /></a>
                <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><FaInstagram size={18} /></a>
                <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><FaTwitter size={18} /></a>
                <a href="#" aria-label="YouTube" className="hover:text-white transition-colors"><FaYoutube size={18} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex-1 min-w-[180px] space-y-6">
              <h3 className="text-lg font-bold text-white mb-2">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/products" className="text-[#e5eaf3] hover:text-white hover:underline transition-colors font-medium">Our Products</Link>
                <Link href="/about" className="text-[#e5eaf3] hover:text-white hover:underline transition-colors font-medium">About Us</Link>
                <Link href="/service" className="text-[#e5eaf3] hover:text-white hover:underline transition-colors font-medium">Service</Link>
                <Link href="/contact" className="text-[#e5eaf3] hover:text-white hover:underline transition-colors font-medium">Contact</Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex-1 min-w-[220px] space-y-6">
              <h3 className="text-lg font-bold text-white mb-2">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-[#c7d0e2] font-bold">Owner</span>
                  <span className="text-white font-medium">Sabbir Vahora</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#c7d0e2] flex-shrink-0" />
                  <a href="tel:9898649362" className="text-white font-medium hover:underline">9898649362</a>
                  <span className="text-[#c7d0e2] text-sm">/</span>
                  <a href="tel:9898535735" className="text-white font-medium hover:underline">9898535735</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#c7d0e2] flex-shrink-0" />
                  <a href="mailto:usha_refrigeration001@yahoo.com" className="text-white font-medium hover:underline">sabbirvhora352@gmail.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#c7d0e2] flex-shrink-0" />
                  <span className="text-white font-medium">Entrcity Arcade, Nr. Abdullah Masjid, Barbeque Restaurant, Bhalej Road, Anand - 388001</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#21243b] mb-0" />

        {/* Bottom Footer */}
        <div className="py-5 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <p className="text-[#c7d0e2] text-sm text-left">&copy; 2024 Usha Refrigerators. All rights reserved.</p>
          <div className="flex space-x-6 text-sm md:justify-end">
            <Link href="/privacy" className="text-[#c7d0e2] hover:text-white hover:underline transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[#c7d0e2] hover:text-white hover:underline transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 