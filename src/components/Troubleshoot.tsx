import type { ReactNode } from "react"
import styles from "./Troubleshoot.module.css"

// One troubleshooting entry. Put a markdown `####` heading (the error message
// or symptom) first so it keeps its anchor and "On this page" entry, then a
// <Why> and a <Fix> block.
export const Troubleshoot = ({ children }: { children: ReactNode }) => (
  <section className={styles.card}>{children}</section>
)

export const Why = ({ children }: { children: ReactNode }) => (
  <div className={styles.block}>
    <p className={styles.label}>Why it happens</p>
    {children}
  </div>
)

export const Fix = ({ children }: { children: ReactNode }) => (
  <div className={`${styles.block} ${styles.fix}`}>
    <p className={styles.label}>Fix</p>
    {children}
  </div>
)
