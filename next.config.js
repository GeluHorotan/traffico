/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
