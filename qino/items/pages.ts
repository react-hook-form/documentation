import qino from "../"
import { docSchema } from "../schemas"

export const advancedUsagePage = qino.defineItem({
  file: "advanced-usage.mdx",
  schema: docSchema,
})

export const faqsPage = qino.defineItem({
  file: "faqs.mdx",
  schema: docSchema,
})

export const getStartedPage = qino.defineItem({
  file: "get-started.mdx",
  schema: docSchema,
})

export const integrationsPage = qino.defineItem({
  file: "integrations.mdx",
  schema: docSchema,
})

export const migrateV7ToV8Page = qino.defineItem({
  file: "migrate-v7-to-v8.mdx",
  schema: docSchema,
})

export const tsPage = qino.defineItem({
  file: "ts.mdx",
  schema: docSchema,
})
