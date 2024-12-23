import type { NextConfig } from "next"
import { withContentlayer } from "next-contentlayer"
import withBundleAnalyzer from "@next/bundle-analyzer"

const nextConfig: NextConfig = {
  eslint: {
    /**
     * Now eslint requires typecheck so we have to run build before executing lint
     * These check are performed via `.github/workflows/ci.yml` action
     *
     * @see https://github.com/react-hook-form/documentation/pull/1107
     */
    ignoreDuringBuilds: true,
  },
  typescript: {
    /** @see `eslint.ignoreDuringBuilds` comment */
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
}

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

export default bundleAnalyzer(withContentlayer(nextConfig))
