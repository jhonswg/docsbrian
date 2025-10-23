const { withContentlayer } = require("next-contentlayer");
const redirects = require("./next-redirects");

module.exports = withContentlayer({
  reactStrictMode: false,
  swcMinify: true,
  async redirects() {
    return await redirects();
  },
  images: {
    domains: ["images.unsplash.com", "pbs.twimg.com"],
  },
});
