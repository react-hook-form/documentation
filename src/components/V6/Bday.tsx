import * as React from "react"
import { Animate, AnimateGroup } from "react-simple-animate"
import styles from "./Bday.module.css"
import { Link } from "gatsby"

const list = [
  <p key="1">
    ★ Better <strong>TypeScript</strong> Support
  </p>,
  <p key="2">
    ★ <strong>Smaller</strong> Package Size
  </p>,
  <p key="3">★ API Refinements</p>,
  <p key="4">
    ★ Improved <strong>Controller</strong>
  </p>,
  <p key="4">★ Support Yup, SuperStruct & Joi</p>,
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
              transform: "translate(20px, 0px)",
              opacity: "0",
            }}
            delay={0.1}
            easeType="ease-in"
            render={({ style }) => {
              return (
                <div style={style}>
                  <h1
                    style={{
                      fontSize: 110,
                      marginTop: 20,
                      marginLeft: 0,
                      marginBottom: 0,
                    }}
                  >
                    V6 <span>is Live!</span>
                  </h1>

                  <Animate
                    sequenceIndex={2}
                    duration={0.2}
                    start={{
                      transform: "translate(0px, 20px) scale(1.1)",
                    }}
                    easeType="ease-in"
                    render={({ style }) => (
                      <div>
                        <p>Thanks to the team members:</p>
                        <Link className={styles.members} to="/about-us">
                          <div style={style} className={styles.avatars}>
                            <img
                              src="https://avatars2.githubusercontent.com/u/12913947?s=120&v=4"
                              alt="RHF team member"
                            />
                            <img
                              src="https://avatars2.githubusercontent.com/u/34934510?s=120&v=4"
                              alt="RHF team member"
                            />
                            <img
                              src="https://avatars3.githubusercontent.com/u/35811186?s=120&v=4"
                              alt="RHF team member"
                            />
                            <img
                              src="https://avatars2.githubusercontent.com/u/10513364?s=120&v=4"
                              alt="RHF team member"
                            />
                            <img
                              src="https://avatars3.githubusercontent.com/u/32805276?s=120&v=4"
                              alt="RHF team member"
                            />
                            <img
                              src="https://avatars0.githubusercontent.com/u/855184?s=120&v=4"
                              alt="RHF team member"
                            />
                            <img
                              src="https://avatars3.githubusercontent.com/u/14539203?s=120&v=4"
                              alt="RHF team member"
                            />
                          </div>
                        </Link>
                      </div>
                    )}
                  />
                </div>
              )
            }}
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
                      <span role="img" aria-label="achievement-medal">
                        🏅Achievements
                      </span>
                    </h4>
                    <ul>
                      {list.map((item, index) => (
                        <Animate
                          key={index}
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

                    <Link to="/api" className={styles.link}>
                      Check out API
                    </Link>
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
