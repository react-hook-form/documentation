import type { ReactNode } from "react"
import typographyStyles from "../styles/typography.module.css"

const TypeText = ({ children }: { children: ReactNode }) => {
  return <span className={typographyStyles.typeText}>{children}</span>
}

export default TypeText
