module.exports = {
  images: {
    domains: [
      "m.media-amazon.com",
      "i5.walmartimages.com",
      "pisces.bbystatic.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/amazon/:path*",
        destination: "https://amazon.com/:path*",
        permanent: true,
      },
      {
        source: "/walmart/:path*",
        destination: "https://walmart.com/:path*",
        permanent: true,
      },
    ];
  },
};
