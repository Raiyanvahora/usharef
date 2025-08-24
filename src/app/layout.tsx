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
import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://usha-refrigeration-anand.netlify.app'),
  title: 'Usha Refrigeration & Service-Anand | Western, Icemake, Frigoglass Dealer Gujarat',
  description: 'Leading supplier of commercial refrigeration equipment in Anand, Gujarat. Deep freezers, visi coolers, water coolers, ice machines. Western, Icemake, Frigoglass brands. Trusted by leading brands across Gujarat. આણંદ ગુજરાતમાં કોમર્શિયલ રેફ્રિજરેશન સાધનોના અગ્રણી સપ્લાયર.',
  keywords: 'commercial refrigeration gujarat, western deep freezer, icemake visi cooler, water cooler, ice machine, pastry counter, back bar chiller, anand, baroda, ahmedabad, vadodara, surat, rajkot, western refrigeration dealer, icemake distributor, frigoglass supplier, વેસ્ટર્ન ડીપ ફ્રીઝર, આઈસમેક વિઝી કૂલર, વોટર કૂલર ગુજરાત',
  authors: [{ name: 'Usha Refrigeration & Service' }],
  creator: 'Usha Refrigeration & Service',
  publisher: 'Usha Refrigeration & Service',
  openGraph: {
    title: 'Usha Refrigeration & Service-Anand | Western, Icemake, Frigoglass Dealer',
    description: 'Leading supplier of commercial refrigeration equipment in Gujarat. Deep freezers, visi coolers, water coolers. Trusted by leading brands. Service centers in Anand, Baroda, Ahmedabad.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Usha Refrigeration & Service',
    images: [
      {
        url: '/banners/60435acb-98b7-412c-b983-42433e438f72.png',
        width: 1200,
        height: 630,
        alt: 'Usha Refrigeration - Commercial Cooling Solutions'
      }
    ]
  },
  alternates: {
    canonical: 'https://usha-refrigeration-anand.netlify.app'
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
  robots: 'index, follow, max-image-preview:large',
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
        {/* Google Search Console verification */}
        {/* Uncomment and add your verification code below */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}
        <LocalBusinessSchema />
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