import styles from "./selectNav.module.css"
import { useRouter } from "next/router"

type Props = {
  options: {
    value: string
    label: string
  }[]
}

export function SelectNav({ options }: Props) {
  const router = useRouter()

  return (
    // eslint-disable-next-line jsx-a11y/no-onchange
    <select
      className={styles.root}
      onChange={(e) => {
        router.push(e.target.value)
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
