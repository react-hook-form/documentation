import * as React from "react"
import { Animate, AnimateGroup } from "react-simple-animate"
import { Control, useForm, useWatch } from "react-hook-form"
import * as containerStyles from "../styles/container.module.css"
import * as formStyles from "./Form.module.css"
import * as typographyStyles from "../styles/typography.module.css"
import * as styles from "./Watcher.module.css"
import { useEffect } from "react"
import home from "../data/home"

const WatchText = ({
  control,
  checked,
  lightMode,
}: {
  control: Control
  checked: boolean
  lightMode: boolean
}) => {
  const test = useWatch({
    control,
    name: "test",
    defaultValue: "",
  })

  return checked ? (
    <p
      style={{
        background: checked ? "none" : lightMode ? "white" : "#081229",
      }}
    >
      <span className="eye-solid icon" style={{ display: "in-block" }} />{" "}
      <span style={{ paddingLeft: 25 }}>{test}</span>
    </p>
  ) : (
    <p
      style={{
        background: lightMode ? "white" : "#081229",
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
  lightMode,
  control,
}: {
  checked?: boolean
  lightMode: boolean
  control: Control
}) => {
  const [check, setChecked] = React.useState(checked)
  return (
    <div className={styles.watchGroup}>
      <input
        type="checkbox"
        checked={check}
        onChange={() => setChecked(!check)}
        style={{
          ...(lightMode ? { background: "black" } : ""),
        }}
      />
      <WatchText lightMode={lightMode} control={control} checked={check} />
    </div>
  )
}

export default ({
  isPlayWatch,
  lightMode,
  currentLanguage,
}: {
  isPlayWatch: boolean
  lightMode: boolean
  currentLanguage: string
}) => {
  let timer
  const { register, control, setValue } = useForm()

  useEffect(() => {
    let i = 0
    if (isPlayWatch) {
      timer = setInterval(() => {
        if (i > 12) {
          setValue(
            "test",
            i === 13
              ? "W"
              : i === 14
              ? "Wa"
              : i === 15
              ? "Wat"
              : i === 16
              ? "Watc"
              : i === 17
              ? "Watch"
              : i === 18
              ? "Watchi"
              : i === 19
              ? "Watchin"
              : i === 20
              ? "Watching"
              : "Watching."
          )
        }

        if (i > 20) {
          clearTimeout(timer)
        }
        i++
      }, 200)
    }

    return () => clearTimeout(timer)
  }, [setValue, isPlayWatch])

  return (
    <AnimateGroup play={isPlayWatch}>
      <div className={styles.watcher} id="watch">
        <div className={containerStyles.centerContent}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <circle cx="256" cy="256.02" r="32" fill="white" />
            <path
              d="M184.25 192.25a96 96 0 000 127.52M327.77 319.77a96 96 0 000-127.52M133.28 141.28a168 168 0 000 229.44M378.72 370.72a168 168 0 000-229.44M435 416a240.34 240.34 0 000-320M77 96a240.34 240.34 0 000 320"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>

          <h1 className={typographyStyles.h1}>
            {home.watcher[currentLanguage].title}
          </h1>
          {home.watcher[currentLanguage].description}
        </div>

        <div className={styles.root}>
          <section>
            <Animate
              sequenceIndex={0}
              delay={0.2}
              start={{ opacity: 0 }}
              end={{ opacity: 1 }}
            >
              <input
                placeholder="Watching..."
                ref={register}
                name="test"
                className={formStyles.input}
                maxLength={20}
              />
            </Animate>
          </section>

          <section className={styles.svgWrapper}>
            <svg viewBox="0 0 300 200">
              <Animate
                sequenceIndex={2}
                start={{ opacity: 0 }}
                end={{ opacity: 1 }}
                render={({ style }) => (
                  <path
                    style={style}
                    className="path"
                    fill="none"
                    stroke={lightMode ? "black" : "white"}
                    strokeWidth="1"
                    d="M 0 18 H 500"
                  />
                )}
              />
              <Animate
                sequenceIndex={3}
                start={{ opacity: 0 }}
                end={{ opacity: 1 }}
                render={({ style }) => (
                  <path
                    style={style}
                    className="path"
                    fill="none"
                    stroke={lightMode ? "black" : "white"}
                    strokeWidth="1"
                    d="M 0 18 H 80 V 68 H 240"
                  />
                )}
              />
              <Animate
                sequenceIndex={4}
                start={{ opacity: 0 }}
                end={{ opacity: 1 }}
                render={({ style }) => (
                  <path
                    style={style}
                    className="path"
                    fill="none"
                    stroke={lightMode ? "black" : "white"}
                    strokeWidth="1"
                    d="M 0 18 H 80 V 118 H 500"
                  />
                )}
              />
              <Animate
                sequenceIndex={5}
                start={{ opacity: 0 }}
                end={{ opacity: 1 }}
                render={({ style }) => (
                  <path
                    style={style}
                    className="path"
                    fill="none"
                    stroke={lightMode ? "black" : "white"}
                    strokeWidth="1"
                    d="M 0 18 H 80 V 168 H 240"
                  />
                )}
              />
            </svg>
          </section>

          <section>
            <Animate
              sequenceIndex={1}
              start={{ opacity: 0 }}
              end={{ opacity: 1 }}
            >
              <WatchGroup lightMode={lightMode} control={control} checked />
            </Animate>

            <Animate
              sequenceIndex={1}
              start={{ opacity: 0 }}
              end={{ opacity: 1 }}
            >
              <WatchGroup lightMode={lightMode} control={control} />
            </Animate>
            <Animate
              sequenceIndex={1}
              start={{ opacity: 0 }}
              end={{ opacity: 1 }}
            >
              <WatchGroup lightMode={lightMode} control={control} checked />
            </Animate>
            <Animate
              sequenceIndex={1}
              start={{ opacity: 0 }}
              end={{ opacity: 1 }}
            >
              <WatchGroup lightMode={lightMode} control={control} />
            </Animate>
          </section>
        </div>
      </div>
    </AnimateGroup>
  )
}
