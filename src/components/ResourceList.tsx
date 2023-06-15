import { useState } from "react"
import { useForm } from "react-hook-form"
import headerStyles from "./Header.module.css"
import styles from "./ResourcePage.module.css"
import typographyStyles from "../styles/typography.module.css"

type Resource = {
  title: string
  description?: string
  version?: string
  author?: string
  url: string
  authorUrl?: string
}

export default function ResourceList({
  title,
  resources,
}: {
  title: string
  resources: Resource[]
}) {
  const { register, watch } = useForm({ mode: "onChange" })
  const [layout, setLayout] = useState("grid")

  const isGridLayout = layout === "grid"

  const filtered = resources.reduce<Resource[]>((acc, cur) => {
    const { title, author, description, version } = cur
    // case insensitive filter
    if (
      `${title} ${author} ${description} v${version}`.match(
        new RegExp(watch("filterResources"), "i")
      )
    ) {
      acc.push(cur)
    }
    return acc
  }, [])

  return (
    <div>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        {title}
      </h1>

      <input
        placeholder="Search resources..."
        className={styles.searchFilter}
        {...register("filterResources")}
      />

      <div className={styles.layoutButtons}>
        <div
          className={headerStyles.toggleGroup}
          role="tablist"
          aria-label="Select video"
        >
          <button
            aria-controls="tabPanel-1"
            role="tab"
            disabled={isGridLayout}
            onClick={() => {
              setLayout("grid")
            }}
          >
            Grid
          </button>
          <button
            role="tab"
            aria-controls="tabPanel-2"
            disabled={!isGridLayout}
            onClick={() => {
              setLayout("list")
            }}
          >
            List
          </button>
        </div>
      </div>

      <ul
        className={isGridLayout ? styles.contentList : styles.contentListLayout}
      >
        {filtered.map(
          ({ url, title, author, authorUrl, version, description }) => (
            <li key={url + title}>
              {version && (
                <div className={styles.tagWrapper}>
                  <p className={styles.tag}>v{version || "6"}</p>
                </div>
              )}
              <article className={styles.article}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <h3>{title}</h3>
                </a>

                {author && (
                  <p className={styles.author}>
                    <a
                      href={authorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {author}
                    </a>
                  </p>
                )}

                {description && <p>{description}</p>}
              </article>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
