import { useEffect, useMemo, useRef, useState, Fragment } from "react"
import { createPortal } from "react-dom"
import { useRouter } from "next/router"
import clsx from "clsx"
import * as sidebar from "./Menu/MenuLinks"
import type { Pages } from "../types/types"
import styles from "./CommandSearch.module.css"

const OPEN_EVENT = "rhf:open-search"

// Lets other UI (the mobile tab bar) open the dialog without owning its state.
export const openCommandSearch = () =>
  window.dispatchEvent(new Event(OPEN_EVENT))

const ALGOLIA_APP_ID = "Z2CKVVT2QA"
const ALGOLIA_SEARCH_KEY = "c56a3f265ffbf85c2c654f865cb09164"
const ALGOLIA_INDEX = "react-hook-form"

type Result = {
  group: string
  title: string
  subtitle?: string
  href: string
}

type AlgoliaHit = {
  url: string
  hierarchy: Record<string, string | null>
  _snippetResult?: { content?: { value: string } }
}

// Sidebar groups that are anchors on a single page, keyed by that page.
const ANCHOR_GROUPS: { group: string; page: string; links: Pages }[] = [
  {
    group: "Get Started",
    page: "/get-started",
    links: sidebar.getStartedLinks,
  },
  { group: "Advanced", page: "/advanced-usage", links: sidebar.advancedLinks },
  { group: "TypeScript", page: "/ts", links: sidebar.tsLinks },
  { group: "FAQs", page: "/faqs", links: sidebar.faqLinks },
  {
    group: "Migrate to v8",
    page: "/migrate-v7-to-v8",
    links: sidebar.migrateV7ToV8Links,
  },
]

const LOCAL_INDEX: Result[] = [
  ...sidebar.apiLinks.flatMap((page) => [
    { group: "API", title: page.name, href: page.pathname },
    ...(page.pages ?? []).map((child) => ({
      group: "API",
      title: child.name,
      subtitle: page.name,
      href: child.pathname,
    })),
  ]),
  ...ANCHOR_GROUPS.flatMap(({ group, page, links }) =>
    links.map((link) => ({
      group,
      title: link.name,
      href: link.pathname.startsWith("#")
        ? `${page}${link.pathname}`
        : link.pathname,
    }))
  ),
]

const QUICK_LINKS: Result[] = [
  { group: "Jump to", title: "Get Started", href: "/get-started" },
  { group: "Jump to", title: "useForm", href: "/docs/useform" },
  { group: "Jump to", title: "register", href: "/docs/useform/register" },
  {
    group: "Jump to",
    title: "Controller",
    href: "/docs/usecontroller/controller",
  },
  { group: "Jump to", title: "useFieldArray", href: "/docs/usefieldarray" },
  {
    group: "Jump to",
    title: "Migrate to v8 (beta)",
    href: "/migrate-v7-to-v8",
  },
]

const decode = (value: string) =>
  value
    .replace(/<[^>]+>/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/^<\/>\s*/, "")
    .trim()

function toRelative(url: string) {
  try {
    const { pathname, hash } = new URL(url)
    return `${pathname}${hash}`
  } catch {
    return url
  }
}

function searchLocal(query: string): Result[] {
  const q = query.toLowerCase()
  return LOCAL_INDEX.filter((item) => item.title.toLowerCase().includes(q))
    .sort(
      (a, b) =>
        Number(!a.title.toLowerCase().startsWith(q)) -
        Number(!b.title.toLowerCase().startsWith(q))
    )
    .slice(0, 6)
}

async function searchAlgolia(
  query: string,
  signal: AbortSignal
): Promise<Result[]> {
  const res = await fetch(
    `https://${ALGOLIA_APP_ID}-dsn.algolia.net/1/indexes/${ALGOLIA_INDEX}/query`,
    {
      method: "POST",
      signal,
      headers: {
        "X-Algolia-Application-Id": ALGOLIA_APP_ID,
        "X-Algolia-API-Key": ALGOLIA_SEARCH_KEY,
      },
      body: JSON.stringify({
        query,
        hitsPerPage: 12,
        attributesToRetrieve: ["hierarchy", "url"],
        attributesToSnippet: ["content:14"],
      }),
    }
  )
  const { hits = [] } = (await res.json()) as { hits: AlgoliaHit[] }

  return hits.map((hit) => {
    const levels = ["lvl1", "lvl2", "lvl3", "lvl4"]
      .map((lvl) => hit.hierarchy[lvl])
      .filter((v): v is string => !!v)
      .map(decode)
    const snippet = hit._snippetResult?.content?.value

    return {
      group: decode(hit.hierarchy.lvl0 ?? "Docs"),
      title: levels[levels.length - 1] ?? decode(hit.hierarchy.lvl0 ?? ""),
      subtitle: snippet ? decode(snippet) : levels.slice(0, -1).join(" › "),
      href: toRelative(hit.url),
    }
  })
}

