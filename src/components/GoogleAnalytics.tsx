'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const GA_MEASUREMENT_ID = 'G-6NMPXMLS3D';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (pathname && typeof window !== 'undefined' && (window as any).gtag) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname,
        debug_mode: process.env.NODE_ENV === 'development',
      });
    }
  }, [pathname, mounted]);

  // Don't render anything on server
  if (!mounted) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />
    </>
  );
}