import * as React from "react"
import { createPortal } from "react-dom"

export const ShadowRoot: React.FC<JSX.IntrinsicElements["div"]> = ({
  children,
  ...rest
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [shadowRoot, setShadowRoot] = React.useState<ShadowRoot>()

  React.useEffect(() => {
    setShadowRoot(ref.current?.attachShadow({ mode: "open" }))
  }, [])

  return (
    <div ref={ref} {...rest}>
      {shadowRoot && createPortal(children, shadowRoot as any)}
    </div>
  )
}
