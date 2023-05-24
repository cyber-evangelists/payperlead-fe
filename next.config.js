/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  rewrites: async () => [
    {
      source: '/api/:slug*',
      // destination: 'http://141.136.36.126/betterboiler/:slug*',
      destination: 'http://127.0.0.1:8000/:slug*',
    },
  ],
}

module.exports = nextConfig
