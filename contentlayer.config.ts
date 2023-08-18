import { defineDocumentType, makeSource } from "contentlayer/source-files"
import { remarkHeadingId } from "remark-custom-heading-id"
import remarkGfm from "remark-gfm"
import rehypeMdxCodeProps from "rehype-mdx-code-props"
import emoji from "remark-emoji"
import * as sidebar from "./src/components/Menu/MenuLinks"

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  contentType: "mdx",
  filePathPattern: "**/*.mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    sidebar: {
      type: "enum",
      options: [
        "apiLinks",
        "advancedLinks",
        "tsLinks",
        "faqLinks",
        "getStartedLinks",
      ],
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
    segment: {
      type: "list",
      resolve: (doc) => doc._raw.flattenedPath.split("/"),
    },
    pages: {
      type: "list",
      resolve: (doc) => sidebar[doc.sidebar] ?? [],
    },
  },
}))

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm, remarkHeadingId, emoji],
    rehypePlugins: [rehypeMdxCodeProps],
  },
})
