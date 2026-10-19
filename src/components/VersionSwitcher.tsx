import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import clsx from "clsx"
import styles from "./VersionSwitcher.module.css"

const V8_PATH = "/migrate-v7-to-v8"
const LEGACY_URL =
  "https://react-hook-form-website-git-leagcy-hook-form.vercel.app"

export default function VersionSwitcher() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isV8 = router.asPath.startsWith(V8_PATH)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    document.addEventListener("mousedown", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  useEffect(() => {
    const close = () => setOpen(false)
    router.events.on("routeChangeStart", close)
    return () => router.events.off("routeChangeStart", close)
  }, [router.events])

  return (
    <div className={styles.root} ref={ref}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {isV8 ? "v8" : "v7"}
        {isV8 && <span className={styles.beta}>beta</span>}
        <svg viewBox="0 0 12 12" aria-hidden>
          <path d="M3 4.5 6 7.5 9 4.5" />
        </svg>
      </button>

      {open && (
        <div className={styles.menu} role="menu">
          <Link
            href="/docs"
            role="menuitem"
            className={clsx(styles.option, !isV8 && styles.optionActive)}
          >
            <span className={styles.optionTitle}>
              v7 <span className={styles.latest}>latest</span>
            </span>
            <span className={styles.optionDesc}>Stable API documentation</span>
          </Link>
          <Link
            href={V8_PATH}
            role="menuitem"
            className={clsx(styles.option, isV8 && styles.optionActive)}
          >
            <span className={styles.optionTitle}>
              v8 <span className={styles.beta}>beta</span>
            </span>
            <span className={styles.optionDesc}>
              What changes and how to migrate
            </span>
          </Link>
          <div className={styles.legacy} role="none">
            <span>Older</span>
            {["v6", "v5"].map((version) => (
              <a
                key={version}
                href={`${LEGACY_URL}/${version}/api`}
                role="menuitem"
              >
                {version} ↗
              </a>
            ))}
          </div>
          <a
            href="https://github.com/react-hook-form/react-hook-form/releases"
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            className={styles.option}
          >
            <span className={styles.optionTitle}>Release notes ↗</span>
          </a>
        </div>
      )}
    </div>
  )
}
