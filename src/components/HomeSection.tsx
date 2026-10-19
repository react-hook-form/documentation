import type { ReactNode } from "react"
import clsx from "clsx"
import styles from "./HomeSection.module.css"

export default function HomeSection({
  id,
  eyebrow,
  title,
  lead,
  wide,
  children,
}: {
  id?: string
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  wide?: boolean
  children?: ReactNode
}) {
  return (
    <section id={id} className={clsx(styles.section, wide && styles.wide)}>
      <header className={styles.header}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h2 className={styles.title}>{title}</h2>
        {lead && <div className={styles.lead}>{lead}</div>}
      </header>
      {children}
    </section>
  )
}
