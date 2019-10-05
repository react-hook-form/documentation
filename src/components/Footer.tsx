import track from "./utils/track"
import * as React from "react"
import styled from "styled-components"
import colors from "../styles/colors"

const Footer = styled.footer`
  padding: 40px 0;
  font-size: 0.8rem;
  font-weight: 200;
  margin-bottom: 60px;
  text-align: center;

  & a {
    color: white;
    text-decoration: none;

    &:hover {
      color: ${colors.secondary};
    }
  }

  & > p {
    font-size: 13px;
  }
`

const Links = styled.ul`
  list-style: none;
  border-bottom: 1px solid ${colors.lightPink};
  max-width: 800px;
  margin: 0 auto 20px;
  padding: 0 0 10px 0;
  display: block;

  & > li {
    display: inline-block;

    & > a {
      text-decoration: none;
      color: white;
      padding: 10px 12px;
    }
  }
`

export default () => (
  <Footer>
    <Links>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/get-started">Get Started</a>
      </li>
      <li>
        <a href="/api">API</a>
      </li>
      <li>
        <a href="/advanced-usage">Advanced</a>
      </li>
      <li>
        <a href="/form-builder">Form Builder</a>
      </li>
      <li>
        <a href="/faqs">FAQs</a>
      </li>
    </Links>
    <p>
      Build with ♡ by{" "}
      <a
        href="https://twitter.com/bluebill1049"
        onClick={() => {
          track({
            category: "Link",
            label: "Twitter",
            action: "Click - go to Twitter",
          })
        }}
        target="_blank"
        rel="noopener noreferrer"
        title="Bill Luo Twitter"
      >
        @Bill Luo
      </a>{" "}
      with{" "}
      <a
        onClick={() => {
          track({
            category: "Link",
            label: "RSA",
            action: "Click - go to RSA",
          })
        }}
        href="https://github.com/bluebill1049/react-simple-animate"
        target="_blank"
        rel="noopener noreferrer"
        title="React Simple Animate Github"
      >
        React Simple Animate
      </a>{" "}
      +{" "}
      <a
        onClick={() => {
          track({
            category: "Link",
            label: "RSI",
            action: "Click - go to RSI",
          })
        }}
        href="https://github.com/bluebill1049/react-simple-img"
        target="_blank"
        rel="noopener noreferrer"
        title="React Simple Img Github"
      >
        React Simple Img
      </a>{" "}
      +{" "}
      <a
        onClick={() => {
          track({
            category: "Link",
            label: "little-state-machine",
            action: "Click - go to LSM",
          })
        }}
        rel="noopener noreferrer"
        href="https://github.com/bluebill1049/little-state-machine"
        target="_blank"
        title="Little state machine"
      >
        Little State Machine
      </a>
    </p>
    <p style={{ fontSize: 12 }}>
      [ Please support us by leaving a ⭐️. Thank you ❤ ]
    </p>
  </Footer>
)
