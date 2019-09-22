import * as React from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import { SubHeading, HeadingWithTopMargin } from "../styles/typography"
import Link from "../styles/link"
import code from "./codeExamples/defaultExample"
import SyntaxHighlighterWithCopy from "./SyntaxHighlighterWithCopy"
import SideMenu from "./SideMenu"
import track from "./utils/track"
import { Container, Wrapper } from "../styles/containers"
import breakpoints from "../styles/breakpoints"
import accessibleCodeBase from "./codeExamples/accessibleCodeBase"
import accessibleCodeFinal from "./codeExamples/accessibleCodeFinal"

const { useRef, useEffect } = React

export const CodeHeading = styled.code`
  & > h2:before {
    display: inline-block;
    content: "</> ";
  }
`

export const Table = styled.table`
  margin-top: 20px;

  td {
    padding: 10px 20px 10px 0;
    line-height: 1.4;

    & > pre {
      margin: 0;
    }
  }
`

export const TableWrapper = styled.div`
  -webkit-overflow-scrolling: touch;
  overflow-y: hidden;
  overflow-x: auto;

  @media ${breakpoints.fromMediumScreen} {
    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #191d3a;
    }

    &::-webkit-scrollbar-thumb {
      background: #4f6294;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #ec5990;
    }
  }
`

export const Type = styled.span`
  font-weight: 100;
  font-size: 15px;
  font-family: monospace;
  color: ${colors.lightPink};
`

export const MobileType = styled(Type)`
  margin-top: 10px;
  display: block;

  @media ${breakpoints.fromMediumScreen} {
    margin-top: 0px;
    display: inline;
  }
`

const HiddenMenu = styled.div`
  & > h1 {
    display: none;

    @media ${breakpoints.fromMediumScreen} {
      display: block;
    }
  }

  & > div {
    @media ${breakpoints.fromMediumScreen} {
      display: none;
    }
  }
`

const QuickSelect = styled.div`
  position: relative;

  &:after {
    content: "▼";
    font-size: 20px;
    right: 17%;
    top: 12px;
    position: absolute;
    pointer-events: none;
  }

  & > select {
    border-radius: 4px;
    border: 1px solid white;
    appearance: none;
    background: none;
    color: white;
    margin: 0.67em auto 20px;
    display: block;
    text-align: center;
    text-align-last: center;
    font-size: 2rem;
    font-weight: lighter;
    position: relative;
    padding: 10px 30px;

    :after {
      position: absolute;
      bottom: 0.15em;
      top: 0.15em;
      right: 0.5rem;
      content: "\\2193";
      pointer-events: none;
    }
  }
`

const links = ["Accessibility"]

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
        <SideMenu links={links} goToSection={goToSection} />

        <main>
          <h2>Accessibility (A11y)</h2>
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
        </main>
      </Wrapper>
    </Container>
  )
}

export default React.memo(Advanced)
