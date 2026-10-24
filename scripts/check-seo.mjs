/**
 * Audits the static HTML produced by `next build` for baseline SEO metadata
 * and broken internal links. Run through `pnpm seo:check` so the build exists.
 */
import { existsSync, readFileSync, readdirSync } from "node:fs"
import { dirname, join, relative } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..")
const PAGES_DIR = join(ROOT, ".next/server/pages")
const PUBLIC_DIR = join(ROOT, "public")
const ERROR_ROUTES = new Set(["/404", "/500"])
const failures = []

function getHtmlFiles(directory, files = []) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name)
    if (entry.isDirectory()) getHtmlFiles(file, files)
    else if (entry.name.endsWith(".html")) files.push(file)
  }
  return files
}

function routeFromFile(file) {
  const route = `/${relative(PAGES_DIR, file).replace(/\.html$/, "")}`
  return route === "/index" ? "/" : route.replace(/\/index$/, "")
}

function hasPublicTarget(pathname) {
  return existsSync(join(PUBLIC_DIR, pathname))
}

function report(route, message) {
  failures.push(`${route}: ${message}`)
}

if (!existsSync(PAGES_DIR)) {
  console.error("No production build found. Run `pnpm build` first.")
  process.exit(1)
}

const pages = new Map(
  getHtmlFiles(PAGES_DIR).map((file) => [
    routeFromFile(file),
    readFileSync(file, "utf8"),
  ])
)

for (const [route, html] of pages) {
  if (!ERROR_ROUTES.has(route)) {
    const title = html.match(/<title[^>]*>(.*?)<\/title>/)?.[1] ?? ""
    const description =
      html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? ""
    const canonicalCount = (html.match(/rel="canonical"/g) ?? []).length
    const h1Count = (html.match(/<h1[ >]/g) ?? []).length

    if (!title) report(route, "missing title")
    else if (title.length > 65)
      report(route, `title is ${title.length} characters (maximum 65)`)

    if (!description) report(route, "missing meta description")
    else if (description.length > 165)
      report(
        route,
        `meta description is ${description.length} characters (maximum 165)`
      )

    if (canonicalCount !== 1)
      report(route, `expected one canonical URL, found ${canonicalCount}`)
    if (h1Count !== 1) report(route, `expected one H1, found ${h1Count}`)

    for (const match of html.matchAll(
      /<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/g
    )) {
      try {
        JSON.parse(match[1])
      } catch {
        report(route, "contains invalid JSON-LD")
      }
    }
  }

  for (const match of html.matchAll(/href="((?:\/|#)[^"]*)"/g)) {
    const href = match[1].replaceAll("&amp;", "&")
    if (href.startsWith("/_next") || href.split(/[?#]/)[0].endsWith(".md")) {
      continue
    }

    const url = new URL(href, `https://local.test${route}`)
    const targetHtml = pages.get(url.pathname)

    if (!targetHtml && !hasPublicTarget(url.pathname)) {
      report(route, `broken internal link to ${url.pathname}`)
      continue
    }

    if (url.hash && targetHtml && !ERROR_ROUTES.has(url.pathname)) {
      const id = decodeURIComponent(url.hash.slice(1))
      if (!targetHtml.includes(`id="${id}"`)) {
        report(route, `broken anchor link to ${url.pathname}${url.hash}`)
      }
    }
  }
}

if (failures.length) {
  console.error(`SEO check failed with ${failures.length} problem(s):`)
  for (const failure of [...new Set(failures)]) console.error(`- ${failure}`)
  process.exit(1)
}

console.log(`SEO check passed for ${pages.size} static HTML pages.`)
