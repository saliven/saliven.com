const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.scdn.co']
  }
};

module.exports = withContentlayer(nextConfig);
