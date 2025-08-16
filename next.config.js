/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NETLIFY ? 'export' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true, // Completely disable Next.js image optimization for static serving
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
  generateBuildId: async () => {
    // Generate a unique build ID based on timestamp
    return `build-${Date.now()}`
  },
  // Headers are not compatible with static export, only include for non-static builds
  ...(process.env.NETLIFY ? {} : {
    headers: async () => {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-cache, no-store, must-revalidate',
            },
            {
              key: 'Pragma',
              value: 'no-cache',
            },
            {
              key: 'Expires',
              value: '0',
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
      ]
    }
  }),
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig 