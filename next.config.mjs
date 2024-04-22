import withPlaiceholder from '@plaiceholder/next';
/** @type {import('next').NextConfig} */

const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  reactStrictMode: false,
  swcMinify: true
};

export default withPlaiceholder(nextConfig);
