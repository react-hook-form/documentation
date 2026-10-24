type Node = {
  type: string
  tagName?: string
  name?: string
  attributes?: unknown[]
  properties?: Record<string, unknown>
  children?: Node[]
}

function isTipsHeading(node: Node) {
  return (
    node.type === "element" &&
    node.tagName === "h3" &&
    node.properties?.dataToc === "Tips"
  )
}

function startsNextSection(node: Node) {
  return (
    node.type === "element" && (node.tagName === "h2" || node.tagName === "h3")
  )
}

/**
 * Groups each `### Tips` section into the Tips MDX component. Keeping this as
 * a transform means existing Markdown stays simple and every API page gets the
 * same presentation automatically.
 */
export function rehypeTipsSections() {
  return (tree: Node) => {
    if (!tree.children) return

    for (let index = 0; index < tree.children.length; index++) {
      if (!isTipsHeading(tree.children[index])) continue

      let end = index + 1
      while (
        end < tree.children.length &&
        !startsNextSection(tree.children[end])
      ) {
        end++
      }

      const children = tree.children.splice(index, end - index)
      tree.children.splice(index, 0, {
        type: "mdxJsxFlowElement",
        name: "Tips",
        attributes: [],
        children,
      })
    }
  }
}
