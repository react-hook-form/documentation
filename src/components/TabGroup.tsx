import { useState } from "react"
import styles from "./TabGroup.module.css"

const TabGroup = ({ children, buttonLabels }) => {
  const [index, setIndex] = useState(0)

  return (
    <div>
      <div
        className={styles.buttonTabGroup}
        style={{ marginBottom: -15, marginTop: 15 }}
      >
        {buttonLabels.map((label, currentIndex) => (
          <button
            key={label}
            style={{
              ...(currentIndex === index ? { cursor: "default" } : {}),
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
