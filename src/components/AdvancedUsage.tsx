import * as React from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import {
  SubHeading,
  HeadingWithTopMargin,
  H5,
  H1,
  Note,
} from "../styles/typography"
import ApiRefTable from "./ApiRefTable"
import validationSchemaCode from "./codeExamples/validationSchema"
import Link from "../styles/link"
import code from "./codeExamples/defaultExample"
import SyntaxHighlighterWithCopy, {
  LinkToSandBox,
} from "./SyntaxHighlighterWithCopy"
import SideMenu from "./SideMenu"
import ApiFormState from "./ApiFormState"
import resetCode from "./codeExamples/resetCode"
import ApiWatch from "./ApiWatch"
import ApiErrors from "./ApiErrors"
import handleSubmitCode from "./codeExamples/handleSubmitCode"
import setError from "./codeExamples/setError"
import setValue from "./codeExamples/setValue"
import track from "./utils/track"
import { Container, Wrapper } from "../styles/containers"
import { DarkBlueButton } from "../styles/buttons"
import { navigate } from "@reach/router"
import getValues from "./codeExamples/getValues"
import typeScript from "./codeExamples/typeScript"
import trigger from "./codeExamples/trigger"
import Footer from "./Footer"
import FormContext from "./FormContext"
import nativeValidation from "./codeExamples/nativeValidation"
import reactNative from "./codeExamples/reactNative"
import unregisterCode from "./codeExamples/unregisterCode"
import breakpoints from "../styles/breakpoints"
import Popup from "./Popup"

const { useRef, useEffect } = React

const CodeAsLink = styled(Link)`
  cursor: pointer;
  text-decoration: underline;
`

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

const links = [
  "Accessibility",
]

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
      <HiddenMenu>
        <HeadingWithTopMargin>Advanced</HeadingWithTopMargin>
        <QuickSelect>
          <select
            onChange={e => {
              goToSection(e.target.value)
            }}
          >
            <option>Select API</option>
            {links.map(option => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </QuickSelect>
      </HiddenMenu>
      <SubHeading>
        Build complex and accessible forms with React Hook Form.
      </SubHeading>

      <Wrapper>
        <SideMenu links={links} goToSection={goToSection} />
        <main>
          <h2>Accessibility</h2>
        </main>
      </Wrapper>
    </Container>
  )
}

export default React.memo(Advanced)
