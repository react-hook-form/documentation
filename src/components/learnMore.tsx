import * as React from "react"
import { navigate } from "@reach/router"
import { H1 } from "../styles/typography"
import { PrimaryButton } from "../styles/buttons"
import { CenterContent } from "../styles/containers"
import generic from "../data/generic"
import translateLink from "./logic/translateLink"

export default function LearnMore({
  currentLanguage,
}: {
  currentLanguage: string
}) {
  return (
    <CenterContent style={{ marginTop: 40 }}>
      <H1>{generic.learnMore[currentLanguage].title}</H1>
      <p>{generic.learnMore[currentLanguage].description}</p>

      <PrimaryButton
        onClick={() => {
          navigate(translateLink("api", currentLanguage))
        }}
        style={{ margin: "40px auto" }}
      >
        {generic.learnMore[currentLanguage].buttonText}
      </PrimaryButton>
    </CenterContent>
  )
}
