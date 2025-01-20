import type { ReactNode } from "react"
import typographyStyles from "../styles/typography.module.css"

const TypeText = ({
  children,
  pre = false,
}: {
  children: ReactNode
  pre: boolean
}) => {
  const Element = pre ? "pre" : "span"
  return <Element className={typographyStyles.typeText}>{children}</Element>
}

export default TypeText
