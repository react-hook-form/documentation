import * as React from "react"
import { Control, useForm, useWatch } from "react-hook-form"
import containerStyles from "../styles/container.module.css"
import formStyles from "./Form.module.css"
import typographyStyles from "../styles/typography.module.css"
import styles from "./Watcher.module.css"

const WatchText = ({
  control,
  checked,
}: {
  control: Control
  checked: boolean
}) => {
  const test = useWatch({
    control,
    name: "test",
    defaultValue: "",
  })

  return checked ? (
    <p
      style={{
        background: checked ? "none" : "#081229",
      }}
    >
      <span className="eye-solid icon" style={{ display: "in-block" }} />{" "}
      <span style={{ paddingLeft: 25 }}>{test}</span>
    </p>
  ) : (
    <p
      style={{
        background: "#081229",
      }}
    >
      <span
        className="eye-solid icon"
        style={{ display: "in-block", background: "#fff" }}
      />
      <span style={{ paddingLeft: 25 }}></span>
    </p>
  )
}

const WatchGroup = ({
  checked,
  control,
}: {
  checked?: boolean
  control: Control
}) => {
  const [check, setChecked] = React.useState(checked)
  return (
    <div className={styles.watchGroup}>
      <input
        type="checkbox"
        checked={check}
        onChange={() => setChecked(!check)}
      />
      <WatchText control={control} checked={check} />
    </div>
  )
}

export default () => {
  const { register, control } = useForm()

  return (
    <div className={styles.watcher}>
      <div className={containerStyles.centerContent}>
        <h1 className={typographyStyles.h1}>Subscribe Input Change</h1>
        <p>
          Performance is an important aspect of user experience. You will have
          the ability to subscribe to input change without re-render the entire
          form.
        </p>
      </div>

      <div className={styles.root}>
        <section>
          <input
            placeholder="Watching..."
            ref={register}
            name="test"
            className={formStyles.input}
            maxLength={20}
          />
        </section>

        <section className={styles.svgWrapper}>
          <svg viewBox="0 0 300 200">
            <path
              className="path"
              fill="none"
              stroke="white"
              strokeWidth="1"
              d="M 0 18 H 500"
            />
            <path
              className="path"
              fill="none"
              stroke="white"
              strokeWidth="1"
              d="M 0 18 H 80 V 68 H 500"
            />
            <path
              className="path"
              fill="none"
              stroke="white"
              strokeWidth="1"
              d="M 0 18 H 80 V 118 H 500"
            />
            <path
              className="path"
              fill="none"
              stroke="white"
              strokeWidth="1"
              d="M 0 18 H 80 V 168 H 500"
            />
          </svg>
        </section>

        <section>
          <WatchGroup control={control} checked />
          <WatchGroup control={control} />
          <WatchGroup control={control} checked />
          <WatchGroup control={control} />
        </section>
      </div>
    </div>
  )
}
