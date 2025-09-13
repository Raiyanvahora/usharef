/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NETLIFY ? 'export' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true, // Completely disable Next.js image optimization for static serving
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.js',
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize worker processes for development
  experimental: {
    workerThreads: false,
  },
  generateBuildId: async () => {
    // Generate a unique build ID based on timestamp
    return `build-${Date.now()}`
  },
  // SEO and performance optimizations
  productionBrowserSourceMaps: false,
  // Headers are not compatible with static export, only include for non-static builds
  ...(process.env.NETLIFY ? {} : {
    headers: async () => {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-DNS-Prefetch-Control',
              value: 'on',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-Frame-Options',
              value: 'SAMEORIGIN',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
          ],
        },
        {
          source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/_next/static/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/fonts/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ]
    }
  }),
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig 