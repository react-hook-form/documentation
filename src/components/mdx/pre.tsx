import type { DetailedHTMLProps, HTMLAttributes } from "react"
import { isValidElement, useRef } from "react"
import ClipBoard from "../ClipBoard"
import styles from "../CodeArea.module.css"
import copyClipBoard from "../utils/copyClipBoard"
import { CodeSandBoxLink } from "../CodeSandbox"

export const Pre = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> & {
    copy?: boolean
    sandbox?: string
    expo?: boolean
  }
) => {
  const preRef = useRef<HTMLDivElement | null>(null)

  const language = isValidElement<{ className?: string }>(props.children)
    ? props.children.props.className?.replace(/language-/gm, "") || ""
    : ""

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
