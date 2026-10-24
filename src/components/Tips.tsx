import type { ReactNode } from "react"
import styles from "./Tips.module.css"

export const Tips = ({ children }: { children: ReactNode }) => (
  <section className={styles.card}>{children}</section>
)
