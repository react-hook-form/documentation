import { useState, type JSX, type ReactNode } from "react"
import { useForm, useWatch } from "react-hook-form"
import clsx from "clsx"
import PageHeader from "./PageHeader"
import SegmentedControl from "./SegmentedControl"
import cards from "../styles/cards.module.css"
import styles from "./ResourceList.module.css"

export type ResourceKind = "article" | "video" | "newsletter" | "binding"

interface Resource {
  title: string
  description?: string
  version?: string
  author?: string
  url: string
  authorUrl?: string
  recommendedOrder?: number
}

interface ResourceListFormData {
  filterResources: string
}

const NOUNS: Record<ResourceKind, [string, string]> = {
  article: ["article", "articles"],
  video: ["video", "videos"],
  newsletter: ["newsletter", "newsletters"],
  binding: ["integration", "integrations"],
}

export const RESOURCE_ICONS: Record<ResourceKind, JSX.Element> = {
  article: (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  ),
  video: (
    <svg viewBox="0 0 24 24" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m10 9 5 3-5 3z" />
    </svg>
  ),
  newsletter: (
    <svg viewBox="0 0 24 24" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  binding: (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M9 7V3M15 7V3M6 7h12v4a6 6 0 0 1-12 0zM12 17v4" />
    </svg>
  ),
}

const hostOf = (url: string) => {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "")
    // Internationalised domains come back punycode-encoded; skip those.
    return host.includes("xn--") ? "" : host
  } catch {
    return ""
  }
}

export default function ResourceList({
  kind,
  title,
  lead,
  resources,
  navigation,
}: {
  kind: ResourceKind
  title: string
  lead: string
  resources: Resource[]
  navigation?: ReactNode
}) {
  const { register, control } = useForm<ResourceListFormData>({
    mode: "onChange",
  })
  const [layout, setLayout] = useState<"grid" | "list">("grid")

  // Plain substring match: user input never goes through RegExp.
  const query = useWatch({ control, name: "filterResources", defaultValue: "" })
    .trim()
    .toLowerCase()
  // Curated starting points first; then prefer newer library versions.
  // Stable sorting preserves the source order for equally ranked resources.
  const sorted = [...resources].sort(
    (a, b) =>
      (a.recommendedOrder ?? Number.MAX_SAFE_INTEGER) -
        (b.recommendedOrder ?? Number.MAX_SAFE_INTEGER) ||
      Number.parseInt(b.version ?? "0", 10) -
        Number.parseInt(a.version ?? "0", 10)
  )
  const filtered = sorted.filter(({ title, author, description, version }) =>
    `${title} ${author ?? ""} ${description ?? ""} ${version ? `v${version}` : ""}`
      .toLowerCase()
      .includes(query)
  )
  const [singular, plural] = NOUNS[kind]

  return (
    <>
      <PageHeader eyebrow="Resources" title={title} lead={lead} />
      {navigation}

      {resources.some(
        (resource) => resource.recommendedOrder !== undefined
      ) && (
        <p className={styles.orderNote}>
          Recommended starting points appear first. Version badges show the
          library version covered by each example.
        </p>
      )}
      <div className={styles.toolbar}>
        <label className={styles.search}>
          <svg viewBox="0 0 24 24" aria-hidden>
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="search"
            placeholder={`Search ${plural}…`}
            aria-label={`Search ${plural}`}
            {...register("filterResources")}
          />
        </label>
        <p className={styles.count} aria-live="polite">
          {filtered.length} {filtered.length === 1 ? singular : plural}
        </p>
        <SegmentedControl
          label="Layout"
          options={[
            { value: "grid", label: "Grid" },
            { value: "list", label: "List" },
          ]}
          value={layout}
          onChange={setLayout}
        />
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>
          No {plural} match <strong>“{query}”</strong>.
        </p>
      ) : (
        <ul
          className={clsx(
            cards.grid,
            layout === "grid" ? cards.grid3 : styles.list
          )}
        >
          {filtered.map(
            ({
              url,
              title,
              author,
              authorUrl,
              version,
              description,
              recommendedOrder,
            }) => (
              <li
                key={url + title}
                className={clsx(cards.card, layout === "list" && styles.row)}
              >
                <div className={styles.body}>
                  <span className={cards.icon}>{RESOURCE_ICONS[kind]}</span>
                  {version && <span className={cards.badge}>v{version}</span>}
                  <div className={styles.content}>
                    {recommendedOrder !== undefined && (
                      <span className={styles.recommended}>Recommended</span>
                    )}
                    <h2 className={clsx(cards.title, styles.title)}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.stretched}
                      >
                        {title}
                      </a>
                    </h2>
                    {description && (
                      <p className={clsx(cards.text, cards.clamp)}>
                        {description}
                      </p>
                    )}
                  </div>
                </div>

                <div className={clsx(cards.footer, styles.meta)}>
                  {author ? (
                    authorUrl ? (
                      <a
                        href={authorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.author}
                      >
                        {author}
                      </a>
                    ) : (
                      <span className={styles.author}>{author}</span>
                    )
                  ) : null}
                  <span className={styles.host}>{hostOf(url) || "Open"} ↗</span>
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </>
  )
}
