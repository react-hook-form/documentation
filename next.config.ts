import type { NextConfig } from "next"
import withBundleAnalyzer from "@next/bundle-analyzer"

const nextConfig: NextConfig = {
  typescript: {
    /**
     * Type checks run separately via `pnpm typecheck:ci` in `.github/workflows/ci.yml`
     *
     * @see https://github.com/react-hook-form/documentation/pull/1107
     */
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/migrate-v6-to-v7",
        destination:
          "https://react-hook-form-website-git-leagcy-hook-form.vercel.app/migrate-v6-to-v7",
        permanent: true,
      },
    ]
  },
}

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

export default bundleAnalyzer(nextConfig)
