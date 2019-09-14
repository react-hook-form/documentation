import styled from "styled-components"
import copyClipBoard from "./utils/copyClipBoard"
import SyntaxHighlighterWithCopy from "./SyntaxHighlighterWithCopy"
import code from "./codeExamples/defaultExample"
import colors from "../styles/colors"
import * as React from "react"
import track from "./utils/track"
import breakpoints from "../styles/breakpoints"
import { Note } from "../styles/typography"

const InstallCode = styled.span`
  background: ${colors.buttonBlue} !important;
  padding: 13px 20px;
  border-radius: 4px;
  margin-top: 20px;
  display: block;
`

const CopyButton = styled.button`
  display: none;
  background: ${colors.lightBlue};
  border: none;
  color: white;
  border-radius: 4px;
  font-size: 16px;
  float: right;

  @media ${breakpoints.fromMediumScreen} {
    display: inline-block;
  }
`

export default function GetStarted({ quickStartRef }: any) {
  return (
    <>
      <h2 ref={quickStartRef}>Installation</h2>
      <p>
        Installing <code>react-hook-form</code> only takes a single command and
        you're ready to roll.
      </p>

      <InstallCode>
        npm install react-hook-form
        <CopyButton
          onClick={() => {
            track({
              category: "Button",
              label: "Copy",
              action: "Click - copy installation",
            })
            copyClipBoard("npm install react-hook-form")
            alert("Code copied into your clipboard.")
          }}
        >
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
      <SyntaxHighlighterWithCopy
        rawData={code}
        url="https://codesandbox.io/s/kw7z2q2n15"
      />

      <p
        style={{
          textAlign: "center",
        }}
      >
        ♦
      </p>

      <h2 ref={quickStartRef}>Video Tutorial</h2>
      <p>
        In this video tutorial, i have demonstrated the basic usage and concept
        of using <code>react-hook-form</code>.
      </p>

      <iframe
        width="100%"
        height="528"
        src="https://www.youtube.com/embed/-mFXqOaqgZk"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  )
}
