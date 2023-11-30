/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BCKEND_URL: "https://default-20231130t023634-kim7wgrrqq-de.a.run.app",
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
