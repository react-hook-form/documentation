import { useState, useRef, useEffect, memo } from "react"
import Form from "./Form"
import Header from "./Header"
import Watcher from "./Watcher"
import CodeCompareSection from "./CodeCompareSection"
import CodePerfCompareSection from "./CodePerfCompareSection"
import IsolateRender from "./IsolateRender"
import FooterContent from "./Footer"
import Builder from "./BuilderPage"
import FeaturesList from "./FeaturesList"
import home from "../data/home"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import buttonStyles from "../styles/button.module.css"
import styles from "./HomePage.module.css"
import { SponsorsList } from "./sponsorsList"
import { useRouter } from "next/router"
import { GeneralObserver } from "./general-observer"
import Link from "next/link"

function HomePage() {
  const [submitData, updateSubmitData] = useState({})
  const [showBuilder, toggleBuilder] = useState(false)
  const HomeRef = useRef<HTMLDivElement>(null)

  const [featurePlay, setFeaturePlay] = useState(false)
  const [codeComparePlay, setCodeComparePlay] = useState(false)
  const [isolatePlay, setIsolatePlay] = useState(false)
  // const [isCardPlay, setCardPlay] = useState(false)
  const [renderPlay, setRenderPlay] = useState(false)
  const [formUpdated, setFormUpdated] = useState(false)
  const [watchPlay, setWatchPlay] = useState(false)
  const { query } = useRouter()

  const onSubmit = (data) => {
    updateSubmitData(data)
  }

  useEffect(() => {
    if (query["goToDemo"] === "") {
      setTimeout(() => {
        HomeRef.current?.scrollIntoView({ behavior: "smooth" })

        if (query["updated"]) {
          setFormUpdated(true)
        }
      }, 100)
    }
  }, [query])

  return (
    <div className={styles.root}>
      {showBuilder && (
        <Builder showBuilder toggleBuilder={toggleBuilder} HomeRef={HomeRef} />
      )}

      <Header
        // isCardPlay={isCardPlay}
        homeRef={HomeRef}
      />

      <GeneralObserver
        onEnter={() => {
          setFeaturePlay(true)
        }}
      >
        <FeaturesList isPlayFeature={featurePlay} />
      </GeneralObserver>
      <SponsorsList />

      <GeneralObserver
        onEnter={() => {
          setCodeComparePlay(true)
        }}
      >
        <CodeCompareSection isPlayCodeCompare={codeComparePlay} />
      </GeneralObserver>
      <GeneralObserver
        onEnter={() => {
          setIsolatePlay(true)
        }}
      >
        <IsolateRender isIsolatePlay={isolatePlay} />
      </GeneralObserver>
      <GeneralObserver
        onEnter={() => {
          setWatchPlay(true)
        }}
      >
        <Watcher isPlayWatch={watchPlay} />
      </GeneralObserver>

      <GeneralObserver
        onEnter={() => {
          setRenderPlay(true)
        }}
      >
        <CodePerfCompareSection isPlayRender={renderPlay} />
      </GeneralObserver>

      <div className={containerStyles.centerContent}>
        <h1 className={typographyStyles.h1}>Highlights</h1>

        <p className={typographyStyles.homeParagraph}>
          This project is getting recognized by the community and industry. It's
          helping more developers to build forms in React than ever.
        </p>

        <section className={styles.feedback}>
          <div>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
              />
            </svg>

            <h3>Javascript Rising Star</h3>
            <p>
              React Hook Form have matured and evolved around hooks. Simplifies
              a piece of React development.
            </p>
          </div>

          <div>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
              />
            </svg>
            <h3>React Open Source Awards</h3>
            <p>
              The winner of 2020 GitNation React OS Award for the category of
              Productivity Booster.
            </p>
          </div>

          <div>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
              />
            </svg>
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
        }}
      />

      <section className={containerStyles.centerContent}>
        <h1 className={typographyStyles.h1}>{home.findInteresting.heading}</h1>
        {home.findInteresting.description}
        <div
          className={buttonStyles.buttonsGroup}
          style={{
            maxWidth: 500,
          }}
        >
          <Link href="/get-started" className={buttonStyles.primaryButton}>
            {home.getStarted}
          </Link>
          <Link href="/docs" className={buttonStyles.primaryButton}>
            API
          </Link>
        </div>
      </section>

      <FooterContent />
    </div>
  )
}

export default memo(HomePage)
