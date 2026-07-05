import { GetServerSideProps } from "next"
import { allDocs } from "contentlayer/generated"
import { SITE_URL } from "@/components/seo"

const STATIC_PATHS = [
  "/",
  "/get-started",
  "/docs",
  "/ts",
  "/advanced-usage",
  "/faqs",
  "/migrate-v7-to-v8",
  "/dev-tools",
  "/form-builder",
  "/about-us",
  "/media",
  "/resources/3rd-party-bindings",
  "/resources/articles",
  "/resources/newsletters",
  "/resources/videos",
]

function generateSitemap() {
  const docPaths = allDocs.map((doc) => doc.slug)
  const paths = Array.from(new Set([...STATIC_PATHS, ...docPaths]))

  const urls = paths
    .map(
      (path) => `  <url>
    <loc>${SITE_URL}${path}</loc>
  </url>`
    )
    .join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/xml")
  res.write(generateSitemap())
  res.end()

  return { props: {} }
}

export default function Sitemap() {
  return null
}
