import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import VersionCheck from '../components/VersionCheck';
import ServiceWorkerUnregister from '../components/ServiceWorkerUnregister';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';
import EmailOptins from '../components/EmailOptins';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  title: 'Usha Refrigeration-Anand | Commercial Refrigeration Equipment',
  description: 'Leading supplier of commercial refrigeration equipment in Anand, Gujarat. Freezers, coolers, water dispensers, pastry counters. Western, Icemake, Frigoglass, Blue Star brands.',
  keywords: 'commercial refrigeration, freezers, coolers, water dispensers, Anand Gujarat, Western refrigeration, Icemake, Frigoglass, Blue Star',
  authors: [{ name: 'Usha Refrigeration' }],
  creator: 'Usha Refrigeration',
  publisher: 'Usha Refrigeration',
  openGraph: {
    title: 'Usha Refrigeration-Anand | Commercial Refrigeration Equipment',
    description: 'Leading supplier of commercial refrigeration equipment in Anand, Gujarat.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Usha Refrigeration'
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/favicon.svg', sizes: '180x180', type: 'image/svg+xml' }
    ]
  },
  robots: 'index, follow',
  other: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={`${inter.className || 'font-sans'} antialiased`}>
        <ServiceWorkerUnregister />
        <VersionCheck />
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
        <EmailOptins />
      </body>
    </html>
  );
} 