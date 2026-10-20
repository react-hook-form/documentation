import { useState, useEffect } from "react"
import { Animate, AnimateGroup } from "react-simple-animate"
import { Control, useForm, useWatch } from "react-hook-form"
import styles from "./Watcher.module.css"
import home from "../data/home"
import HomeSection from "./HomeSection"

type WatchFormData = { test: string }

const WatchText = ({
  control,
  checked,
}: {
  control: Control<WatchFormData>
  checked?: boolean
}) => {
  const test = useWatch<WatchFormData>({
    control,
    name: "test",
    defaultValue: "",
  })

  return checked ? (
    <p>
      <span className="eye-solid icon" style={{ display: "in-block" }} />{" "}
      <span style={{ paddingLeft: 25 }}>{test}</span>
    </p>
  ) : (
    <p className={styles.behind}>
      <span
        className="eye-solid icon"
        style={{ display: "in-block", color: "var(--color-background)" }}
      />
    </p>
  )
}

const WatchGroup = ({
  checked,
  control,
}: {
  checked?: boolean
  control: Control<WatchFormData>
}) => {
  const [check, setChecked] = useState(checked)
  return (
    <div className={styles.watchGroup}>
      <input
        type="checkbox"
        aria-label="Watch the input value"
        checked={check}
        onChange={() => {
          setChecked(!check)
        }}
      />
      <WatchText control={control} checked={check} />
    </div>
  )
}

const Watcher = ({ isPlayWatch }: { isPlayWatch: boolean }) => {
  const { register, setValue, control } = useForm<WatchFormData>()

  useEffect(() => {
    if (!isPlayWatch) {
      return
    }
    let i = 0
    const timer = setInterval(() => {
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

    return () => {
      clearTimeout(timer)
    }
  }, [setValue, isPlayWatch])

  return (
    <AnimateGroup play={isPlayWatch}>
      <HomeSection
        id="watch"
        eyebrow={home.watcher.title}
        title="Subscribe to what changes"
        lead={home.watcher.description}
      >
        <div className={styles.card}>
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
                  className={styles.input}
                  maxLength={19}
                  {...register("test")}
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
                      stroke="currentColor"
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
                      stroke="currentColor"
                      strokeWidth="1"
                      d="M 0 18 H 80 V 68 H 500"
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
                      stroke="currentColor"
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
                      stroke="currentColor"
                      strokeWidth="1"
                      d="M 0 18 H 80 V 168 H 500"
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
                <WatchGroup control={control} checked />
              </Animate>

              <Animate
                sequenceIndex={1}
                start={{ opacity: 0 }}
                end={{ opacity: 1 }}
              >
                <WatchGroup control={control} />
              </Animate>
              <Animate
                sequenceIndex={1}
                start={{ opacity: 0 }}
                end={{ opacity: 1 }}
              >
                <WatchGroup control={control} checked />
              </Animate>
              <Animate
                sequenceIndex={1}
                start={{ opacity: 0 }}
                end={{ opacity: 1 }}
              >
                <WatchGroup control={control} />
              </Animate>
            </section>
          </div>
          <p className={styles.caption}>
            <code>useWatch</code> re-renders only the components that read the
            value, not the whole form.
          </p>
        </div>
      </HomeSection>
    </AnimateGroup>
  )
}

export default Watcher
