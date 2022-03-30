import * as React from "react"
import Prism from "prismjs"
import * as styles from "./CodeArea.module.css"

export const CodeBlock = ({
  children,
  style,
}: {
  children: string
  style?: React.CSSProperties
}) => (
  <div className={styles.wrapper}>
    <pre className="raw-code language-javascript" style={style} tabIndex={0}>
      <code
        className="language-javascript"
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(children, Prism.languages.javascript),
        }}
      />
    </pre>
  </div>
)
