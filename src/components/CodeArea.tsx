import * as React from "react"
import styled from "styled-components"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { xonokai } from "react-syntax-highlighter/dist/styles/prism"
import copyClipBoard from "./utils/copyClipBoard"
import generateCode from "./logic/generateCode"
import colors from "../styles/colors"
import track from "./utils/track"
import breakpoints from "../styles/breakpoints"

const commonStyle = `
  border: none;
  color: white;
  border-radius: 4px;
  font-size: 13px;
  padding: 0 10px;
  position: absolute;
  right: 20px;
  z-index: 1;
  top: 10px;
  box-shadow: 0 0 10px ${colors.black};
  display: none;
  cursor: pointer;
  text-transform: uppercase;
  height: 34px;
  align-items: center;

  &:hover {
    opacity: 0.8;
    color: white;
  }

  @media ${breakpoints.fromMediumScreen} {
    display: flex;
  }
`

const CopyButton = styled.button`
  ${commonStyle};
  background: ${colors.lightBlue};
`

export const LinkToSandBox = styled.a`
  ${commonStyle};
  background: ${colors.lightPink};
  text-decoration: none;
  line-height: 2;
  right: 115px;

  & > svg {
    display: inline-block;
    height: 20px;
    position: relative;
    margin-right: 8px;
  }
`

const Wrapper = styled.div`
  & pre {
    line-height: 1.5 !important;
  }
`

const CopyIcon = styled.span`
  border: 1px solid #fff;
  border-radius: 2px;
  width: 14px;
  height: 14px;
  display: inline-block;
  position: relative;
  margin-right: 10px;
  margin-top: -2px;

  & > span {
    border: 1px solid #fff;
    position: absolute;
    top: 2px;
    left: 2px;
    background: ${colors.lightBlue};
    border-radius: 2px;
    width: 14px;
    height: 14px;
    display: inline-block;
  }
`

const CodeSandBoxLink = ({ url }: { url: string }) => (
  <LinkToSandBox
    onClick={() => {
      track({
        label: "CodeSandbox",
        category: "Button",
        action: `Click - Go to codeSandBox ${url}`,
      })
    }}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg viewBox="0 0 256 296">
      <g>
        <path
          d="M115.497674,261.08837 L115.497674,154.478845 L23.8139535,101.729261 L23.8139535,162.501763 L65.8104558,186.8486 L65.8104558,232.549219 L115.497674,261.08837 Z M139.311628,261.714907 L189.916577,232.563707 L189.916577,185.779949 L232.186047,161.285235 L232.186047,101.27387 L139.311628,154.895035 L139.311628,261.714907 Z M219.971965,80.8276886 L171.155386,52.5391067 L128.292316,77.4106841 L85.1040206,52.5141067 L35.8521355,81.1812296 L127.765737,134.063073 L219.971965,80.8276886 Z M0,222.211907 L0,74.4948807 L127.986799,0 L256,74.1820085 L256,221.978632 L127.983954,295.72283 L0,222.211907 Z"
          fill="#fff"
        />
      </g>
    </svg>{" "}
    CodeSandbox
  </LinkToSandBox>
)

export default function CodeArea({
  rawData,
  data,
  url,
  withOutCopy,
  style,
}: {
  rawData?: string
  data?: string
  url?: string
  withOutCopy?: boolean
  style?: any
}) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {!withOutCopy && (
        <CopyButton
          onClick={() => {
            track({
              category: "Button",
              label: "Copy",
              action: "Click - Copy code",
            })
            copyClipBoard(rawData || generateCode(data))
            alert("Code copied into your clipboard.")
          }}
          aria-label="Copy code into your clipboard"
        >
          <CopyIcon>
            <span />
          </CopyIcon>{" "}
          Copy
        </CopyButton>
      )}

      {url && <CodeSandBoxLink url={url} />}

      <Wrapper>
        <SyntaxHighlighter
          customStyle={{
            border: "none",
            ...style,
          }}
          style={xonokai}
          language={"jsx"}
        >
          {rawData || generateCode(data)}
        </SyntaxHighlighter>
      </Wrapper>
    </div>
  )
}
