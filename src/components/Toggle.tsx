import * as React from "react"
import styles from "./Toggle.module.css"
import { useStateMachine } from "little-state-machine"
import { updateSetting } from "../actions/settingActions"
import { createFileNodeFromBuffer } from "gatsby-source-filesystem"

export default function Toggle() {
  const {
    action,
    state: {
      setting: { darkMode },
    },
  } = useStateMachine(updateSetting)

  const onChange = e => {
    action({
      darkMode: e.target.checked,
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
        defaultChecked={darkMode}
      />
      <span className={`${styles.slider} ${styles.round}`} />
    </label>
  )
}
