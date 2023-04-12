const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // Ideally we support ["en", "es", "jp", "zh", "kr", "pt", "ru"], but translations are not all there
    locales: ["en"],
    defaultLocale: "en",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
}

module.exports = withBundleAnalyzer(nextConfig)
