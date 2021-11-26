import * as React from "react"
import { navigate } from "gatsby"

import * as styles from "./selectNav.module.css"

type Props = {
  options: {
    value: string
    label: string
  }[]
}

export function SelectNav({ options }: Props) {
  return (
    <select
      className={styles.root}
      onChange={(e) => {
        navigate(e.target.value)
      }}
    >
      <option>Select page...</option>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        )
      })}
    </select>
  )
}
