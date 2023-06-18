import { Animate, AnimateGroup } from "react-simple-animate"
import { useRouter } from "next/router"
// import Bday from "./Bday"
import home from "../data/home"
import typographyStyles from "../styles/typography.module.css"
import buttonStyles from "../styles/button.module.css"
import styles from "./Header.module.css"
import { useState, RefObject } from "react"

const LogoSvg = (
  <>
    <path d="M73.56,13.32H58.14a8.54,8.54,0,0,0-16.27,0H26.44a11,11,0,0,0-11,11V81.63a11,11,0,0,0,11,11H73.56a11,11,0,0,0,11-11V24.32A11,11,0,0,0,73.56,13.32Zm-30.92,2a1,1,0,0,0,1-.79,6.54,6.54,0,0,1,12.78,0,1,1,0,0,0,1,.79h5.38v6.55a3,3,0,0,1-3,3H40.25a3,3,0,0,1-3-3V15.32ZM82.56,81.63a9,9,0,0,1-9,9H26.44a9,9,0,0,1-9-9V24.32a9,9,0,0,1,9-9h8.81v6.55a5,5,0,0,0,5,5h19.5a5,5,0,0,0,5-5V15.32h8.81a9,9,0,0,1,9,9Z" />
    <path
      style={{ transform: "translateX(-25px)" }}
      d="M71.6,45.92H54a1,1,0,0,0,0,2H71.6a1,1,0,0,0,0-2Z"
    />
    <path d="M71.6,45.92H54a1,1,0,0,0,0,2H71.6a1,1,0,0,0,0-2Z" />
    <path
      style={{ transform: "translateX(-25px)" }}
      d="M71.1,69.49H53.45a1,1,0,1,0,0,2H71.1a1,1,0,0,0,0-2Z"
    />
    <path d="M71.1,69.49H53.45a1,1,0,1,0,0,2H71.1a1,1,0,0,0,0-2Z" />
  </>
)

export default function Header({
  homeRef,
}: // isCardPlay,
{
  homeRef: RefObject<HTMLDivElement>
  isCardPlay?: boolean
}) {
  const [isWeb, setIsWeb] = useState(true)
  const router = useRouter()

  return (
    <>
      <AnimateGroup play>
        <header className={styles.head} id="main">
          <Animate
            sequenceIndex={0}
            duration={0.2}
            start={{
              transform: "translateY(20px)",
              opacity: 0,
            }}
            end={{
              transform: "translateY(0)",
            }}
            easeType="ease-in"
            render={({ style }) => (
              <svg className={styles.logo} style={style} viewBox="0 0 100 100">
                {LogoSvg}
              </svg>
            )}
          />

          <Animate
            sequenceIndex={1}
            duration={0.2}
            start={{
              transform: "translateY(20px)",
              opacity: 0,
            }}
            end={{
              transform: "translateY(0)",
            }}
            easeType="ease-in"
            render={({ style }) => (
              <h1
                className={`${typographyStyles.heading} ${styles.logoHeading}`}
                style={style}
              >
                <svg className={styles.desktopLogo} viewBox="0 0 100 100">
                  {LogoSvg}
                </svg>{" "}
                React Hook Form
              </h1>
            )}
          />

          <Animate
            sequenceIndex={2}
            start={{
              transform: "translateY(20px)",
              opacity: 0,
            }}
            end={{
              transform: "translateY(0)",
            }}
            easeType="ease-in"
            render={({ style }) => (
              <p
                className={typographyStyles.subHeading}
                style={{ marginBottom: 0, maxWidth: 660, ...style }}
              >
                {home.slogan}
              </p>
            )}
          />

          <Animate
            sequenceIndex={3}
            start={{
              transform: "translateY(20px)",
              opacity: 0,
            }}
            end={{
              transform: "translateY(0)",
            }}
            easeType="ease-in"
            render={({ style }) => (
              <div
                className={buttonStyles.buttonsGroup}
                style={{
                  ...style,
                  minWidth: 300,
                }}
              >
                <button
                  className={buttonStyles.primaryButton}
                  onClick={() => {
                    homeRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    })
                  }}
                >
                  {home.demo}
                </button>

                <button
                  className={buttonStyles.primaryButton}
                  onClick={() => {
                    router.push("get-started")
                  }}
                >
                  {home.getStarted} &nbsp;<span>▶</span>
                </button>
              </div>
            )}
          />
        </header>

        <h4 className={styles.videoHeading}>React Web</h4>
        <div
          className={isWeb ? styles.videoWrapperShow : styles.videoWrapperHide}
        >
          <div style={{ position: "relative" }}>
            <Animate
              sequenceIndex={4}
              delay={0.1}
              start={{ opacity: 0 }}
              end={{ opacity: 1 }}
              duration={0.4}
              easeType="ease-in"
              render={({ style }) => (
                <video
                  className={styles.video}
                  id="tabPanel-1"
                  aria-labelledby="tabPanel-1"
                  controls
                  playsInline
                  muted
                  style={style}
                >
                  <source
                    src="/video/react-hook-form-demo-video.mp4"
                    type="video/mp4"
                  />
                </video>
              )}
            />
          </div>
        </div>

        <div
          className={isWeb ? styles.videoWrapperHide : styles.videoWrapperShow}
        >
          <h4 className={styles.videoHeading}>React Native</h4>
          <video
            className={styles.video}
            id="tabPanel-2"
            aria-labelledby="tabPanel-2"
            controls
            playsInline
            muted
          >
            <source
              src="/video/react-hook-form-native-demo-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div
          style={{
            textAlign: "center",
          }}
        >
          <div
            className={styles.toggleGroup}
            role="tablist"
            aria-label="Select video"
          >
            <button
              aria-label="show web video"
              aria-selected={isWeb ? "true" : "false"}
              aria-controls="tabPanel-1"
              role="tab"
              disabled={isWeb}
              onClick={() => {
                setIsWeb(true)
              }}
            >
              React Web
            </button>
            <button
              disabled={!isWeb}
              role="tab"
              aria-label="show react native video"
              aria-selected={!isWeb}
              aria-controls="tabPanel-2"
              onClick={() => {
                setIsWeb(false)
              }}
            >
              React Native
            </button>
          </div>
        </div>
      </AnimateGroup>

      {/*<Bday isCardPlay={isCardPlay} />*/}
    </>
  )
}
