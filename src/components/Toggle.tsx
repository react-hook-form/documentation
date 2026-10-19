import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import styles from "./Toggle.module.css"

export default function Toggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const isLight = theme === "light"

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Dark theme" : "Light theme"}
    >
      {mounted &&
        (isLight ? (
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        ))}
    </button>
  )
}
