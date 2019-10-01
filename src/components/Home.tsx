import * as React from "react"
import { navigate } from "@reach/router"
import styled from "styled-components"
import Nav from "./Nav"
import Form from "./Form"
import Header from "./Header"
import CodeCompareSection from "./CodeCompareSection"
import CodePerfCompareSection from "./CodePerfCompareSection"
import FooterContent from "./Footer"
import Builder from "./BuilderPage"
import { H1 } from "../styles/typography"
import { ButtonsGroup, DarkBlueButton } from "../styles/buttons"
import track from "./utils/track"
import { CenterContent } from "../styles/containers"
import breakpoints from "../styles/breakpoints"
import FeaturesList from "./FeaturesList";

const { useState, useRef, useEffect } = React

const Root = styled.div`
  padding: 0 20px 50px;
  position: relative;

  @media ${breakpoints.fromLargeScreen} {
    padding: 0 50px;
  }
`

function Home({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) {
  const [submitData, updateSubmitData] = useState({})
  const [showBuilder, toggleBuilder] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const builderButton = useRef(null)
  const HomeRef = useRef(null)

  const onSubmit = data => {
    updateSubmitData(data)
  }

  useEffect(() => {
    if (location.search === "?goToDemo") {
      HomeRef.current.scrollIntoView({ behavior: "smooth" })
    }

    setIsMobile(
      typeof window === "undefined"
        ? false
        : window.matchMedia("(max-width: 768px)").matches
    )
  }, [])

  return (
    <Root>
      <Builder
        showBuilder={showBuilder}
        toggleBuilder={toggleBuilder}
        builderButton={builderButton}
        isMobile={isMobile}
        HomeRef={HomeRef}
      />

      <Nav
        pathname={location.pathname}
        builderButton={builderButton}
        showBuilder={showBuilder}
        toggleBuilder={toggleBuilder}
      />

      <Header homeRef={HomeRef} />

      <FeaturesList />

      <CodeCompareSection />

      <CodePerfCompareSection />

      <div ref={HomeRef} />

      <Form
        {...{
          onSubmit,
          submitData,
          toggleBuilder,
        }}
      />

      <CenterContent>
        <H1>Find it useful and interesting?</H1>
        <p>
          Form validation should be much simpler. React Hook Form will lead you
          to write less code and have better performance. Check out the get
          started section and learn more on the API documentation page.
        </p>
        <ButtonsGroup
          style={{
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          <DarkBlueButton
            onClick={() => {
              track({
                category: "Button",
                label: "Get Started - Find it useful and interesting",
                action: "Click - Go to Get Started page",
              })
              navigate("/get-started")
            }}
          >
            Get Started
          </DarkBlueButton>
          <DarkBlueButton
            onClick={() => {
              track({
                category: "Button",
                label: "API",
                action: "Click - Go to API page",
              })
              navigate("/api")
            }}
          >
            API
          </DarkBlueButton>
        </ButtonsGroup>
      </CenterContent>

      <FooterContent />
    </Root>
  )
}

export default React.memo(Home)
