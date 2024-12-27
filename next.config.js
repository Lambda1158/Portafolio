/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: { unoptimazed: true },
};

module.exports = nextConfig;
