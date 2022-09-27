/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "external-content.duckduckgo.com"
    ]
  }
}

module.exports = nextConfig
