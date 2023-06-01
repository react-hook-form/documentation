import { CSSProperties, useEffect, useState } from "react"
import styles from "./Toggle.module.css"
import { useTheme } from "next-themes"

export default function Toggle({ style }: { style?: CSSProperties }) {
  const [mounted, setMounted] = useState(false)

  const { theme, setTheme } = useTheme()
  const lightMode = theme === "light"

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <label htmlFor="toggle" className={styles.toggle} style={style}>
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
        checked={lightMode}
      />
      <span className={`${styles.slider} ${styles.round}`} />
    </label>
  )
}
