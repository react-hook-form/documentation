import qino from "../"
import { docSchema } from "../schemas"

export const integrationCollection = qino.defineCollection({
  directory: "integrations",
  extension: ".mdx",
  schema: docSchema,
})
