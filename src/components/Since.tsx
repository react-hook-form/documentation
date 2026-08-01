import styles from "./Since.module.css"

const Since = ({ version }: { version: string }) => {
  return (
    <span className={styles.since}>
      <span className={styles.dot} />
      Since <span className={styles.version}>v{version}</span>
    </span>
  )
}

export default Since
