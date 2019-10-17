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
import { CenterContent } from "../styles/containers"
import breakpoints from "../styles/breakpoints"
import FeaturesList from "./FeaturesList"
import { useStateMachine } from "little-state-machine"
import home from "../data/home"

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
  defaultLang,
}: {
  location: {
    search: string
    pathname: string
  }
  defaultLang: string
}) {
  const [submitData, updateSubmitData] = useState({})
  const [showBuilder, toggleBuilder] = useState(false)
  const HomeRef = useRef(null)
  const [isPlayFeature, setFeaturePlay] = useState(false)
  const [isPlayCodeCompare, setCodeComparePlay] = useState(false)
  const [isPlayRender, setRenderPlay] = useState(false)
  const [formUpdated, setFormUpdated] = useState(false)
  const {
    state: { language },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }

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
        <Builder
          showBuilder
          toggleBuilder={toggleBuilder}
          HomeRef={HomeRef}
          defaultLang={defaultLang}
        />
      )}

      <Header homeRef={HomeRef} defaultLang={defaultLang} />

      <FeaturesList
        isPlayFeature={isPlayFeature}
        currentLanguage={currentLanguage}
      />

      <CodeCompareSection
        isPlayCodeCompare={isPlayCodeCompare}
        currentLanguage={currentLanguage}
      />

      <CodePerfCompareSection
        isPlayRender={isPlayRender}
        currentLanguage={currentLanguage}
      />

      <div ref={HomeRef} />

      <Form
        {...{
          onSubmit,
          submitData,
          toggleBuilder,
          formUpdated,
          currentLanguage,
        }}
      />

      <CenterContent>
        <H1>{home.findInteresting[currentLanguage].heading}</H1>
        <p>{home.findInteresting[currentLanguage].description}</p>
        <ButtonsGroup
          style={{
            maxWidth: 500,
          }}
        >
          <PrimaryButton
            onClick={() => {
              navigate("/get-started")
            }}
          >
            {home.getStarted[currentLanguage]}
          </PrimaryButton>
          <PrimaryButton
            onClick={() => {
              navigate("/api")
            }}
          >
            API
          </PrimaryButton>
        </ButtonsGroup>
      </CenterContent>

      <FooterContent currentLanguage={currentLanguage} />
    </Root>
  )
}

export default React.memo(Home)
