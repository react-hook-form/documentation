import type { ReactNode } from "react"
import Link from "next/link"
import clsx from "clsx"
import cards from "../styles/cards.module.css"

export type ResourceCard = {
  title: string
  lead: string
  href: string
  icon?: ReactNode
  count?: number
}

export default function DirectoryCards({
  items,
  columns = 3,
}: {
  items: ResourceCard[]
  columns?: 2 | 3
}) {
  return (
    <ul className={clsx(cards.grid, columns === 3 && cards.grid3)}>
      {items.map(({ title, lead, href, icon, count }) => {
        const external = href.startsWith("https://")
        const content = (
          <>
            <span className={cards.icon} aria-hidden>
              {icon ?? "</>"}
            </span>
            {count !== undefined && (
              <span className={cards.badge}>{count} resources</span>
            )}
            <h3 className={cards.title}>{title}</h3>
            <p className={cards.text}>{lead}</p>
            <span className={cards.more} aria-hidden>
              {external ? "Explore ↗" : "Explore →"}
            </span>
          </>
        )
        return (
          <li key={href} className={cards.card}>
            {external ? (
              <a
                href={href}
                className={cards.cardLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <Link href={href} className={cards.cardLink}>
                {content}
              </Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}
