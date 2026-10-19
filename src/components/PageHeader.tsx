import type { ReactNode } from "react"
import styles from "./PageHeader.module.css"

export default function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
}) {
  return (
    <header className={styles.header}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1 id="main">{title}</h1>
      {lead && <p className={styles.lead}>{lead}</p>}
    </header>
  )
}
