import * as React from "react"
import { Animate } from "react-simple-animate"
import styles from "./VideoList.module.css"

export default ({
  lists,
  play,
}: {
  lists: { title: string; url: string }[]
  play: boolean
}) => (
  <Animate
    start={{ maxHeight: 0, overflow: "hidden" }}
    end={{ maxHeight: lists.length * 50, overflow: "hidden" }}
    easeType="ease-in"
    play={play}
  >
    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 0 8px" }}>
      {lists.map(({ url, title }) => (
        <li key={title}>
          <p className={styles.list}>
            <span
              style={{
                width: 24,
                height: 24,
                fontSize: 20,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
            >
              ▸
            </span>
            <a
              style={{ color: "currentColor" }}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
            >
              {title}
            </a>
          </p>
        </li>
      ))}
    </ul>
  </Animate>
)
