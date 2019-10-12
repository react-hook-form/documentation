import * as React from "react"
import { navigate } from "@reach/router"
import styled from "styled-components"
import Form from "./Form"
import Header from "./Header"
import CodeCompareSection from "./CodeCompareSection"
import CodePerfCompareSection from "./CodePerfCompareSection"
import FooterContent from "./Footer"
import Builder from "./BuilderPage"
import { H1 } from "../styles/typography"
import { ButtonsGroup, PrimaryButton } from "../styles/buttons"
import track from "./utils/track"
import { CenterContent } from "../styles/containers"
import breakpoints from "../styles/breakpoints"
import FeaturesList from "./FeaturesList"

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
  const HomeRef = useRef(null)
  const [isPlayFeature, setFeaturePlay] = useState(false)
  const [isPlayCodeCompare, setCodeComparePlay] = useState(false)
  const [isPlayRender, setRenderPlay] = useState(false)
  const [formUpdated, setFormUpdated] = useState(false)

  const onSubmit = data => {
    updateSubmitData(data)
  }

  useEffect(() => {
    if (location.search.startsWith("?goToDemo")) {
      setTimeout(() => {
        HomeRef.current.scrollIntoView({ behavior: "smooth" })

        if (location.search.startsWith("?goToDemo&updated=true")) {
          setFormUpdated(true)
        }
      }, 100)
    }

    let options = {
      rootMargin: "0px 0px",
      threshold: [1],
    }

    if (!IntersectionObserver) {
      setFeaturePlay(true)
      setCodeComparePlay(true)
    }

    const featureList = document.querySelector("#featureLast")
    const codeComparison = document.querySelector("#codeComparison")
    const rendering = document.querySelector("#rendering")

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === featureList && !isPlayFeature) {
            setFeaturePlay(true)
          }
          if (entry.target === codeComparison && !isPlayCodeCompare) {
            setCodeComparePlay(true)
          }
          if (entry.target === rendering && !isPlayRender) {
            setRenderPlay(true)
          }
        }
      })
    }, options)

    observer.observe(featureList)
    observer.observe(codeComparison)
    observer.observe(rendering)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <Root>
      {showBuilder && (
        <Builder showBuilder toggleBuilder={toggleBuilder} HomeRef={HomeRef} />
      )}

      <Header homeRef={HomeRef} />

      <FeaturesList isPlayFeature={isPlayFeature} />

      <CodeCompareSection isPlayCodeCompare={isPlayCodeCompare} />

      <CodePerfCompareSection isPlayRender={isPlayRender} />

      <div ref={HomeRef} />

      <Form
        {...{
          onSubmit,
          submitData,
          toggleBuilder,
          formUpdated,
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
          }}
        >
          <PrimaryButton
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
          </PrimaryButton>
          <PrimaryButton
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
          </PrimaryButton>
        </ButtonsGroup>
      </CenterContent>

      <FooterContent />
    </Root>
  )
}

export default React.memo(Home)