function dedupe(results: Result[]) {
  const seen = new Set<string>()
  return results.filter((r) => {
    if (seen.has(r.href)) return false
    seen.add(r.href)
    return true
  })
}

export default function CommandSearch() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [remote, setRemote] = useState<Result[]>([])
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState(0)
  const [isMac, setIsMac] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform))

    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      const isTyping =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((v) => !v)
      } else if (e.key === "/" && !isTyping) {
        e.preventDefault()
        setOpen(true)
      }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener("keydown", onKey)
    window.addEventListener(OPEN_EVENT, onOpen)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener(OPEN_EVENT, onOpen)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    setQuery("")
    setRemote([])
    setActive(0)
    document.body.style.overflow = "hidden"
    requestAnimationFrame(() => inputRef.current?.focus())
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const close = () => setOpen(false)
    router.events.on("routeChangeStart", close)
    return () => router.events.off("routeChangeStart", close)
  }, [router.events])

  useEffect(() => {
    const q = query.trim()
    if (!q) {
      setRemote([])
      setLoading(false)
      return
    }
    const controller = new AbortController()
    setLoading(true)
    const timer = setTimeout(() => {
      searchAlgolia(q, controller.signal)
        .then(setRemote)
        .catch(() => {})
        .finally(() => setLoading(false))
    }, 120)
    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [query])

  const results = useMemo(() => {
    const q = query.trim()
    if (!q) return QUICK_LINKS
    return dedupe([...searchLocal(q), ...remote])
  }, [query, remote])

  useEffect(() => setActive(0), [results])

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" })
  }, [active])

  const go = (result?: Result) => {
    if (!result) return
    setOpen(false)
    router.push(result.href)
  }

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActive((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (e.key === "Enter") {
      e.preventDefault()
      go(results[active])
    } else if (e.key === "Escape") {
      setOpen(false)
    }
  }

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen(true)}
        aria-label="Search documentation"
      >
        <svg viewBox="0 0 24 24" aria-hidden>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <span className={styles.triggerLabel}>Search docs…</span>
        <kbd className={styles.triggerKbd}>{isMac ? "⌘" : "Ctrl"} K</kbd>
      </button>

      {open &&
        // Portal out of the header: its backdrop-filter would otherwise
        // become the containing block and trap this fixed overlay.
        createPortal(
          <div
            className={styles.overlay}
            role="presentation"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setOpen(false)
            }}
          >
            <div
              className={styles.dialog}
              role="dialog"
              aria-modal="true"
              aria-label="Search documentation"
            >
              <div className={styles.inputRow}>
                <svg viewBox="0 0 24 24" aria-hidden>
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <input
                  ref={inputRef}
                  className={styles.input}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onInputKeyDown}
                  placeholder="Search API, guides, FAQs…"
                  spellCheck={false}
                  autoComplete="off"
                  role="combobox"
                  aria-expanded="true"
                  aria-controls="command-search-results"
                  aria-activedescendant={`command-search-${active}`}
                />
                {loading && <span className={styles.spinner} aria-hidden />}
                <kbd className={styles.esc}>Esc</kbd>
              </div>

              <ul
                id="command-search-results"
                ref={listRef}
                className={styles.results}
                role="listbox"
              >
                {results.length === 0 && !loading && (
                  <li className={styles.empty}>
                    No results for <strong>“{query}”</strong>
                  </li>
                )}
                {results.map((result, index) => (
                  <Fragment key={result.href + index}>
                    {(index === 0 ||
                      results[index - 1].group !== result.group) && (
                      <li className={styles.group} role="presentation">
                        {result.group}
                      </li>
                    )}
                    {/* Keyboard selection is handled by the combobox input via
                      aria-activedescendant, so options only need a click. */}
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                    <li
                      id={`command-search-${index}`}
                      data-index={index}
                      role="option"
                      aria-selected={index === active}
                      className={clsx(
                        styles.item,
                        index === active && styles.itemActive
                      )}
                      onMouseMove={() => setActive(index)}
                      onClick={() => go(result)}
                    >
                      <code aria-hidden className={styles.glyph}>{`</>`}</code>
                      <span className={styles.itemText}>
                        <span className={styles.itemTitle}>{result.title}</span>
                        {result.subtitle && (
                          <span className={styles.itemSubtitle}>
                            {result.subtitle}
                          </span>
                        )}
                      </span>
                      <span className={styles.enter} aria-hidden>
                        ↵
                      </span>
                    </li>
                  </Fragment>
                ))}
              </ul>

              <div className={styles.footer}>
                <span>
                  <kbd>↑</kbd> <kbd>↓</kbd> navigate
                </span>
                <span>
                  <kbd>↵</kbd> open
                </span>
                <span>
                  <kbd>esc</kbd> close
                </span>
                <span className={styles.poweredBy}>Search by Algolia</span>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
