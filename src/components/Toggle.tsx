import styles from "./Toggle.module.css"
import { useTheme } from "next-themes"

export default function Toggle() {
  const { theme, setTheme } = useTheme()

  return (
    <label htmlFor="toggle" className={styles.toggle}>
      <input
        id="toggle"
        type="checkbox"
        onChange={(e) => {
          if (e.target.checked) {
            setTheme("light")
          } else {
            setTheme("dark")
          }
        }}
        checked={theme === "light"}
      />
      <span className={`${styles.slider} ${styles.round}`} />
    </label>
  )
}
