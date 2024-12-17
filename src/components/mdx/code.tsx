import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import { Highlight } from "prism-react-renderer"
import { useTheme } from "next-themes"
import { theme, lightTheme } from "./theme"

const prism = {
  dark: theme,
  light: lightTheme,
}

function usePrismTheme() {
  const { theme } = useTheme()
  const lightModeTheme = prism.light
  const darkModeTheme = prism.dark || lightModeTheme
  const prismTheme = theme === "light" ? lightModeTheme : darkModeTheme

  const [finalTheme, setFinalTheme] = useState(prismTheme)

  useEffect(() => {
    setFinalTheme(prismTheme)
  }, [prismTheme])

  return finalTheme
}

export const PrismSyntaxHighlight = ({
  children,
  className,
}: {
  children: ReactNode
  className: string
}) => {
  const language = className.replace(/language-/gm, "")

  const currentTheme = usePrismTheme()

  return (
    <Highlight
      code={(children as string).trim()}
      language={language}
      theme={currentTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, lineIndex) => {
            const { key: lineKey, ...lineProps } = getLineProps({
              line,
              key: lineIndex,
            })

            return (
              <div key={lineKey as number} {...lineProps}>
                {line.map((lineToken, linenTokenIndex) => {
                  const { key: lineTokenKey, ...lineTokenProps } =
                    getTokenProps({
                      token: lineToken,
                      key: linenTokenIndex,
                    })
                  return (
                    <span key={lineTokenKey as number} {...lineTokenProps} />
                  )
                })}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}
