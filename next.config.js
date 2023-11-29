/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // BACKEND_URL: "https://ptops.xyz",
    BACKEND_URL: "https://chrome-pointer-406515.as.r.appspot.com",
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
