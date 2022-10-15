import * as React from "react"
import { useStateMachine } from "little-state-machine"
import { updateSetting } from "../actions/settingActions"
import * as styles from "./Toggle.module.css"

export default function Toggle({ style }: { style?: React.CSSProperties }) {
  const { actions, state } = useStateMachine({ updateSetting })
  const lightMode = state?.setting?.lightMode

  const onChange = (e) => {
    actions.updateSetting({
      lightMode: e.target.checked,
    })

    if (e.target.checked) {
      document.querySelector("body").classList.add("light")
    } else {
      document.querySelector("body").classList.remove("light")
    }
  }

  return (
    <label htmlFor="toggle" className={styles.toggle} style={style}>
      <input
        id="toggle"
        type="checkbox"
        onChange={onChange}
        checked={lightMode}
      />
      <span className={`${styles.slider} ${styles.round}`} />
    </label>
  )
}
