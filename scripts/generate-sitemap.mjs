import { writeFileSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, "..")

const { allDocs } = await import("../.contentlayer/generated/index.mjs")

const SITE_URL = "https://react-hook-form.com"

const staticPages = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/docs", priority: "0.9", changefreq: "weekly" },
  { path: "/dev-tools", priority: "0.7", changefreq: "monthly" },
  { path: "/form-builder", priority: "0.7", changefreq: "monthly" },
  { path: "/about-us", priority: "0.5", changefreq: "monthly" },
  { path: "/media", priority: "0.4", changefreq: "monthly" },
  { path: "/migrate-v6-to-v7", priority: "0.5", changefreq: "monthly" },
  { path: "/resources/articles", priority: "0.6", changefreq: "weekly" },
  { path: "/resources/videos", priority: "0.6", changefreq: "weekly" },
  { path: "/resources/newsletters", priority: "0.5", changefreq: "monthly" },
  {
    path: "/resources/3rd-party-bindings",
    priority: "0.6",
    changefreq: "monthly",
  },
]

const docPages = allDocs.map((doc) => ({
  path: doc.slug,
  priority: "0.8",
  changefreq: "weekly",
}))

const allPages = [...staticPages, ...docPages]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`

const outputPath = join(rootDir, "public", "sitemap.xml")
writeFileSync(outputPath, xml, "utf-8")
console.log(`sitemap generated → ${outputPath}`)
