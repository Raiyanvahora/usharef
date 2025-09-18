'use client';

import { useEffect } from 'react';

const GA_ID = 'G-6NMPXMLS3D';

export default function GoogleAnalyticsVerify() {
  useEffect(() => {
    // Method 1: Load gtag.js
    const script1 = document.createElement('script');
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script1.async = true;
    document.head.appendChild(script1);

    // Method 2: Initialize gtag
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `;
    document.head.appendChild(script2);

    // Log to verify it's loaded
    console.log('Google Analytics loaded with ID:', GA_ID);
  }, []);

  return null;
}