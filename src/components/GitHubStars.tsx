import { useEffect, useState } from "react"
import styles from "./GitHubStars.module.css"

const REPO = "react-hook-form/react-hook-form"
const CACHE_KEY = "rhf-github-stars"
const CACHE_TTL = 6 * 60 * 60 * 1000

const formatStars = (count: number) =>
  new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  })
    .format(count)
    .toLowerCase()

function readCache(): number | null {
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY) ?? "null") as {
      count: number
      at: number
    } | null
    return cached && Date.now() - cached.at < CACHE_TTL ? cached.count : null
  } catch {
    return null
  }
}

// GitHub's unauthenticated API allows 60 requests an hour per IP, so the count
// is cached and the button reads as "Star" until (or unless) it arrives.
export default function GitHubStars() {
  const [stars, setStars] = useState<number | null>(null)

  useEffect(() => {
    const cached = readCache()
    if (cached !== null) {
      setStars(cached)
      return
    }

    const controller = new AbortController()
    fetch(`https://api.github.com/repos/${REPO}`, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { stargazers_count?: number } | null) => {
        if (typeof data?.stargazers_count !== "number") return
        setStars(data.stargazers_count)
        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ count: data.stargazers_count, at: Date.now() })
          )
        } catch {}
      })
      .catch(() => {})
    return () => controller.abort()
  }, [])

  return (
    <a
      className={styles.button}
      href={`https://github.com/${REPO}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        stars === null
          ? "Star react-hook-form on GitHub"
          : `Star react-hook-form on GitHub (${stars.toLocaleString("en")} stars)`
      }
    >
      <svg className={styles.icon} viewBox="0 0 16 16" aria-hidden>
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
      <span className={styles.label}>
        {stars === null ? (
          "Star"
        ) : (
          <>
            <svg className={styles.star} viewBox="0 0 16 16" aria-hidden>
              <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
            </svg>
            {formatStars(stars)}
          </>
        )}
      </span>
    </a>
  )
}
