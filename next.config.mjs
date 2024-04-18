import withPlaiceholder from '@plaiceholder/next';
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true
};

export default withPlaiceholder(nextConfig);
