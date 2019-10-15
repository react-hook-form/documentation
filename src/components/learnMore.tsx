import * as React from "react"
import { navigate } from "@reach/router"
import { H1 } from "../styles/typography"
import { PrimaryButton } from "../styles/buttons"
import { CenterContent } from "../styles/containers"

export default function LearnMore() {
  return (
    <CenterContent>
      <H1>Want to learn more?</H1>
      <p>Checkout the React Hook Form documentation and learn all the API.</p>
      <PrimaryButton
        onClick={() => {
          navigate("/api")
        }}
        style={{ margin: "40px auto" }}
      >
        Checkout Hook API
      </PrimaryButton>
    </CenterContent>
  )
}
