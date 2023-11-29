/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BCKEND_URL: "https://chrome-pointer-406515.as.r.appspot.com",
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
