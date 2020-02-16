import * as React from "react"
import { AnimateGroup, AnimateKeyframes } from "react-simple-animate"
import home from "../data/home"
import generic from "../data/generic"
import typographyStyles from "../styles/typography.module.css"
import styles from "./DevToolFeaturesList.module.css"
import { useStateMachine } from "little-state-machine"

const props = {
  keyframes: [
    { 0: "opacity: 0; transform: scale(0)" },
    { 50: "opacity: 0.3; transform: scale(1.3)" },
    { 70: "transform: scale(0.8)" },
    { 100: "transform: scale(1)" },
  ],
  fillMode: "forwards" as "forwards",
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
      <h2 className={typographyStyles.title}>
        {generic.features[currentLanguage]}
      </h2>

      <AnimateGroup play={isPlayFeature}>
        <div
          className={`${styles.featuresContent} ${
            lightMode ? styles.lightFeaturesContent : ""
          }`}
        >
          <article>
            <AnimateKeyframes {...props} sequenceIndex={0}>
              <div
                style={{
                  margin: "0 auto",
                  display: "flex",
                  width: 45,
                  height: 45,
                  border: `2px solid ${lightMode ? "#2d2d2d" : "white"}`,
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 21,
                  marginTop: 4,
                }}
              >
                <code
                  style={{
                    lineHeight: "19px",
                    fontSize: "15px",
                    ...(lightMode ? { color: "#2d2d2d", fontWeight: 800 } : {}),
                  }}
                >{`</>`}</code>
              </div>
            </AnimateKeyframes>
            <h3>{home.features[currentLanguage][0].title}</h3>
            <p>
              React Hook Form focus on deliver great experience in terms of
              building forms validation with React. This tool is aimed to help
              debug your forms.
            </p>
          </article>
          <article>
            <AnimateKeyframes {...props} sequenceIndex={0}>
              <div
                style={{
                  margin: "0 auto",
                  display: "flex",
                  width: 45,
                  height: 45,
                  border: `2px solid ${lightMode ? "#2d2d2d" : "white"}`,
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 21,
                  marginTop: 4,
                }}
              >
                <code
                  style={{
                    lineHeight: "19px",
                    fontSize: "15px",
                    ...(lightMode ? { color: "#2d2d2d", fontWeight: 800 } : {}),
                  }}
                >{`</>`}</code>
              </div>
            </AnimateKeyframes>
            <h3>Open Source</h3>
            <p>
              React Hook Form DevTools is an open source project, so we can all
              improve and introduce more features on the long run.
            </p>
          </article>
        </div>
      </AnimateGroup>
    </div>
  )
}

export default React.memo(FeaturesList)
