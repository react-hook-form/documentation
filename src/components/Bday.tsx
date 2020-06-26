import * as React from "react"
import { AnimateKeyframes, Animate, AnimateGroup } from "react-simple-animate"
import styles from "./Bday.module.css"

const list = [
  <p key="1">
    ★ Better <strong>Typescript</strong> Support
  </p>,
  <p key="2">
    ★ <strong>Smaller</strong> Package Size
  </p>,
  <p key="3">★ API Refinements</p>,
  <p key="4">
    ★ Improved <strong>resolver</strong> support schemas
  </p>,
  <p key="4">
    ★ useForm <strong>shouldUnregister</strong>
  </p>,
  <p key="5">
    ★ New custom hook <strong>useWatch</strong>
  </p>,
]

export default ({ isCardPlay }: { isCardPlay: boolean }) => {
  return (
    <AnimateGroup play={isCardPlay}>
      <Animate
        sequenceIndex={0}
        start={{ opacity: 0 }}
        end={{ opacity: 1 }}
        duration={0.3}
      >
        <div id="card" className={styles.root}>
          <Animate
            sequenceIndex={1}
            start={{
              opacity: "0",
            }}
            delay={0.1}
            easeType="ease-in"
            render={({ style }) => {
              return (
                <>
                  <h1
                    style={{
                      ...style,
                      fontSize: 140,
                      marginTop: 20,
                      marginLeft: 20,
                    }}
                  >
                    V6
                  </h1>
                </>
              )
            }}
          />

          <Animate
            sequenceIndex={2}
            start={{
              transform: "translate(130px, 80px) scale(1.3)",
            }}
            delay={0.2}
            easeType="ease-in"
            render={({ style }) => <div style={style}></div>}
          />

          <Animate
            sequenceIndex={3}
            start={{
              opacity: "0",
            }}
            delay={0.1}
            easeType="ease-in"
            render={({ style }) => {
              return (
                <div className={styles.achievement} style={style}>
                  <div className={styles.achievementList}>
                    <h4>
                      🏅<span>Achievements</span>
                    </h4>
                    <ul>
                      {list.map((item, index) => (
                        <Animate
                          key={item}
                          sequenceIndex={index + 3}
                          start={{
                            transform: "translateX(10px)",
                            opacity: 0,
                          }}
                          easeType="ease-in"
                          duration={0.15}
                          delay={index === 0 ? 0.2 : 0.01}
                          render={({ style }) => <li style={style}>{item}</li>}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              )
            }}
          />
        </div>
      </Animate>
    </AnimateGroup>
  )
}
