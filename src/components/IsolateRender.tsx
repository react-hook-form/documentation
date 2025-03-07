import { memo, useState } from "react"
import type React from "react"
import { AnimateKeyframes, Animate } from "react-simple-animate"
import colors from "../styles/colors"
import home from "../data/home"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import formStyles from "./Form.module.css"
import styles from "./IsolateRender.module.css"

const props = {
  keyframes: [
    "transform: translateX(0)",
    `transform: translateX(3px); background: black;`,
    "transform: translateX(0px)",
    `transform: translateX(-3px); background: black;`,
    "transform: translateX(0px)",
  ],
  easeType: "ease-in",
}

const IsoLateInput = () => {
  const [play, setPlay] = useState(false)

  return (
    <AnimateKeyframes
      keyframes={[`background: ${colors.lightBlue};`, "background: white;"]}
      play={play}
      render={({ style }) => (
        <input
          aria-label="Uncontrolled Input re-render demo using React Hook Form"
          placeholder="Type here to see result..."
          style={style}
          onChange={() => {
            setPlay(!play)
          }}
        />
      )}
    />
  )
}

const ControlledInputs = ({ style }: { style?: React.CSSProperties }) => {
  const [play, setPlay] = useState(false)

  return (
    <section style={{ ...style, marginBottom: 20 }}>
      <form className={formStyles.demoForm}>
        <h2>Controlled Form</h2>
        <AnimateKeyframes
          keyframes={[`background: ${colors.lightBlue};`, "background: white;"]}
          play={play}
          render={({ style }) => (
            <input
              aria-label="Controlled Input re-render demo"
              placeholder="Type here to see result..."
              style={style}
              onChange={() => {
                setPlay(!play)
              }}
            />
          )}
        />

        <AnimateKeyframes
          {...props}
          play={play}
          render={({ style }) => (
            <div className={styles.externalComponent} style={style}>
              Child Component A
            </div>
          )}
        />

        <AnimateKeyframes
          {...props}
          play={play}
          render={({ style }) => (
            <div className={styles.externalComponent} style={style}>
              Child Component B
            </div>
          )}
        />
        <AnimateKeyframes
          {...props}
          play={play}
          render={({ style }) => (
            <div className={styles.externalComponent} style={style}>
              Child Component C
            </div>
          )}
        />
      </form>
    </section>
  )
}

function IsolateRender({ isIsolatePlay }: { isIsolatePlay: boolean }) {
  return (
    <div className={containerStyles.centerContent}>
      <h1 className={typographyStyles.h1}>{home.isolateRender.title}</h1>

      {home.isolateRender.description}

      <div className={styles.wrapper}>
        <Animate
          play={isIsolatePlay}
          start={{
            opacity: 0,
            transform: "translateX(-20px)",
          }}
          end={{
            opacity: 1,
          }}
          easeType="ease-in"
          render={({ style }) => {
            return (
              <section style={style} id="isolate">
                <form className={formStyles.demoForm}>
                  <h2> React Hook Form</h2>
                  <IsoLateInput />
                  <div className={styles.externalComponent}>
                    Child Component A
                  </div>
                  <div className={styles.externalComponent}>
                    Child Component B
                  </div>
                  <div className={styles.externalComponent}>
                    Child Component C
                  </div>
                </form>
              </section>
            )
          }}
        />
        <Animate
          play={isIsolatePlay}
          start={{
            opacity: 0,
            transform: "translateY(20px)",
          }}
          end={{
            opacity: 1,
          }}
          delay={0.25}
          easeType="ease-in"
        >
          <p
            style={{
              background: "#081229",
              color: "white",
            }}
          >
            VS
          </p>
          <div className={styles.line} />
        </Animate>
        <Animate
          play={isIsolatePlay}
          start={{
            opacity: 0,
            transform: "translateX(20px)",
          }}
          end={{
            opacity: 1,
          }}
          easeType="ease-in"
          render={({ style }) => {
            return <ControlledInputs style={style} />
          }}
        />
      </div>
    </div>
  )
}

export default memo(IsolateRender)
