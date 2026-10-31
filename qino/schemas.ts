import { z } from "zod"

const sidebarSchema = z.enum([
  "apiLinks",
  "advancedLinks",
  "tsLinks",
  "faqLinks",
  "getStartedLinks",
  "integrationLinks",
  "migrateV7ToV8Links",
])

export type Sidebar = z.infer<typeof sidebarSchema>

export const docSchema = z.object({
  title: z.string(),
  seoTitle: z.string(),
  description: z.string(),
  metaDescription: z.string().optional(),
  sidebar: sidebarSchema,
})
