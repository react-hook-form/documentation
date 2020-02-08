import * as React from "react"
import styles from "./TabGroup.module.css"

export default ({ children, buttonLabels }) => {
  const [index, setIndex] = React.useState(0)

  return (
    <div>
      <div
        className={styles.buttonTabGroup}
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
      {children.map((child, currentIndex) => index === currentIndex && child)}
    </div>
  )
}
