import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import GitHubButton from "react-github-btn"
import colors from "../styles/colors"
import breakpoints from "../styles/breakpoints"
import { useStateMachine } from "little-state-machine"
import nav from "../data/nav"
import translateLink from "./logic/translateLink"
import { updateCurrentLanguage } from "../actions/languageActions"
import { globalHistory, navigate } from "@reach/router"

const IconGroup = styled.div`
  position: absolute;
  display: flex;
  left: 10px;
  top: 15px;
  width: 110px;

  @media ${breakpoints.fromLargeScreen} {
    left: 20px;
    width: 160px;
  }
`

const Icon = styled.span`
  transition: 0.3s all;
  z-index: 10;
  max-width: 50px;
  flex: 1;

  & svg {
    height: 28px;
    fill: white;
  }

  &:hover {
    opacity: 0.5;
  }
`

const ActionButtonGroup = styled.nav`
  display: flex;
  bottom: 0;
  z-index: 5;
  left: 0;
  background: ${colors.blue};
  box-shadow: 0 0 5px 0 #000;
  width: 100%;
  position: fixed;
  height: 43px;

  @media ${breakpoints.fromLargeScreen} {
    z-index: 1;
    justify-content: space-around;
    position: inherit;
    background: none;
    border: none;
    max-width: 500px;
    margin: 0 auto;
    background: ${colors.buttonBlue};
    height: auto;
    max-width: 580px;
    padding: 13px 10px;
  }

  @media ${breakpoints.fromXlargeScreen} {
    max-width: 700px;
  }

  & > a {
    flex: 1;
    font-size: 0.5rem;
    border-left: 1px solid ${colors.buttonBlue};
    padding: 5px 0;
    text-align: center;
    color: white;
    text-decoration: none;
    position: relative;
    min-width: 40px;

    &:first-child {
      border-left: 0;
    }

    &:hover {
      color: ${colors.lightPink};
    }

    & > span {
      display: block;
      height: 20px;
    }

    @media ${breakpoints.fromLargeScreen} {
      font-size: 0.8rem;
      flex: none;
      border: none;
      padding: 2px 0;
    }
  }
`

const GitHubButtonWrap = styled.div`
  position: absolute;
  right: 10px;
  top: 15px;
  z-index: 1;

  & > span > span {
    display: flex;
  }

  @media ${breakpoints.fromMediumScreen} {
    right: 110px;
  }

  @media ${breakpoints.fromXlargeScreen} {
    right: 140px;
  }
`

const IconWrapper = styled.div`
  height: 15px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${breakpoints.fromLargeScreen} {
    display: none;
  }
`

const LangsSelect = styled.div`
  position: absolute;
  right: calc(100% - 50% - 45px);
  z-index: 5;
  top: 0;
  min-width: 90px;

  @media ${breakpoints.fromMediumScreen} {
    right: 10px;
  }

  @media ${breakpoints.fromXlargeScreen} {
    right: 20px;
    min-width: 100px;
  }

  > select {
    width: 100%;
    margin-top: 15px;
    line-height: 20px;
    min-height: 28px;
    font-size: 14px;
    display: block;
    background: none;
    appearance: none;
    color: white;
    border: 1px solid ${colors.lightBlue};
    text-align: center;
    border-radius: 3px;
    padding-left: 10px;
    cursor: pointer;

    &:hover {
      border: 1px solid ${colors.secondary};
    }

    > option {
      color: black;

      &:disabled {
        color: grey;
      }
    }
  }

  &:after {
    content: "▼";
    font-size: 10px;
    right: 5px;
    top: 16px;
    position: absolute;
    pointer-events: none;

    @media ${breakpoints.fromMediumScreen} {
      right: 8px;
    }
  }
`

