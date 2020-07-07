import * as React from "react"
import { navigate } from "gatsby"
import generic from "../data/generic"
import translateLink from "./logic/translateLink"
import containerStyles from "../styles/container.module.css"
import buttonStyles from "../styles/button.module.css"

export default function LearnMore({
  currentLanguage,
}: {
  currentLanguage: string
}) {
  return (
    <div className={containerStyles.centerContent} style={{ marginTop: 100 }}>
      <h1>{generic.learnMore[currentLanguage].title}</h1>
      <p>{generic.learnMore[currentLanguage].description}</p>

      <button
        className={buttonStyles.primaryButton}
        onClick={() => {
          navigate(translateLink("/api", currentLanguage))
        }}
        style={{ margin: "40px auto" }}
      >
        {generic.learnMore[currentLanguage].buttonText}
      </button>
    </div>
  )
}
