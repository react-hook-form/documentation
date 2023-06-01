import withMDX from "@next/mdx"
import { remarkHeadingId } from "remark-custom-heading-id"
import remarkGfm from "remark-gfm"
import rehypeMdxCodeProps from "rehype-mdx-code-props"

import withBundleAnalyzer from "@next/bundle-analyzer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
}

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

export default bundleAnalyzer(
  withMDX({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [remarkGfm, remarkHeadingId],
      rehypePlugins: [rehypeMdxCodeProps],
      // If you use `MDXProvider`, uncomment the following line.
      providerImportSource: "@mdx-js/react",
    },
  })(nextConfig)
)
