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
import FAQSchema from '../components/seo/FAQSchema';
import GoogleAnalytics from '../components/GoogleAnalytics';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://usharefrigerationandservice.com'),
  title: 'Usha Refrigeration Anand | #1 Commercial Refrigeration Dealer Gujarat | Western, Icemake, Frigoglass',
  description: 'Gujarat का No.1 commercial refrigeration supplier! ✅ Western Deep Freezer ✅ Icemake Visi Cooler ✅ Ice Machines ✅ Best Prices ✅ 24/7 Service in Anand, Vadodara, Ahmedabad, Surat, Rajkot. Call 9898649362. ગુજરાતમાં સર્વોત્તમ રેફ્રિજરેશન સાધનો અને સેવા.',
  keywords: 'commercial refrigeration gujarat, deep freezer dealer anand, visi cooler supplier gujarat, ice machine dealer vadodara, western refrigeration authorized dealer, icemake dealer gujarat, frigoglass distributor gujarat, blue star deep freezer, voltas chest freezer, haier visi cooler, 300 liter deep freezer, 500 liter deep freezer price, 650 liter visi cooler, restaurant freezer gujarat, hotel refrigeration equipment, ice cream parlor freezer, supermarket refrigeration, grocery store freezer, bakery display counter, sweet shop display cooler, dairy farm milk cooler, medical store refrigerator, deep freezer repair service, visi cooler repair near me, 24 hour refrigeration service, freezer installation service, deep freezer anand vadodara ahmedabad surat rajkot, visi cooler nadiad kheda bharuch, freezer bhavnagar gandhinagar mehsana, best deep freezer for ice cream shop, western 500 liter deep freezer price, icemake visi cooler 650 liter, hard top vs glass top freezer, energy efficient commercial freezer, second hand deep freezer gujarat, deep freezer on rent vadodara, freezer emi options gujarat, કોમર્શિયલ રેફ્રિજરેશન ગુજરાત, ડીપ ફ્રીઝર આણંદ, વિઝી કૂલર વડોદરા, वेस्टर्न डीप फ्रीजर, आइसमेक विज़ी कूलर',
  authors: [{ name: 'Usha Refrigeration & Service' }],
  creator: 'Usha Refrigeration & Service',
  publisher: 'Usha Refrigeration & Service',
  openGraph: {
    title: 'Gujarat No.1 Commercial Refrigeration Dealer - Usha Refrigeration Anand',
    description: 'Best prices on Western Deep Freezer, Icemake Visi Cooler, Ice Machines in Gujarat! 24/7 Service across Anand, Vadodara, Ahmedabad, Surat. Call 9898649362 for instant quote.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Usha Refrigeration & Service',
    images: [
      {
        url: '/banners/60435acb-98b7-412c-b983-42433e438f72.png',
        width: 1200,
        height: 630,
        alt: 'Usha Refrigeration Gujarat - Western Deep Freezer, Icemake Visi Cooler, Commercial Refrigeration Equipment'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gujarat No.1 Commercial Refrigeration Dealer - Usha Refrigeration',
    description: 'Best prices on Western Deep Freezer, Icemake Visi Cooler, Ice Machines in Gujarat! 24/7 Service. Call 9898649362',
    images: ['/banners/60435acb-98b7-412c-b983-42433e438f72.png'],
  },
  alternates: {
    canonical: 'https://usharefrigerationandservice.com'
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

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2567788320301397');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
          src="https://www.facebook.com/tr?id=2567788320301397&ev=PageView&noscript=1"
          alt=""
          />
        </noscript>
        
        <LocalBusinessSchema />
        <FAQSchema />
      </head>
      <body className={`${inter.className || 'font-sans'} antialiased`}>
        {/* Google Analytics Component */}
        <GoogleAnalytics />
        
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