export default function Nav({ defaultLang }: { defaultLang: string }) {
  const {
    action,
    state: { language },
  } = useStateMachine(updateCurrentLanguage)
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }
  const location = globalHistory.location

  return (
    <>
      <IconGroup>
        <Icon>
          <a
            href="https://github.com/bluebill1049/react-hook-form"
            target="_blank"
            rel="noopener noreferrer"
            title="React Hook Form Github"
          >
            <svg viewBox="0 0 496 512" aria-label="Github logo">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
        </Icon>

        <Icon>
          <a
            href="https://twitter.com/HookForm"
            target="_blank"
            rel="noopener noreferrer"
            title="React Hook Form Twitter"
          >
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
          </a>
        </Icon>

        <Icon className="desktopOnly">
          <a
            href="https://medium.com/@bruce1049/form-validation-with-hook-in-3kb-c5414edf7d64"
            target="_blank"
            rel="noopener noreferrer"
            title="React Form validation under 3K"
          >
            <svg viewBox="0 0 512 512" aria-label="Medium logo">
              <path d="M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z" />
            </svg>
          </a>
        </Icon>

        <Icon>
          <a
            href="https://spectrum.chat/react-hook-form"
            target="_blank"
            rel="noopener noreferrer"
            title="React Hook Form Spectrum"
          >
            <svg
              strokeLinejoin="round"
              strokeMiterlimit="1.414"
              aria-label="Spectrum logo"
              viewBox="2 2 28 28"
            >
              <g>
                <path d="M6,14.5c0,0.828 0.672,1.5 1.5,1.5l1.5,0c3.866,0 7,3.134 7,7l0,1.5c0,0.828 0.672,1.5 1.5,1.5l7,0c0.828,0 1.5,-0.672 1.5,-1.5l0,-1.5c0,-9.389 -7.611,-17 -17,-17l-1.5,0c-0.828,0 -1.5,0.672 -1.5,1.5l0,7Z" />
              </g>
            </svg>
          </a>
        </Icon>
      </IconGroup>

      <GitHubButtonWrap>
        <GitHubButton
          href="https://github.com/bluebill1049/react-hook-form"
          data-size="large"
          data-show-count
          aria-label="Star bluebill1049/react-hook-form on GitHub"
        />
      </GitHubButtonWrap>

      <LangsSelect>
        <select
          onChange={e => {
            const selectedLanguage = e.target.value
            action(selectedLanguage)

            let url = location.pathname.substr(1)

            switch (url) {
              case "jp/":
                url = "jp"
                break
              case "zh/":
                url = "zh"
                break
              case "kr/":
                url = "kr"
                break
            }

            navigate(getNavLink(url, selectedLanguage))
          }}
          defaultValue={currentLanguage}
        >
          <option value="en">English</option>
          <option value="pt">Português</option>
          <option value="zh">简体中文</option>
          <option value="jp">日本語</option>
          <option value="kr">한국어</option>
        </select>
      </LangsSelect>

      <ActionButtonGroup>
        <Link activeClassName="active" to={translateLink("/", currentLanguage)}>
          <IconWrapper>
            <div className="flag icon" />
          </IconWrapper>
          <span>{nav[currentLanguage].home}</span>
        </Link>
        <Link
          activeClassName="active"
          to={translateLink("/get-started", currentLanguage)}
        >
          <IconWrapper>
            <div className="shutdown icon" />
          </IconWrapper>
          <span>{nav[currentLanguage].getStarted}</span>
        </Link>
        <Link
          activeClassName="active"
          to={translateLink("/api", currentLanguage)}
        >
          <IconWrapper>
            <div className="keyboard icon" />
          </IconWrapper>
          <span>API</span>
        </Link>

        <Link
          activeClassName="active"
          to={translateLink("/advanced-usage", currentLanguage)}
        >
          <IconWrapper>
            <div className="search icon" />
          </IconWrapper>
          <span>{nav[currentLanguage].advanced}</span>
        </Link>

        <Link
          activeClassName="active"
          to={translateLink("/form-builder", currentLanguage)}
        >
          <IconWrapper>
            <div className="edit icon" />
          </IconWrapper>
          <span>{nav[currentLanguage].builder}</span>
        </Link>
        <Link
          activeClassName="active"
          to={translateLink("/faqs", currentLanguage)}
        >
          <IconWrapper>
            <div className="eye icon" />
          </IconWrapper>
          <span>{nav[currentLanguage].faqs}</span>
        </Link>
        <a
          href="https://github.com/react-hook-form/react-hook-form/releases"
          target="_blank"
          className="desktopOnly"
          rel="noreferrer noopener"
        >
          {nav[currentLanguage].releases}
        </a>
      </ActionButtonGroup>
    </>
  )
}

function getNavLink(path: string, selectedLanguage: string) {
  const i18nPagePathRegex = /^([a-z]{2})(\/\S+|\?.+)/
  const i18nHomePageRegex = /^[a-z]{2}$/
  const i18nPageMatched = path.match(i18nPagePathRegex)
  const isHomePage = i18nHomePageRegex.test(path)

  if (selectedLanguage === "en") {
    if (isHomePage) {
      return "/"
    }
    if (i18nPageMatched != null) {
      return i18nPageMatched[2]
    }
    return path
  }

  const targetPath =
    i18nPageMatched != null
      ? i18nPageMatched[2].substr(1)
      : isHomePage
      ? ""
      : path
  return translateLink(targetPath, selectedLanguage)
}
