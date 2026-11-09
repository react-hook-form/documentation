import { compile } from "@mdx-js/mdx"
import { remarkHeadingId } from "remark-custom-heading-id"
import remarkGfm from "remark-gfm"
import rehypeMdxCodeProps from "rehype-mdx-code-props"
import emoji from "remark-emoji"
import { rehypeHeadingAnchors } from "@/components/logic/rehypeHeadingAnchors"
import { rehypeTipsSections } from "@/components/logic/rehypeTipsSections"

/** Compiles MDX to a function body for `runSync` on the client. */
export async function compileMdx(source: string) {
  const file = await compile(source, {
    outputFormat: "function-body",
    remarkPlugins: [remarkGfm, remarkHeadingId, emoji],
    rehypePlugins: [
      rehypeMdxCodeProps,
      rehypeHeadingAnchors,
      rehypeTipsSections,
    ],
  })
  return String(file)
}
