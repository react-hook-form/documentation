import * as React from "react"
import styled from "styled-components"
import {
  SubHeading,
  HeadingWithTopMargin,
  QuestionTitle,
} from "../styles/typography"
import Link from "../styles/link"
import SyntaxHighlighterWithCopy from "./SyntaxHighlighterWithCopy"
import SideMenu from "./SideMenu"
import track from "./utils/track"
import { Container, Wrapper } from "../styles/containers"
import accessibleCodeBase from "./codeExamples/accessibleCodeBase"
import accessibleCodeFinal from "./codeExamples/accessibleCodeFinal"

const { useRef } = React

const links = ["Accessibility", "Form Wizard"]

function Advanced() {
  const apiSectionsRef = useRef({
    AccessibilityRef: null,
  })

  const goToSection = name => {
    const url = window.location.href
    const hashIndex = url.indexOf("#")
    const filterName = name.replace(/ /, "")
    if (hashIndex < 0) {
      history.pushState({}, null, `${url}#${filterName}`)
    } else {
      history.pushState({}, null, `${url.substr(0, hashIndex)}#${filterName}`)
    }

    const refName = `${filterName}Ref`
    track({
      category: "Link",
      label: filterName,
      action: `Click - Go to ${filterName} section`,
    })
    if (apiSectionsRef.current[refName]) {
      apiSectionsRef.current[refName].scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Container>
      <HeadingWithTopMargin>Advanced</HeadingWithTopMargin>
      <SubHeading>
        Build complex and accessible forms with React Hook Form.
      </SubHeading>

      <Wrapper>
        <SideMenu isStatic links={links} goToSection={goToSection} />

        <main>
          <QuestionTitle>Accessibility (A11y)</QuestionTitle>
          <p>
            React Hook Form have support on native form validation, which let
            the borrow validate inputs with your rules, however, as most of us
            would have to build forms in a custom design and layout and it's our
            responsibility to make sure our forms are accessible (A11y).
          </p>

          <p>
            The following code example works as intended for validation, however
            it can be improved for accessibility.
          </p>

          <SyntaxHighlighterWithCopy rawData={accessibleCodeBase} />

          <p>
            The following code example is improved version by leveraging ARIA.
          </p>
          <SyntaxHighlighterWithCopy rawData={accessibleCodeFinal} />

          <p>
            After the improvement, the screen reader will say:{" "}
            <i>“Name, edit, invalid entry, This is required.”</i>
          </p>

          <hr />

          <QuestionTitle>Form Wizard / Funnel</QuestionTitle>
          <p>
            It's pretty common to collect user information through different
            pages and sections. We recommend to use state management library to
            store user input through different pages/section. In this example,
            we are going to use{" "}
            <Link
              href="https://github.com/bluebill1049/little-state-machine"
              target="_blank"
            >
              little state machine
            </Link>{" "}
            as our state management library (you can replace it with{" "}
            <Link href="https://github.com/reduxjs/redux" target="_blank">
              redux
            </Link>
            , if you are more familiar).
          </p>
        </main>
      </Wrapper>
    </Container>
  )
}

export default React.memo(Advanced)
