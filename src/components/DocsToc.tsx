import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import clsx from "clsx"
import useActiveHeading from "./utils/useActiveHeading"
import styles from "./DocsToc.module.css"

type Heading = { id: string; label: string; level: number }

export default function DocsToc() {
  const { asPath } = useRouter()
  const [headings, setHeadings] = useState<Heading[]>([])
  const active = useActiveHeading(headings.map((h) => h.id))

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(
      "#docs-content :is(h2, h3, h4)[id][data-toc]"
    )
    setHeadings(
      Array.from(nodes).map((node) => ({
        id: node.id,
        label: node.dataset.toc ?? node.id,
        level: Number(node.tagName[1]),
      }))
    )
  }, [asPath])

  if (headings.length < 2) return <aside className={styles.toc} />

  const minLevel = Math.min(...headings.map((h) => h.level))

  return (
    <aside className={styles.toc} aria-label="On this page">
      <div className={styles.inner}>
        <p className={styles.title}>On this page</p>
        <ul>
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ paddingLeft: (heading.level - minLevel) * 12 }}
            >
              <a
                href={`#${heading.id}`}
                className={clsx(active === heading.id && styles.active)}
              >
                {heading.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
