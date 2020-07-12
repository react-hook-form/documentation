import * as React from "react"
import styles from "./Toggle.module.css"
import { useStateMachine } from "little-state-machine"
import { updateSetting } from "../actions/settingActions"

export default function Toggle() {
  const { action, state } = useStateMachine(updateSetting)
  const lightMode = state?.setting?.lightMode

  const onChange = (e) => {
    action({
      lightMode: e.target.checked,
    })

    if (e.target.checked) {
      document.querySelector("body").classList.add("light")
    } else {
      document.querySelector("body").classList.remove("light")
    }
  }

  return (
    <label htmlFor="toggle" className={styles.switch}>
      <input
        id="toggle"
        type="checkbox"
        onChange={onChange}
        defaultChecked={lightMode}
      />
      <span className={`${styles.slider} ${styles.round}`} />
    </label>
  )
}
