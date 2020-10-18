import * as React from "react"
import { AnimateGroup, AnimateKeyframes } from "react-simple-animate"
import home from "../data/home"
import generic from "../data/generic"
import { useStateMachine } from "little-state-machine"
import typographyStyles from "../styles/typography.module.css"
import styles from "./FeatureList.module.css"

const props = {
  keyframes: [
    { 0: "opacity: 0; transform: scale(0)" },
    { 50: "opacity: 0.3; transform: scale(1.3)" },
    { 70: "transform: scale(0.8)" },
    { 100: "transform: scale(1)" },
  ],
  fillMode: "forwards" as const,
  duration: 0.3,
}

function FeaturesList({
  isPlayFeature,
  currentLanguage,
}: {
  isPlayFeature: boolean
  currentLanguage: string
}) {
  const { state } = useStateMachine()
  const lightMode = state?.setting?.lightMode

  return (
    <div className={styles.features}>
      <AnimateGroup play={isPlayFeature}>
        <div
          className={`${styles.featuresContent} ${
            lightMode ? styles.lightFeaturesContent : ""
          }`}
        >
          <article id="featureLast">
            <AnimateKeyframes {...props} sequenceIndex={0}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
              >
                <title>People</title>
                <path
                  d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
                <path
                  d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                />
                <path
                  d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
                <path
                  d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                />
              </svg>
            </AnimateKeyframes>
            <h3>{home.features[currentLanguage][0].title}</h3>
            <p>{home.features[currentLanguage][0].description}</p>
          </article>

          <article>
            <AnimateKeyframes {...props} sequenceIndex={1}>
              <svg viewBox="0 0 512 512">
                <title>{home.features[currentLanguage][1].title}</title>
                <path
                  fill="white"
                  d="M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z"
                />
              </svg>
            </AnimateKeyframes>
            <h3>{home.features[currentLanguage][1].title}</h3>
            <p>{home.features[currentLanguage][1].description}</p>
          </article>

          <article>
            <AnimateKeyframes {...props} sequenceIndex={2}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title>{home.features[currentLanguage][2].title}</title>
                <path
                  d="M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 002.33 2.77h0a2.36 2.36 0 001.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 00-2.44-2.75h0a2.42 2.42 0 00-1.95 1z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
              </svg>
            </AnimateKeyframes>
            <h3>{home.features[currentLanguage][2].title}</h3>
            <p>{home.features[currentLanguage][2].description}</p>
          </article>

          <article>
            <AnimateKeyframes {...props} sequenceIndex={3}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
              >
                <title>{home.features[currentLanguage][3].title}</title>
                <path d="M326.1 231.9l-47.5 75.5a31 31 0 01-7 7 30.11 30.11 0 01-35-49l75.5-47.5a10.23 10.23 0 0111.7 0 10.06 10.06 0 012.3 14z" />
                <path
                  d="M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0056.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0037.1-.1 173.13 173.13 0 01254.8 0 25.19 25.19 0 0037.1.1l3.2-3.5A223.18 223.18 0 00480 287.9C480 164.2 379.7 64 256 64z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                  d="M256 128v32M416 288h-32M128 288H96M165.49 197.49l-22.63-22.63M346.51 197.49l22.63-22.63"
                />
              </svg>
            </AnimateKeyframes>

            <h3>{home.features[currentLanguage][3].title}</h3>
            <p>{home.features[currentLanguage][3].description}</p>
          </article>

          <article>
            <AnimateKeyframes {...props} sequenceIndex={4}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
              >
                <title>{home.features[currentLanguage][4].title}</title>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M413.66 246.1H386a2 2 0 01-2-2v-77.24A38.86 38.86 0 00345.14 128H267.9a2 2 0 01-2-2V98.34c0-27.14-21.5-49.86-48.64-50.33a49.53 49.53 0 00-50.4 49.51V126a2 2 0 01-2 2H87.62A39.74 39.74 0 0048 167.62V238a2 2 0 002 2h26.91c29.37 0 53.68 25.48 54.09 54.85.42 29.87-23.51 57.15-53.29 57.15H50a2 2 0 00-2 2v70.38A39.74 39.74 0 0087.62 464H158a2 2 0 002-2v-20.93c0-30.28 24.75-56.35 55-57.06 30.1-.7 57 20.31 57 50.28V462a2 2 0 002 2h71.14A38.86 38.86 0 00384 425.14v-78a2 2 0 012-2h28.48c27.63 0 49.52-22.67 49.52-50.4s-23.2-48.64-50.34-48.64z"
                />
              </svg>
            </AnimateKeyframes>
            <h3>{home.features[currentLanguage][4].title}</h3>
            <p>{home.features[currentLanguage][4].description}</p>
          </article>

          <article>
            <AnimateKeyframes {...props} sequenceIndex={5}>
              <svg viewBox="0 0 512 512">
                <title>{home.features[currentLanguage][5].title}</title>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M176 464h160M256 464V336M384 224c0-50.64-.08-134.63-.12-160a16 16 0 00-16-16l-223.79.26a16 16 0 00-16 15.95c0 30.58-.13 129.17-.13 159.79 0 64.28 83 112 128 112S384 288.28 384 224z"
                />
                <path
                  d="M128 96H48v16c0 55.22 33.55 112 80 112M384 96h80v16c0 55.22-33.55 112-80 112"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
              </svg>
            </AnimateKeyframes>
            <h3>{home.features[currentLanguage][5].title}</h3>
            <p>{home.features[currentLanguage][5].description}</p>
          </article>
        </div>
      </AnimateGroup>
    </div>
  )
}

export default React.memo(FeaturesList)
