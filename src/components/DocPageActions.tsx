import { useEffect, useState } from "react"
import { SITE_URL } from "./seo"
import styles from "./DocPageActions.module.css"

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden>
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)

const FileIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
  </svg>
)

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
  </svg>
)

// Markdown copies are generated at build time by scripts/generate-markdown.mjs.
export default function DocPageActions({ slug }: { slug: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle")
  const markdownPath = `${slug}.md`
  const prompt = encodeURIComponent(
    `Read ${SITE_URL}${markdownPath} so I can ask questions about it.`
  )

  useEffect(() => {
    if (status === "idle") return
    const timerId = setTimeout(() => setStatus("idle"), 2000)
    return () => clearTimeout(timerId)
  }, [status])

  const copyPage = async () => {
    try {
      const res = await fetch(markdownPath)
      if (!res.ok) throw new Error(res.statusText)
      await navigator.clipboard.writeText(await res.text())
      setStatus("copied")
    } catch {
      setStatus("failed")
    }
  }

  return (
    <div className={styles.actions}>
      <button
        type="button"
        className={styles.action}
        onClick={() => void copyPage()}
      >
        <CopyIcon />
        <span aria-live="polite">
          {status === "copied"
            ? "Copied"
            : status === "failed"
              ? "Copy failed"
              : "Copy page"}
        </span>
      </button>
      <a className={styles.action} href={markdownPath}>
        <FileIcon />
        View Markdown
      </a>
      <a
        className={styles.action}
        href={`https://chatgpt.com/?q=${prompt}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalIcon />
        Open in ChatGPT
      </a>
      <a
        className={styles.action}
        href={`https://claude.ai/new?q=${prompt}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalIcon />
        Open in Claude
      </a>
    </div>
  )
}
