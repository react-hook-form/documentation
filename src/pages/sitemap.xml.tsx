import { GetServerSideProps } from "next"
import { getAllDocs } from "@/lib/docs"
import { SITE_URL } from "@/components/seo"

const STATIC_PATHS = [
  "/",
  "/get-started",
  "/docs",
  "/guides",
  "/ts",
  "/advanced-usage",
  "/faqs",
  "/integrations",
  "/migrate-v7-to-v8",
  "/dev-tools",
  "/form-builder",
  "/about-us",
  "/media",
  "/sponsors",
  "/resources",
  "/resources/3rd-party-bindings",
  "/resources/articles",
  "/resources/newsletters",
  "/resources/videos",
]

function generateSitemap(docPaths: Array<string>) {
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
  const docPaths = (await getAllDocs()).map((doc) => doc.slug)

  res.setHeader("Content-Type", "text/xml")
  res.write(generateSitemap(docPaths))
  res.end()

  return { props: {} }
}

export default function Sitemap() {
  return null
}
