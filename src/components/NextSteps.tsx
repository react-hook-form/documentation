import Link from "next/link"
import type { ReactNode } from "react"
import styles from "./NextSteps.module.css"

export const NextSteps = ({ children }: { children: ReactNode }) => (
  <div className={styles.grid}>{children}</div>
)

export const NextStep = ({
  href,
  title,
  children,
}: {
  href: string
  title: string
  children: ReactNode
}) => (
  <Link href={href} className={styles.card}>
    <span className={styles.title}>{title}</span>
    <span className={styles.description}>{children}</span>
    <span className={styles.arrow} aria-hidden>
      →
    </span>
  </Link>
)
