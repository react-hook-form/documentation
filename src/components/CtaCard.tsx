import type { ReactNode } from "react"
import Link from "next/link"
import styles from "./CtaCard.module.css"

export default function CtaCard({
  icon,
  title,
  description,
  href,
  label,
}: {
  icon: ReactNode
  title: string
  description: string
  href: string
  label: string
}) {
  const external = href.startsWith("http")

  return (
    <aside className={styles.card}>
      <span className={styles.icon} aria-hidden>
        {icon}
      </span>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {external ? (
        <a
          className={styles.button}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      ) : (
        <Link className={styles.button} href={href}>
          {label}
        </Link>
      )}
    </aside>
  )
}
