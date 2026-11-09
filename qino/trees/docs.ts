import qino from "../"
import { docSchema } from "../schemas"

export const docsTree = qino.defineTree({
  directory: "docs",
  extension: ".mdx",
  titleField: "title",
  schema: docSchema,
})
