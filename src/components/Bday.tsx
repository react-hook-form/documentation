import * as React from "react"
import { Animate, AnimateGroup } from "react-simple-animate"
import * as styles from "./Bday.module.css"
import { Link } from "gatsby"

const list = [
  <p key="1">
    ★ Strictly <strong>typed</strong> form
  </p>,
  <p key="2">
    ★ <strong>Smaller</strong> Package Size (-13%)
  </p>,
  <p key="3">
    ★ More <strong>performant</strong> than ever
  </p>,
  <p key="5">
    ★ New <strong>Resolver</strong> & <strong>DevTools</strong>
  </p>,
  <p key="4">★ API Refinements</p>,
  <p key="8">
    ★ New custom hook <strong>useFormState</strong>
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
                    V7 <span>is Live!</span>
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
                        <div style={style} className={styles.avatars}>
                          <img
                            src="https://avatars.githubusercontent.com/u/7545547?s=460&v=4"
                            alt="jorisre, RHF maintainer"
                          />
                          <img
                            src="https://avatars2.githubusercontent.com/u/12913947?s=120&v=4"
                            alt="kotarella1110, RHF maintainer"
                          />
                          <img
                            src="https://avatars2.githubusercontent.com/u/10513364?s=120&v=4"
                            alt="Bill, RHF creator"
                          />
                          <img
                            src="https://avatars3.githubusercontent.com/u/35811186?s=120&v=4"
                            alt="pmaier, RHF maintainer"
                          />
                          <img
                            src="https://avatars3.githubusercontent.com/u/32805276?s=120&v=4"
                            alt="JeromeDeLeon, RHF maintainer"
                          />
                          <img
                            src="https://avatars3.githubusercontent.com/u/14539203?s=120&v=4"
                            alt="adhrinae, RHF maintainer"
                          />
                          <img
                            src="https://avatars2.githubusercontent.com/u/34934510?s=120&v=4"
                            alt="keiya01, RHF maintainer"
                          />
                          <img
                            src="https://avatars0.githubusercontent.com/u/855184?s=120&v=4"
                            alt="stramel, RHF maintainer"
                          />
                        </div>
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
                      <span role="img" aria-label="gold-medal">
                        🏅
                      </span>
                      <span>Achievements</span>
                    </h4>
                    <ul>
                      {list.map((item, index) => (
                        <Animate
                          key={`${index}-name`}
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
