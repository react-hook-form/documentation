// @flow
import * as React from "react"
import styled from "styled-components"
import { AnimateKeyframes, Animate } from "react-simple-animate"
import { H1, Note } from "../styles/typography"
import { CenterContent } from "../styles/containers"
import { ChangeEvent, useEffect, useState } from "react"
import { DemoForm } from "./Form"
import colors from "../styles/colors"
import breakpoints from "../styles/breakpoints"

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;
  grid-template-columns: 1fr 1fr;
  position: relative;

  @media ${breakpoints.fromMediumScreen} {
    grid-gap: 40px;
    grid-template-columns: 1fr 65px 1fr;
  }

  & p {
    display: none;
    font-size: 45px;
    font-weight: 800;
    margin-top: 160px;
    line-height: 1.4;
    background: ${colors.primary};

    @media ${breakpoints.fromMediumScreen} {
      display: block;
    }
  }

  & h2 {
    font-size: 14px;

    @media ${breakpoints.fromMediumScreen} {
      font-size: 24px;
      font-weight: 200;
      padding-bottom: 10px;
    }
  }
`

const ExternalComponent = styled.div`
  font-size: 14px;
  border: 1px solid ${colors.secondary};
  padding: 10px 0;
  border-radius: 4px;
  margin: 20px 0;
`

const Line = styled.div`
  position: absolute;
  width: 1px;
  background: ${colors.lightBlue};
  height: 44%;
  left: 50%;
  top: 30%;
  z-index: -1;
`

const props = {
  keyframes: [
    "transform: translateX(0)",
    `transform: translateX(3px); background: black;`,
    "transform: translateX(0px)",
    `transform: translateX(-3px); background: black;`,
    "transform: translateX(0px)",
  ],
  easeType: "ease-in",
}

const IsoLateInput = () => {
  const [text, updateText] = useState("")
  const [play, setPlay] = useState(false)

  useEffect(() => {
    setPlay(!play)
  }, [text])

  return (
    <AnimateKeyframes
      keyframes={[`background: ${colors.lightBlue};`, "background: white;"]}
      play={play}
      render={({ style }) => (
        <input
          placeholder="Type here to see result..."
          style={style}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            updateText(e.target.value)
          }}
        />
      )}
    />
  )
}

const ControlledInputs = ({ style }) => {
  const [text, updateText] = useState("")
  const [play, setPlay] = useState(false)

  useEffect(() => {
    setPlay(!play)
  }, [text])

  return (
    <section style={{ ...style, marginBottom: 20 }}>
      <DemoForm>
        <h2>Controlled Form</h2>
        <AnimateKeyframes
          keyframes={[`background: ${colors.lightBlue};`, "background: white;"]}
          play={play}
          render={({ style }) => (
            <input
              placeholder="Type here to see result..."
              style={style}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                updateText(e.target.value)
              }}
            />
          )}
        />

        <AnimateKeyframes
          {...props}
          play={play}
          render={({ style }) => (
            <ExternalComponent style={style}>
              Child Component A
            </ExternalComponent>
          )}
        />
        <AnimateKeyframes
          {...props}
          play={play}
          render={({ style }) => (
            <ExternalComponent style={style}>
              Child Component B
            </ExternalComponent>
          )}
        />
        <AnimateKeyframes
          {...props}
          play={play}
          render={({ style }) => (
            <ExternalComponent style={style}>
              Child Component C
            </ExternalComponent>
          )}
        />
      </DemoForm>
    </section>
  )
}

function IsolateRender({
  isIsolatePlay,
  currentLanguage,
}: {
  isIsolatePlay: boolean
  currentLanguage: string
}) {
  console.log(isIsolatePlay)
  return (
    <CenterContent>
      <H1>Isolate component re-render</H1>

      <p>
        You have the ability to isolate components re-render which lead to less
        performance impact on your page or app. The following example
        demonstrate such behaviour.
      </p>

      <p style={{ fontSize: 14 }}>
        <Note>Note:</Note> Type in the input box to see the render behaviour.
      </p>

      <Wrapper>
        <Animate
          play={isIsolatePlay}
          start={{
            opacity: 0,
            transform: "translateX(-20px)",
          }}
          end={{
            opacity: 1,
          }}
          easeType={"ease-in"}
          render={({ style }) => {
            return (
              <section style={style} id="isolate">
                <DemoForm>
                  <h2> React Hook Form</h2>
                  <IsoLateInput />
                  <ExternalComponent>Child Component A</ExternalComponent>
                  <ExternalComponent>Child Component B</ExternalComponent>
                  <ExternalComponent>Child Component C</ExternalComponent>
                </DemoForm>
              </section>
            )
          }}
        />

        <Animate
          play={isIsolatePlay}
          start={{
            opacity: 0,
            transform: "translateY(20px)",
          }}
          end={{
            opacity: 1,
          }}
          delay={0.25}
          easeType={"ease-in"}
        >
          <p>VS</p>
          <Line />
        </Animate>

        <Animate
          play={isIsolatePlay}
          start={{
            opacity: 0,
            transform: "translateX(20px)",
          }}
          end={{
            opacity: 1,
          }}
          easeType={"ease-in"}
          render={({ style }) => {
            return <ControlledInputs style={style} />
          }}
        />
      </Wrapper>
    </CenterContent>
  )
}

export default React.memo(IsolateRender)
