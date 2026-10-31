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
  // The sitemap reads content through qino at request time.
  outputFileTracingIncludes: {
    "/sitemap.xml": ["./src/content/**/*"],
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  async redirects() {
    const legacySite =
      "https://react-hook-form-website-git-leagcy-hook-form.vercel.app"
    // Locale prefixes from the old Gatsby site (English had no prefix).
    const lang = ":lang(zh|jp|kr|es|pt|ru)"

    return [
      {
        source: "/:path(migrate-v5-to-v6|migrate-v6-to-v7)",
        destination: `${legacySite}/:path`,
        permanent: true,
      },
      {
        source: "/:version(v5|v6)/:path*",
        destination: `${legacySite}/:version/:path*`,
        permanent: true,
      },
      // The API reference moved from /api/* to /docs/*; keep old backlinks alive.
      { source: "/api", destination: "/docs", permanent: true },
      { source: "/api/:path*", destination: "/docs/:path*", permanent: true },
      { source: `/${lang}`, destination: "/", permanent: true },
      { source: `/${lang}/api`, destination: "/docs", permanent: true },
      {
        source: `/${lang}/api/:path*`,
        destination: "/docs/:path*",
        permanent: true,
      },
      { source: `/${lang}/:path*`, destination: "/:path*", permanent: true },
    ]
  },
}

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

export default bundleAnalyzer(nextConfig)
