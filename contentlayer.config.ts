import { defineDocumentType, makeSource } from "contentlayer2/source-files"
import { remarkHeadingId } from "remark-custom-heading-id"
import remarkGfm from "remark-gfm"
import rehypeMdxCodeProps from "rehype-mdx-code-props"
import emoji from "remark-emoji"
import * as sidebar from "./src/components/Menu/MenuLinks"
import { rehypeHeadingAnchors } from "./src/components/logic/rehypeHeadingAnchors"
import { rehypeTipsSections } from "./src/components/logic/rehypeTipsSections"
import type { Pages } from "./src/types/types"

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  contentType: "mdx",
  filePathPattern: "**/*.mdx",
  fields: {
    title: { type: "string", required: true },
    seoTitle: { type: "string", required: false },
    description: { type: "string", required: true },
    metaDescription: { type: "string", required: false },
    sidebar: {
      type: "enum",
      options: [
        "apiLinks",
        "advancedLinks",
        "tsLinks",
        "faqLinks",
        "getStartedLinks",
        "integrationLinks",
        "migrateV7ToV8Links",
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

    /**
     * Can't define value different from primitives, so hardcoding the correct type
     * @see https://github.com/contentlayerdev/contentlayer/issues/149
     */
    segment: {
      type: "string[]" as "list",
      resolve: (doc) => doc._raw.flattenedPath.split("/"),
    },
    pages: {
      type: "json",
      resolve: (doc) => {
        // added explicit type casting to keep track of this data structure
        // in case in the future contentlayer will support values different than primitives
        return sidebar[doc.sidebar] as unknown as Pages
      },
    },
  },
}))

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm, remarkHeadingId, emoji],
    rehypePlugins: [
      rehypeMdxCodeProps,
      rehypeHeadingAnchors,
      rehypeTipsSections,
    ],
  },
})
