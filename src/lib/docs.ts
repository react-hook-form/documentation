import { docsTree } from "../../qino/trees/docs"
import { integrationCollection } from "../../qino/collections/integrations"
import * as pages from "../../qino/items/pages"
import type { z } from "zod"
import type { docSchema } from "../../qino/schemas"

type Source = "docs" | "integrations" | "page"

type Entry = z.infer<typeof docSchema> & { markdown: string }

export type Doc = Entry & {
  slug: string
  source: Source
  qinoSlug: string
}

export type Breadcrumb = { href: string; name: string }

function toDoc(
  // Strip qino's `_meta` and `raw` (full source) from the doc.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { _meta, raw, ...entry }: Entry & { _meta: unknown; raw: string },
  source: Source,
  qinoSlug: string,
  slug: string
) {
  return { ...entry, slug, source, qinoSlug }
}

export async function getAllDocs() {
  const [docs, integrations, items] = await Promise.all([
    docsTree.getEntries(),
    integrationCollection.getEntries(),
    Promise.all(Object.values(pages).map((page) => page.getEntry())),
  ])

  return [
    ...items.map((entry) => {
      const qinoSlug = entry._meta.fileName.replace(/\.mdx$/, "")
      return toDoc(entry, "page", qinoSlug, `/${qinoSlug}`)
    }),
    ...integrations.map((entry) =>
      toDoc(
        entry,
        "integrations",
        entry._meta.slug,
        `/integrations/${entry._meta.slug}`
      )
    ),
    ...docs.map((entry) =>
      toDoc(entry, "docs", entry._meta.slug, `/docs/${entry._meta.slug}`)
    ),
  ]
}

/** Ancestors of a doc, excluding the doc itself. */
export async function getBreadcrumbs(doc: Doc) {
  switch (doc.source) {
    case "docs": {
      const ancestors = await docsTree.getAncestorNodes(doc.qinoSlug)
      return [
        // `/docs` is a TSX page, not a content entry.
        { href: "/docs", name: "API" },
        ...ancestors.map((node) => ({
          href: `/docs/${node.slug}`,
          name: node.title,
        })),
      ]
    }
    case "integrations": {
      const { title } = await pages.integrationsPage.getEntry()
      return [{ href: "/integrations", name: title }]
    }
    case "page":
      return []
  }
}
