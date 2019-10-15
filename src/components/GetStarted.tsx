import styled from "styled-components"
import CodeArea, { CopyIcon } from "./CodeArea"
import code from "./codeExamples/defaultExample"
import colors from "../styles/colors"
import * as React from "react"
import breakpoints from "../styles/breakpoints"

export const InstallCode = styled.span`
  background: ${colors.buttonBlue} !important;
  padding: 13px 20px;
  border-radius: 4px;
  margin-top: 20px;
  display: block;
`

export const CopyButton = styled.button`
  display: none;
  background: ${colors.lightBlue};
  color: white;
  border-radius: 4px;
  font-size: 13px;
  float: right;
  text-transform: uppercase;
  border: 1px solid transparent;
  margin-top: -2px;
  cursor: pointer;

  &:hover {
    background: none;
    border: 1px solid ${colors.secondary};
    color: white;

    & span {
      background: ${colors.primary};
    }
  }

  @media ${breakpoints.fromMediumScreen} {
    display: inline-block;
  }
`

export default function GetStarted({ quickStartRef }: any) {
  return (
    <>
      <h2 ref={quickStartRef}>Installation</h2>
      <p>
        Installing React Hook Form only takes a single command and you're ready
        to roll.
      </p>

      <InstallCode>
        npm install react-hook-form
        <CopyButton>
          <CopyIcon>
            <span />
          </CopyIcon>{" "}
          Copy
        </CopyButton>
      </InstallCode>

      <h2
        style={{
          marginTop: 50,
        }}
      >
        Example
      </h2>
      <p>The following code will demonstrate the basics usage.</p>
      <CodeArea rawData={code} url="https://codesandbox.io/s/kw7z2q2n15" />
    </>
  )
}
