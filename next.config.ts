import type { NextConfig } from "next"
import { withContentlayer } from "next-contentlayer"
import withBundleAnalyzer from "@next/bundle-analyzer"

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
}

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

export default bundleAnalyzer(withContentlayer(nextConfig))
