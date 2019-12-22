// @flow
import * as React from "react"
import styled from "styled-components"
import { AnimateKeyframes } from "react-simple-animate"
import { H1, Note, Title } from "../styles/typography"
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

  @media ${breakpoints.fromMediumScreen} {
    grid-gap: 30px;
    grid-template-columns: 1fr 80px 1fr;
  }

  & > p {
    display: none;
    font-size: 40px;
    font-weight: 200;
    margin-top: 160px;

    @media ${breakpoints.fromMediumScreen} {
      display: block;
    }
  }

  & h2 {
    font-size: 14px;

    @media ${breakpoints.fromMediumScreen} {
      font-size: 18px;
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
          style={style}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            updateText(e.target.value)
          }}
        />
      )}
    />
  )
}

const ControlledInputs = () => {
  const [text, updateText] = useState("")
  const [play, setPlay] = useState(false)

  useEffect(() => {
    setPlay(!play)
  }, [text])

  return (
    <section style={{ marginBottom: 20 }}>
      <DemoForm>
        <Title>Controlled Form</Title>
        <AnimateKeyframes
          keyframes={[`background: ${colors.lightBlue};`, "background: white;"]}
          play={play}
          render={({ style }) => (
            <input
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

export default function IsolateRender() {
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
        <section>
          <DemoForm>
            <Title>React Hook Form</Title>
            <IsoLateInput />
            <ExternalComponent>Child Component A</ExternalComponent>
            <ExternalComponent>Child Component B</ExternalComponent>
            <ExternalComponent>Child Component C</ExternalComponent>
          </DemoForm>
        </section>

        <p>VS</p>

        <ControlledInputs />
      </Wrapper>
    </CenterContent>
  )
}
