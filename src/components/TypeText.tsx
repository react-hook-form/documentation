import typographyStyles from "../styles/typography.module.css"

const TypeText = ({ children }) => {
  return <span className={typographyStyles.typeText}>{children}</span>
}

export default TypeText
