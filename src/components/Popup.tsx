import { useState } from "react"
import { Animate } from "react-simple-animate"
import styles from "./Popup.module.css"

function Popup({
  message,
  top,
  iconOnly,
}: {
  iconOnly?: boolean
  message?: string
  top?: number
}) {
  const [tipShow, setTipShow] = useState(false)

  return iconOnly ? (
    <span className={styles.icon}>!</span>
  ) : (
    <span className={styles.root}>
      <button className={styles.button} onClick={() => setTipShow(!tipShow)}>
        !
      </button>
      <span>
        <Animate
          play={tipShow}
          start={{
            transform: "translateX(-100%)",
          }}
          end={{
            transform: "translateX(0)",
          }}
          render={({ style }) => (
            <span style={{ ...style, top }}>
              {message || <>React Native: compatible with Controller</>}
            </span>
          )}
        />
      </span>
    </span>
  )
}

export default Popup
