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

  @media (min-width: 768px) {
    font-size: 0.9rem;
    margin-top: 100px;
    text-align: center;
  }
`

const Links = styled.ul`
  list-style: none;
  border-bottom: 1px solid ${colors.lightPink};
  max-width: 800px;
  margin: 0 auto 20px;
  padding: 0;
  padding-bottom: 10px;
  margin-bottom: 20px;
  display: block;

  & > li {
    display: inline-block;
    padding: 0 5px;

    @media (min-width: 768px) {
      padding: 0 20px;
    }

    & > a {
      text-decoration: none;
      color: white;
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
        <a href="/get-started">Get started</a>
      </li>
      <li>
        <a href="/api">API</a>
      </li>
      <li>
        <a href="/form-builder">Form Builder</a>
      </li>
      <li>
        <a href="/faqs">FAQs</a>
      </li>
    </Links>
    <div>
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
        href="https://github.com/bluebill1049/little-state-machine"
        target="_blank"
        title="Little state machine"
      >
        Little State Machine
      </a>
      <br />
      <span
        style={{ fontSize: 12, lineHeight: 2, marginTop: 5, display: "block" }}
      >
        [ Please support the repo by leaving ⭐️. Thank you ❤ ️]
      </span>
    </div>
  </Footer>
)
