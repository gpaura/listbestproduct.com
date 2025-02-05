/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com", "i5.walmartimages.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/lists/electronics/smartphones",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
