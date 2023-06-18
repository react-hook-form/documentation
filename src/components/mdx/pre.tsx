import { useRef } from "react"
import ClipBoard from "../ClipBoard"
import styles from "../CodeArea.module.css"
import copyClipBoard from "../utils/copyClipBoard"
import { CodeSandBoxLink } from "../CodeSandbox"

export const Pre = (props) => {
  const preRef = useRef<HTMLDivElement>(null)
  const language =
    props?.children?.props?.className?.replace(/language-/gm, "") || ""

  const isJs = language === "javascript"
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div className={styles.buttonWrapper}>
        {props.copy && (
          <ClipBoard
            className={`${styles.button} ${styles.copyButton}`}
            onClick={() => {
              if (preRef.current?.innerText) {
                copyClipBoard(preRef.current.innerText)
              }
            }}
          />
        )}
        {props.sandbox && (
          <CodeSandBoxLink
            url={props.sandbox}
            isExpo={props.expo}
            isJS={isJs}
          />
        )}
      </div>
      <div ref={preRef}>{props.children}</div>
    </div>
  )
}
