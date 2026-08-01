import styles from "./Since.module.css"

const Since = ({ version }: { version: string }) => {
  return <span className={styles.since}>v{version}+</span>
}

export default Since
