import styles from "./TabGroup.module.css"
import { useState } from "react"
import { useTheme } from "next-themes"

const TabGroup = ({ children, buttonLabels }) => {
  const [index, setIndex] = useState(0)
  const { theme } = useTheme()
  const lightMode = theme === "light"

  return (
    <div>
      <div
        className={`${styles.buttonTabGroup} ${
          lightMode ? styles.lightButtonTabGroup : ""
        }`}
        style={{ marginBottom: -15, marginTop: 30 }}
      >
        {buttonLabels.map((label, currentIndex) => (
          <button
            key={label}
            style={{
              ...(currentIndex === index
                ? { cursor: "default", borderTop: "1px solid transparent" }
                : {}),
            }}
            disabled={currentIndex === index}
            onClick={() => setIndex(currentIndex)}
          >
            {label}
          </button>
        ))}
      </div>
      {children.map((child, currentIndex) => {
        return (
          <div
            key={currentIndex}
            style={{
              display: index === currentIndex ? "block" : "none",
            }}
          >
            {child}
          </div>
        )
      })}
    </div>
  )
}

export default TabGroup
