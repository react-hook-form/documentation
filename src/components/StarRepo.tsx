import * as React from "react"
import { H1 } from "../styles/typography"
import { PrimaryButton } from "../styles/buttons"

export default function StarRepo() {
  return (
    <section
      style={{
        textAlign: "center",
      }}
    >
      <H1>Need Your Support</H1>
      <p>
        If you find React Hook Form is useful in your React project, please star
        to support the repo and contributors ❤
      </p>
      <PrimaryButton
        onClick={() => {
          window.open("https://github.com/react-hook-form/react-hook-form")
        }}
        style={{ margin: "40px auto" }}
      >
        Star React Hook Form
      </PrimaryButton>
    </section>
  )
}
