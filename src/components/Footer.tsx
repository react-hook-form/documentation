import * as React from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import { Link } from "gatsby"
import nav from "../data/nav"
import generic from "../data/generic"
import translateLink from "./logic/translateLink"

const Footer = styled.footer`
  padding: 40px 0;
  font-size: 0.8rem;
  font-weight: 300;
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

export default ({ currentLanguage }: { currentLanguage: string }) => (
  <Footer>
    <Links>
      <li>
        <Link to={translateLink("/", currentLanguage)}>
          {nav[currentLanguage].home}
        </Link>
      </li>
      <li>
        <Link to={translateLink("/get-started", currentLanguage)}>
          {nav[currentLanguage].getStarted}
        </Link>
      </li>
      <li>
        <Link to={translateLink("/api", currentLanguage)}>API</Link>
      </li>
      <li>
        <Link to={translateLink("/advanced-usage", currentLanguage)}>
          {nav[currentLanguage].advanced}
        </Link>
      </li>
      <li>
        <Link to={translateLink("/form-builder", currentLanguage)}>
          {nav[currentLanguage].builder}
        </Link>
      </li>
      <li>
        <Link to={translateLink("/faqs", currentLanguage)}>
          {nav[currentLanguage].faqs}
        </Link>
      </li>
      <li>
        <Link to={translateLink("/resources", currentLanguage)}>
          {nav[currentLanguage].resources}
        </Link>
      </li>
    </Links>
    <p>
      Design and Build by{" "}
      <a
        href="https://twitter.com/bluebill1049"
        target="_blank"
        rel="noopener noreferrer"
        title="Bill Luo Twitter"
      >
        @Bill Luo
      </a>{" "}
      with{" "}
      <a
        href="https://github.com/bluebill1049/react-simple-animate"
        target="_blank"
        rel="noopener noreferrer"
        title="React Simple Animate Github"
      >
        React Simple Animate
      </a>{" "}
      +{" "}
      <a
        href="https://github.com/bluebill1049/react-simple-img"
        target="_blank"
        rel="noopener noreferrer"
        title="React Simple Img Github"
      >
        React Simple Img
      </a>{" "}
      +{" "}
      <a
        rel="noopener noreferrer"
        href="https://github.com/bluebill1049/little-state-machine"
        target="_blank"
        title="Little state machine"
      >
        Little State Machine
      </a>
    </p>
    {currentLanguage === "kr" && (
      <p>
        에 의해 번역 <a href="https://github.com/jiyeonseo">@jiyeonseo</a>,{" "}
        <a href="https://github.com/iamchanii">@iamchanii</a> and{" "}
        <a href="https://github.com/adhrinae">@adhrinae</a>
      </p>
    )}
    {currentLanguage === "jp" && (
      <p>
        によって翻訳されました{" "}
        <a href="https://github.com/kotarella1110">@kotarella1110</a>.
      </p>
    )}
    <p style={{ fontSize: 12 }}>
      [ {generic.support[currentLanguage]}{" "}
      <a
        href="https://github.com/react-hook-form/react-hook-form"
        target="_blank"
        rel="noreferrer noopener"
      >
        @github
      </a>
      ️ ]
    </p>
    <p
      style={{
        display: "inline-block",
        background: "white",
        color: 'black',
        padding: "6px 20px",
        borderRadius: 4,
      }}
    >
      Hosted on ▲ ZEIT Now
    </p>
  </Footer>
)
