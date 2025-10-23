const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "pbs.twimg.com"],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  experimental: {
    appDir: false, // pastikan tidak aktif jika pakai pages/
  },
});
