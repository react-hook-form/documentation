import * as React from "react"
import { navigate } from "@reach/router"
import Form from "./Form"
import Header from "./Header"
import Watcher from "./Watcher"
import CodeCompareSection from "./CodeCompareSection"
import CodePerfCompareSection from "./CodePerfCompareSection"
import IsolateRender from "./IsolateRender"
import FooterContent from "./Footer"
import Builder from "./BuilderPage"
import FeaturesList from "./FeaturesList"
import { useStateMachine } from "little-state-machine"
import home from "../data/home"
import translateLink from "./logic/translateLink"
import * as typographyStyles from "../styles/typography.module.css"
import * as containerStyles from "../styles/container.module.css"
import * as buttonStyles from "../styles/button.module.css"
import * as styles from "./HomePage.module.css"

const { useState, useRef, useEffect } = React

const options = {
  rootMargin: "0px 0px",
  threshold: [1],
}

function HomePage({
  location,
  defaultLang,
}: {
  location: {
    search: string
    pathname: string
  }
  defaultLang: string
}) {
  const [submitData, updateSubmitData] = useState({})
  const [showBuilder, toggleBuilder] = useState(false)
  const HomeRef = useRef(null)
  const [isPlayFeature, setFeaturePlay] = useState(false)
  const [isPlayCodeCompare, setCodeComparePlay] = useState(false)
  const [isIsolatePlay, setIsolatePlay] = useState(false)
  // const [isCardPlay, setCardPlay] = useState(false)
  const [isPlayRender, setRenderPlay] = useState(false)
  const [formUpdated, setFormUpdated] = useState(false)
  const [isPlayWatch, setWatchPlay] = useState(false)
  const {
    state,
    state: { language, setting = {} },
  } = useStateMachine()
  const lightMode = state?.setting?.lightMode
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }

  const onSubmit = (data) => {
    updateSubmitData(data)
  }

  useEffect(() => {
    if (location.search.startsWith("?goToDemo")) {
      setTimeout(() => {
        HomeRef.current.scrollIntoView({ behavior: "smooth" })

        if (location.search.startsWith("?goToDemo&updated=true")) {
          setFormUpdated(true)
        }
      }, 100)
    }

    if (!IntersectionObserver) {
      setFeaturePlay(true)
      setCodeComparePlay(true)
    }

    const featureList = document.querySelector("#featureLast")
    const codeComparison = document.querySelector("#codeComparison")
    const rendering = document.querySelector("#rendering")
    const isolate = document.querySelector("#isolate")
    const watch = document.querySelector("#watch")
    // const card = document.querySelector("#card")

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === featureList && !isPlayFeature) {
            setFeaturePlay(true)
          }
          if (entry.target === codeComparison && !isPlayCodeCompare) {
            setCodeComparePlay(true)
          }
          if (entry.target === rendering && !isPlayRender) {
            setRenderPlay(true)
          }
          if (entry.target === isolate && !isIsolatePlay) {
            setIsolatePlay(true)
          }
          if (entry.target === watch && !isPlayWatch) {
            setWatchPlay(true)
          }
          // if (entry.target === card && !isCardPlay) {
          //   setCardPlay(true)
          // }
        }
      })
    }, options)

    observer.observe(featureList)
    observer.observe(codeComparison)
    observer.observe(rendering)
    observer.observe(isolate)
    observer.observe(watch)
    // observer.observe(card)

    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.root}>
      {showBuilder && (
        <Builder
          showBuilder
          toggleBuilder={toggleBuilder}
          HomeRef={HomeRef}
          defaultLang={defaultLang}
        />
      )}

      <Header
        // isCardPlay={isCardPlay}
        homeRef={HomeRef}
        defaultLang={defaultLang}
      />

      <FeaturesList
        isPlayFeature={isPlayFeature}
        currentLanguage={currentLanguage}
      />

      <CodeCompareSection
        isPlayCodeCompare={isPlayCodeCompare}
        currentLanguage={currentLanguage}
        setting={setting}
      />

      <IsolateRender
        isIsolatePlay={isIsolatePlay}
        currentLanguage={currentLanguage}
      />

      <Watcher
        lightMode={lightMode}
        isPlayWatch={isPlayWatch}
        currentLanguage={currentLanguage}
      />

      <CodePerfCompareSection
        isPlayRender={isPlayRender}
        currentLanguage={currentLanguage}
      />

      <div className={containerStyles.centerContent}>
        <h1 className={typographyStyles.h1}>Highlights</h1>

        <p className={typographyStyles.homeParagraph}>
          This project is getting recognized by the community and industry. It's
          helping more developers to build forms in React than ever.
        </p>

        <section className={styles.feedback}>
          <div>
            <h3>Javascript Rising Star</h3>
            <p>
              React Hook Form have matured and evolved around hooks. Simplifies
              a piece of React development.
            </p>
          </div>

          <div>
            <h3>React Open Source Awards</h3>
            <p>
              The winner of 2020 GitNation React OS Award for the category of
              Productivity Booster.
            </p>
          </div>

          <div>
            <h3>Technology Radar</h3>

            <p>
              The project is fortunate enough to be under the radar for the
              Languages & Frameworks section.
            </p>
          </div>
        </section>
      </div>

      <div className={containerStyles.centerContent}>
        <h1 className={typographyStyles.h1}>The Community</h1>

        <p className={typographyStyles.homeParagraph}>
          Build and drive by the community. On a mission to make every React
          developer's life easier when it comes to building forms.
        </p>

        <section className={styles.feedback}>
          <div>
            <svg viewBox="0 0 512 512">
              <path
                d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
              <path
                d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
            </svg>
            <p>
              This is where it's at. A React form library that is both well
              thought out and flexible enough to get out of your way when you
              need it to. After fussing around with React forms for years,
              switching to react-hook-form feels like a superpower. Everything
              runs faster and my code is cleaner.
            </p>
          </div>

          <div>
            <svg viewBox="0 0 512 512">
              <path
                d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
              <path
                d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
            </svg>
            <p>
              Creating a form is no more complicated while building a react
              application with the help of react-hook-form. Most of the time I
              use this package for creating a form as validation is so much
              simple here. It is the best form maker for me while I stop to work
              with formika. Very nice user interface and performance are good.
            </p>
          </div>

          <div>
            <svg viewBox="0 0 512 512">
              <path
                d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
              <path
                d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
            </svg>
            <p>
              The best React form library that I have ever used while building a
              react app because of its utility and simplicity. It has a lot of
              useful tools and doesn’t require much code compared to Formik, and
              Redux Form. As the number of re-renders in the application is
              small and mounting time is less it is super smooth.
            </p>
          </div>
        </section>
      </div>

      <div ref={HomeRef} />

      <Form
        {...{
          onSubmit,
          submitData,
          toggleBuilder,
          formUpdated,
          currentLanguage,
        }}
      />

      <section className={containerStyles.centerContent}>
        <h1 className={typographyStyles.h1}>
          {home.findInteresting[currentLanguage].heading}
        </h1>
        {home.findInteresting[currentLanguage].description}
        <div
          className={buttonStyles.buttonsGroup}
          style={{
            maxWidth: 500,
          }}
        >
          <button
            className={buttonStyles.primaryButton}
            onClick={() => {
              navigate(translateLink("get-started", currentLanguage))
            }}
          >
            {home.getStarted[currentLanguage]}
          </button>
          <button
            className={buttonStyles.primaryButton}
            onClick={() => {
              navigate(translateLink("api", currentLanguage))
            }}
          >
            API
          </button>
        </div>
      </section>

      <FooterContent currentLanguage={currentLanguage} />
    </div>
  )
}

export default React.memo(HomePage)
