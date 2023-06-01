import { Highlight } from "prism-react-renderer"
import { theme, lightTheme } from "./theme"
import { useTheme } from "next-themes"

const prism = {
  dark: theme,
  light: lightTheme,
}

function usePrismTheme() {
  const { theme } = useTheme()
  const lightModeTheme = prism.light
  const darkModeTheme = prism.dark || lightModeTheme
  const prismTheme = theme === "light" ? lightModeTheme : darkModeTheme

  return prismTheme
}

export const PrismSyntaxHighlight = ({ children, className }) => {
  const language = className.replace(/language-/gm, "")
  const currentTheme = usePrismTheme()

  return (
    <Highlight code={children} language={language} theme={currentTheme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.slice(0, -1).map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
