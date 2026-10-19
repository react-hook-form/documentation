// Gives every h2–h4 a stable id (keeping `{#customId}` ids set by
// remark-custom-heading-id) and a `data-toc` label for the "On this page"
// rail. The label skips JSX such as <TypeText> and <Popup> so it reads as the
// heading's own words, e.g. "</> watch: <TypeText>…" becomes "watch".

type Node = {
  type: string
  tagName?: string
  value?: string
  properties?: Record<string, unknown>
  children?: Node[]
}

const HEADINGS = new Set(["h2", "h3", "h4"])

function textOf(node: Node): string {
  if (node.type === "text") return node.value ?? ""
  if (node.type !== "element" || !node.children) return ""
  return node.children.map(textOf).join("")
}

function labelOf(heading: Node) {
  return textOf(heading)
    .replace(/<\/>/g, "")
    .replace(/[:\s]+$/, "")
    .replace(/\s+/g, " ")
    .trim()
}

export function rehypeHeadingAnchors() {
  return (tree: Node) => {
    const used = new Set<string>()

    const walk = (node: Node) => {
      if (node.type === "element" && HEADINGS.has(node.tagName ?? "")) {
        const label = labelOf(node)
        const props = (node.properties ??= {})

        if (!props.id && label) {
          const base = label.replace(/[^a-zA-Z0-9]/g, "") || "section"
          let id = base
          for (let i = 1; used.has(id); i++) id = `${base}-${i}`
          props.id = id
        }
        if (typeof props.id === "string") used.add(props.id)
        if (label) props.dataToc = label
        return
      }
      node.children?.forEach(walk)
    }

    walk(tree)
  }
}
