import { useRef } from "react"
import ClipBoard from "../ClipBoard"
import styles from "../CodeArea.module.css"
import copyClipBoard from "../utils/copyClipBoard"
import { CodeSandBoxLink } from "../CodeArea"

export const Pre = (props) => {
  const preRef = useRef<HTMLDivElement>(null)

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
        {props.codesandbox && <CodeSandBoxLink url={props.codesandbox} />}
      </div>
      <div ref={preRef}>{props.children}</div>
    </div>
  )
}
