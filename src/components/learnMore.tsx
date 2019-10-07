import * as React from "react"
import { H1 } from "../styles/typography"
import { PrimaryButton } from "../styles/buttons"
import track from "./utils/track"
import { navigate } from "@reach/router"

export default function LearnMore() {
  return (
    <section
      style={{
        textAlign: "center",
      }}
    >
      <H1>Want to learn more?</H1>
      <p>Checkout the React Hook Form documentation and learn all the API.</p>
      <PrimaryButton
        onClick={() => {
          track({
            category: "Button",
            label: "Checkout hook API (Get started)",
            action: "Click - Go to API",
          })
          navigate("/api")
        }}
        style={{ margin: "40px auto" }}
      >
        Checkout Hook API
      </PrimaryButton>
    </section>
  )
}
