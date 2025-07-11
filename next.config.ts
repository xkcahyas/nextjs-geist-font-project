/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // You can set the port by using the PORT environment variable when running the dev server
  // For example: PORT=3000 npm run dev
  
  // Custom domain configuration
  env: {
    CUSTOM_DOMAIN: process.env.NEXT_PUBLIC_CUSTOM_DOMAIN,
    TRACKING_PATH: process.env.NEXT_PUBLIC_TRACKING_PATH,
  },
  
  // Support for custom domains
  async rewrites() {
    return [
      // Rewrite /home/[trackingId] to the new structure
      {
        source: '/home/:trackingId',
        destination: '/home/:trackingId',
      },
      // Rewrite /home/[trackingId]/results to the new structure
      {
        source: '/home/:trackingId/results',
        destination: '/home/:trackingId/results',
      },
      // Keep backward compatibility with old /track routes
      {
        source: '/track/:trackingId',
        destination: '/home/:trackingId',
      },
      {
        source: '/track/:trackingId/results',
        destination: '/home/:trackingId/results',
      },
    ];
  },
};

module.exports = nextConfig;
