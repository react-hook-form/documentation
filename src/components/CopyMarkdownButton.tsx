import { useCallback, useEffect, useState } from "react"
import copyToClipboard from "./utils/copyClipBoard"
import generic from "../data/generic"
import styles from "./CopyMarkdownButton.module.css"

type CopyState = "idle" | "loading" | "copied" | "error"

const ARIA_LABELS: Record<CopyState, string> = {
  idle: "페이지 내용을 마크다운으로 복사",
  loading: "마크다운 복사 중...",
  copied: "클립보드에 복사 완료",
  error: "복사 실패",
}

const LABELS: Record<CopyState, string> = {
  idle: generic.copyMarkdown,
  loading: "...",
  copied: generic.markdownCopied,
  error: generic.copyFailed,
}

export default function CopyMarkdownButton({ slug }: { slug: string }) {
  const [state, setState] = useState<CopyState>("idle")

  useEffect(() => {
    if (state !== "copied" && state !== "error") return

    const timerId = setTimeout(() => setState("idle"), 3000)
    return () => clearTimeout(timerId)
  }, [state])

  const handleClick = useCallback(async () => {
    if (state === "loading") return

    setState("loading")
    try {
      const res = await fetch(`/md/${slug}.md`)
      if (!res.ok) throw new Error(`${res.status}`)
      const text = await res.text()
      await copyToClipboard(text)
      setState("copied")
    } catch {
      setState("error")
    }
  }, [slug, state])

  return (
    <button
      className={`${styles.button} ${state !== "idle" ? styles[state] : ""}`}
      onClick={handleClick}
      disabled={state === "loading"}
      aria-label={ARIA_LABELS[state]}
    >
      {LABELS[state]}
    </button>
  )
}
