import { Children, useId, useState } from "react"
import type { ReactNode } from "react"
import styles from "./TabGroup.module.css"

const TabGroup = ({
  children,
  buttonLabels,
}: {
  children: ReactNode[]
  buttonLabels: string[]
}) => {
  const [index, setIndex] = useState(0)
  const id = useId()
  const panels = Children.toArray(children)

  const selectAdjacentTab = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    direction: -1 | 1
  ) => {
    event.preventDefault()
    const nextIndex =
      (index + direction + buttonLabels.length) % buttonLabels.length
    setIndex(nextIndex)
    event.currentTarget.parentElement
      ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
      [nextIndex]?.focus()
  }

  return (
    <div className={styles.root}>
      <div className={styles.buttonTabGroup} role="tablist">
        {buttonLabels.map((label, currentIndex) => (
          <button
            key={label}
            id={`${id}-tab-${currentIndex}`}
            className={currentIndex === index ? styles.active : undefined}
            type="button"
            role="tab"
            aria-selected={currentIndex === index}
            aria-controls={`${id}-panel-${currentIndex}`}
            tabIndex={currentIndex === index ? 0 : -1}
            onClick={() => {
              setIndex(currentIndex)
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") selectAdjacentTab(event, -1)
              if (event.key === "ArrowRight") selectAdjacentTab(event, 1)
              if (event.key === "Home") {
                event.preventDefault()
                setIndex(0)
                event.currentTarget.parentElement
                  ?.querySelector<HTMLButtonElement>('[role="tab"]')
                  ?.focus()
              }
              if (event.key === "End") {
                event.preventDefault()
                const tabs =
                  event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(
                    '[role="tab"]'
                  )
                const last = buttonLabels.length - 1
                setIndex(last)
                tabs?.[last]?.focus()
              }
            }}
          >
            {label}
          </button>
        ))}
      </div>
      {panels.map((child, currentIndex) => {
        return (
          <div
            key={currentIndex}
            id={`${id}-panel-${currentIndex}`}
            className={styles.panel}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${currentIndex}`}
            hidden={index !== currentIndex}
          >
            {child}
          </div>
        )
      })}
    </div>
  )
}

export default TabGroup
