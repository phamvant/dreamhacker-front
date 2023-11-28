/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_URL: "https://ptops.xyz",
  },
  images: {
    remotePatterns: [
      {
        hostname: "nextlanding.rdev.pro",
      },
    ],
  },
};

module.exports = nextConfig;
