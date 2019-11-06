import * as React from "react"
import { H1 } from "../styles/typography"
import { PrimaryButton } from "../styles/buttons"
import generic from "../data/generic"
import { CenterContent } from "../styles/containers"

export default function StarRepo({
  currentLanguage,
}: {
  currentLanguage: string
}) {
  return (
    <CenterContent maxWidth={600} style={{ marginTop: 40 }}>
      <H1>{generic.needYourSupport[currentLanguage].title}</H1>
      <p>{generic.needYourSupport[currentLanguage].description}</p>
      <PrimaryButton
        onClick={() => {
          window.open("https://github.com/react-hook-form/react-hook-form")
        }}
        style={{ margin: "40px auto" }}
      >
        {generic.needYourSupport[currentLanguage].buttonText}
      </PrimaryButton>
    </CenterContent>
  )
}
