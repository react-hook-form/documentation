import { memo } from "react"
import { AnimateGroup, AnimateKeyframes } from "react-simple-animate"
import home from "../data/home"
import * as styles from "./FeatureList.module.css"
import { AnimateKeyframesProps } from "react-simple-animate/dist/types"

const props: AnimateKeyframesProps = {
  keyframes: [
    { 0: "opacity: 0; transform: scale(0)" },
    { 50: "opacity: 0.3; transform: scale(1.3)" },
    { 70: "transform: scale(0.8)" },
    { 100: "transform: scale(1)" },
  ],
  fillMode: "forwards" as const,
  duration: 0.3,
}

function FeaturesList({ isPlayFeature }: { isPlayFeature: boolean }) {
  return (
    <div className={styles.features}>
      <AnimateGroup play={isPlayFeature}>
        <div className={styles.featuresContent}>
          <article id="featureLast">
            <AnimateKeyframes {...props} sequenceIndex={0}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="3" y1="19" x2="21" y2="19"></line>
                <rect x="5" y="6" width="14" height="10" rx="1"></rect>
              </svg>
            </AnimateKeyframes>
            <h3>{home.features[0].title}</h3>
            <p>{home.features[0].description}</p>
          </article>

          <article>
            <AnimateKeyframes {...props} sequenceIndex={1}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
                <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
              </svg>
            </AnimateKeyframes>
            <h3>{home.features[1].title}</h3>
            <p>{home.features[1].description}</p>
          </article>

          <article>
            <AnimateKeyframes {...props} sequenceIndex={2}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="7" y1="20" x2="17" y2="20"></line>
                <path d="M6 6l6 -1l6 1"></path>
                <line x1="12" y1="3" x2="12" y2="20"></line>
                <path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0"></path>
                <path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0"></path>
              </svg>
            </AnimateKeyframes>
            <h3>{home.features[2].title}</h3>
            <p>{home.features[2].description}</p>
          </article>

          <article>
            <AnimateKeyframes {...props} sequenceIndex={3}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 17h13.4a3 3 0 0 0 2.5 -1.34l3.1 -4.66h0h-6.23a4 4 0 0 0 -1.49 .29l-3.56 1.42a4 4 0 0 1 -1.49 .29h-3.73h0h-1l-1.5 4z"></path>
                <line x1="6" y1="13" x2="7.5" y2="8"></line>
                <path d="M6 8h8l2 3"></path>
              </svg>
            </AnimateKeyframes>

            <h3>{home.features[3].title}</h3>
            <p>{home.features[3].description}</p>
          </article>

          <article>
            <AnimateKeyframes {...props} sequenceIndex={4}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="8" y="8" width="12" height="12" rx="2"></rect>
                <line x1="4" y1="4" x2="4" y2="4.01"></line>
                <line x1="8" y1="4" x2="8" y2="4.01"></line>
                <line x1="12" y1="4" x2="12" y2="4.01"></line>
                <line x1="16" y1="4" x2="16" y2="4.01"></line>
                <line x1="4" y1="8" x2="4" y2="8.01"></line>
                <line x1="4" y1="12" x2="4" y2="12.01"></line>
                <line x1="4" y1="16" x2="4" y2="16.01"></line>
              </svg>
            </AnimateKeyframes>
            <h3>{home.features[4].title}</h3>
            <p>{home.features[4].description}</p>
          </article>

          <article>
            <AnimateKeyframes {...props} sequenceIndex={5}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
              </svg>
            </AnimateKeyframes>
            <h3>{home.features[5].title}</h3>
            <p>{home.features[5].description}</p>
          </article>
        </div>
      </AnimateGroup>
    </div>
  )
}

export default memo(FeaturesList)
