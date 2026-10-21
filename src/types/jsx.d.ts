// @types/react 19 dropped the global `JSX` namespace, but @types/mdx (used for
// the MDXComponents map) still reads it. Alias it to `React.JSX` so MDX
// component props keep their types instead of silently becoming `any`.
import type { JSX as ReactJSX } from "react"

declare global {
  namespace JSX {
    type ElementType = ReactJSX.ElementType
    type Element = ReactJSX.Element
    type ElementClass = ReactJSX.ElementClass
    type IntrinsicElements = ReactJSX.IntrinsicElements
  }
}
