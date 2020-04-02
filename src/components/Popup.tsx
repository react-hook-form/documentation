import * as React from "react"
import { Animate } from "react-simple-animate"
import { useStateMachine } from "little-state-machine"
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
  const { state } = useStateMachine()
  const lightMode = state?.setting?.lightMode
  const [tipShow, setTipShow] = React.useState(false)

  return iconOnly ? (
    <span className={`${styles.icon} ${lightMode ? styles.lightIcon : {}}`}>
      !
    </span>
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
              {message || (
                <>React Native: only compatible with by using Controller</>
              )}
            </span>
          )}
        />
      </span>
    </span>
  )
}

export default Popup
