const { i18n } = require("./next-i18next.config")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
}

module.exports = withBundleAnalyzer(nextConfig)
