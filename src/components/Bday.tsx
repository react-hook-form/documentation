import * as React from "react"
import { AnimateKeyframes, Animate, AnimateGroup } from "react-simple-animate"
import styles from "./Bday.module.css"

const list = [
  <p>
    ★ OS Awards: nominated as <br />
    <strong>Breakthrough of the year</strong>
  </p>,
  <p>
    ★ NPM downloads: <strong>1.5M</strong>
  </p>,
  <p>
    ★ Github stars: <strong>7.5K</strong>
  </p>,
  <p>
    ★ Github commit: <strong>1.6K</strong>
  </p>,
  <p>
    ★ Github issues resolved <strong>600+</strong>
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
            sequenceIndex={2}
            start={{
              opacity: "0",
            }}
            delay={0.1}
            easeType={"ease-in"}
            render={({ style }) => {
              return (
                <>
                  <div className={styles.happy} style={style}>
                    Happy
                  </div>
                  <div className={styles.birthday} style={style}>
                    Birthday
                    <p>06/03/2019</p>
                  </div>
                  <div className={styles.first} style={style}>
                    1<sup>st</sup>
                  </div>
                </>
              )
            }}
          />
          <Animate
            sequenceIndex={1}
            start={{
              transform: "translate(130px, 80px) scale(1.3)",
            }}
            delay={0.2}
            easeType={"ease-in"}
            render={({ style }) => (
              <div className={styles.cake} style={style}>
                <svg viewBox="0 0 100 80">
                  <g>
                    <path d="M78.3330078,76.703125h-4.1660156V54.5361328c0-3.4003906-2.7666016-6.1665039-6.1669922-6.1665039H53.6875v-6.34375   c0-1.8320313-1.4912109-3.3227539-3.3232422-3.3227539h-0.7285156c-1.8320313,0-3.3232422,1.4907227-3.3232422,3.3227539v6.34375   H32c-3.4003906,0-6.1669922,2.7661133-6.1669922,6.1665039V76.703125h-4.1660156c-0.5527344,0-1,0.4477539-1,1s0.4472656,1,1,1   h4.1660156h48.3339844h4.1660156c0.5527344,0,1-0.4477539,1-1S78.8857422,76.703125,78.3330078,76.703125z M48.3125,42.0258789   c0-0.7294922,0.59375-1.3227539,1.3232422-1.3227539h0.7285156c0.7294922,0,1.3232422,0.5932617,1.3232422,1.3227539v6.34375   h-3.375V42.0258789z M32,50.3696289h14.3125h7.375H68c2.2978516,0,4.1669922,1.8691406,4.1669922,4.1665039v4.6525269   c-2.6051025,0.2456665-4.0944824,1.4241943-5.4189453,2.4832153c-1.4072266,1.1254883-2.6220703,2.0976563-5.1679688,2.0976563   s-3.7607422-0.972168-5.1679688-2.0976563c-1.4863281-1.1884766-3.1708984-2.5356445-6.4179688-2.5356445   c-3.2451172,0-4.9287109,1.347168-6.4140625,2.5356445c-1.40625,1.1254883-2.6210938,2.0976563-5.1650391,2.0976563   c-2.5449219,0-3.7597656-0.972168-5.1660156-2.0976563c-1.3242188-1.0588989-2.8127441-2.2374268-5.4160156-2.4831543v-4.6525879   C27.8330078,52.2387695,29.7021484,50.3696289,32,50.3696289z M27.8330078,76.703125V61.1968994   c1.887207,0.22229,2.9589844,1.0709229,4.1660156,2.0369873c1.4863281,1.1884766,3.1699219,2.5356445,6.4160156,2.5356445   s4.9296875-1.347168,6.4150391-2.5361328c1.40625-1.1254883,2.6201172-2.097168,5.1640625-2.097168   c2.5458984,0,3.7607422,0.972168,5.1679688,2.0976563c1.4863281,1.1884766,3.1708984,2.5356445,6.4179688,2.5356445   s4.9316406-1.347168,6.4179688-2.5356445c1.2080078-0.9661865,2.2800293-1.8148804,4.1689453-2.0371094V76.703125H27.8330078z" />
                    <g
                      style={{
                        perspective: "2000px",
                      }}
                    >
                      <AnimateKeyframes
                        play
                        direction="alternate"
                        iterationCount="infinite"
                        duration={2}
                        keyframes={[
                          "transform: scaleY(1)",
                          "transform: scaleY(1.03)",
                          "transform: rotateY(40deg)",
                          "transform: rotateY(20deg) scaleY(1.01)",
                          "transform: scaleY(1)",
                        ]}
                        render={({ style }) => (
                          <g style={{ ...style, transformOrigin: "50% 100%" }}>
                            <path d="M50,38.2514648c2.8779297,0,5.21875-2.3413086,5.21875-5.21875c0-2.4702148-3.6240234-8.9423828-4.3505859-10.2143555   L50,21.2973633l-0.8681641,1.5209961C48.4052734,24.090332,44.78125,30.5625,44.78125,33.0327148   C44.78125,35.9101563,47.1220703,38.2514648,50,38.2514648z M50,25.3813477   c1.4912109,2.7783203,3.21875,6.402832,3.21875,7.6513672c0,1.7749023-1.4443359,3.21875-3.21875,3.21875   s-3.21875-1.4438477-3.21875-3.21875C46.78125,31.784668,48.5087891,28.1601563,50,25.3813477z" />
                          </g>
                        )}
                      />
                    </g>
                  </g>
                </svg>
              </div>
            )}
          />

          <Animate
            sequenceIndex={3}
            start={{
              opacity: "0",
            }}
            delay={0.1}
            easeType={"ease-in"}
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
                          sequenceIndex={index + 3}
                          start={{
                            transform: "translateX(10px)",
                            opacity: 0,
                          }}
                          easeType={"ease-in"}
                          duration={0.15}
                          delay={index === 0 ? 0.2 : 0.01}
                          render={({ style }) => <li style={style}>{item}</li>}
                        />
                      ))}
                    </ul>

                    <a
                      href="https://github.com/react-hook-form/react-hook-form/stargazers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      🎁 Send ★ Gift
                    </a>
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
