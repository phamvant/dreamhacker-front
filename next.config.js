/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "nextlanding.rdev.pro",
      },
    ],
  },
};

module.exports = nextConfig;
