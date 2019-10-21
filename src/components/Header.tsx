import * as React from "react"
import { Heading, SubHeading } from "../styles/typography"
import styled, { css } from "styled-components"
import { Animate, AnimateGroup, AnimateKeyframes } from "react-simple-animate"
import colors from "../styles/colors"
import { navigate } from "@reach/router"
import { ButtonsGroup, PrimaryButton } from "../styles/buttons"
import breakpoints from "../styles/breakpoints"
// @ts-ignore
import video from "../images/react-hook-form-demo-video.mp4"
// @ts-ignore
import nativeVideo from "../images/react-hook-form-native-demo-video.mp4"
import home from "../data/home"
import { useStateMachine } from "little-state-machine"
import translateLink from "./logic/translateLink"

const Logo = styled.svg`
  height: 80px;
  fill: white;
  padding: 20px;
  border-radius: 15px;
  background: ${colors.lightPink};
  margin: -50px auto 0;

  @media ${breakpoints.fromXsmallScreen} {
    height: 120px;
  }

  @media ${breakpoints.fromMediumScreen} {
    display: none;
  }
`

const DesktopLogo = styled.svg`
  display: none;
  position: relative;
  height: 60px;
  padding: 10px;
  border-radius: 10px;
  background: ${colors.lightPink};
  top: 10px;
  margin-right: 10px;

  @media ${breakpoints.fromMediumScreen} {
    fill: white;
    display: inline-block;
  }
`

const ButtonsGroupSmall = styled(ButtonsGroup)`
  min-width: 300px;
`

const Head = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;

  @media ${breakpoints.fromMediumScreen} {
    height: auto;
  }
`

const Video = styled.video`
  width: 100%;
  border-radius: 10px;
  display: block;
  box-shadow: 0px 0 9px 0px #010817;
  background: ${colors.primary};
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.3s all;
  ${props =>
    props.isLast &&
    css`
      margin-bottom: 100px;
    `}

  &:hover {
    border: 1px solid ${colors.secondary};
  }

  @media ${breakpoints.fromMediumScreen} {
    width: 700px;
    height: 491px;
    margin: 0 auto 20px;
  }

  @media ${breakpoints.fromLargeScreen} {
    width: 800px;
    height: 563px;
  }

  @media ${breakpoints.fromXlargeScreen} {
    width: 900px;
    height: 631px;
  }
`

const VideoHeading = styled.h4`
  text-align: center;
  font-weight: normal;
  line-height: 2;
  border-bottom: 2px solid ${colors.secondary};
  display: block;
  margin-bottom: 0;

  @media ${breakpoints.fromMediumScreen} {
    display: none;
  }
`

const ToggleGroup = styled.div`
  text-align: center;
  display: none;

  @media ${breakpoints.fromMediumScreen} {
    display: block;
    margin-bottom: 50px;
  }

  & > button {
    width: 155px;
    color: white;
    border: 1px solid ${colors.lightBlue};
    padding: 10px 25px;
    cursor: pointer;

    &:first-child {
      border-right: 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:nth-child(2) {
      border-left: 0;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    &:active {
      background: ${colors.secondary} !important;
    }
  }
`

const VideoWrapper = styled.div`
  @media ${breakpoints.fromMediumScreen} {
    ${props =>
      props.show
        ? css`
            display: block;
          `
        : `display: none`}
  }
`

const LogoSvg = (
  <>
    <path d="M73.56,13.32H58.14a8.54,8.54,0,0,0-16.27,0H26.44a11,11,0,0,0-11,11V81.63a11,11,0,0,0,11,11H73.56a11,11,0,0,0,11-11V24.32A11,11,0,0,0,73.56,13.32Zm-30.92,2a1,1,0,0,0,1-.79,6.54,6.54,0,0,1,12.78,0,1,1,0,0,0,1,.79h5.38v6.55a3,3,0,0,1-3,3H40.25a3,3,0,0,1-3-3V15.32ZM82.56,81.63a9,9,0,0,1-9,9H26.44a9,9,0,0,1-9-9V24.32a9,9,0,0,1,9-9h8.81v6.55a5,5,0,0,0,5,5h19.5a5,5,0,0,0,5-5V15.32h8.81a9,9,0,0,1,9,9Z" />
    <path
      style={{ transform: "translateX(-25px)" }}
      d="M71.6,45.92H54a1,1,0,0,0,0,2H71.6a1,1,0,0,0,0-2Z"
    />
    <path d="M71.6,45.92H54a1,1,0,0,0,0,2H71.6a1,1,0,0,0,0-2Z" />
    <path
      style={{ transform: "translateX(-25px)" }}
      d="M71.1,69.49H53.45a1,1,0,1,0,0,2H71.1a1,1,0,0,0,0-2Z"
    />
    <path d="M71.1,69.49H53.45a1,1,0,1,0,0,2H71.1a1,1,0,0,0,0-2Z" />
  </>
)

export default function Header({
  homeRef,
  defaultLang,
}: {
  homeRef: React.Ref<HTMLDivElement>
  defaultLang: string
}) {
  const [isWeb, setIsWeb] = React.useState(true)
  const {
    state: { language },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }

  return (
    <AnimateGroup play>
      <Head id="main">
        <Animate
          sequenceIndex={0}
          duration={0.2}
          start={{
            transform: "translateY(20px)",
            opacity: 0,
          }}
          end={{
            transform: "translateY(0)",
          }}
          easeType="ease-in"
          render={({ style }) => (
            <Logo style={style} viewBox="0 0 100 100">{LogoSvg}</Logo>
          )}
        />

        <Animate
          sequenceIndex={0}
          duration={0.2}
          start={{
            transform: "translateY(20px)",
            opacity: 0,
          }}
          end={{
            transform: "translateY(0)",
          }}
          easeType="ease-in"
          render={({ style }) => (
            <Heading style={style}>
              <DesktopLogo viewBox="0 0 100 100">{LogoSvg}</DesktopLogo> React
              Hook Form
            </Heading>
          )}
        />

        <Animate
          sequenceIndex={1}
          start={{
            transform: "translateY(20px)",
            opacity: 0,
          }}
          end={{
            transform: "translateY(0)",
          }}
          easeType="ease-in"
          render={({ style }) => (
            <SubHeading style={{ marginBottom: 0, ...style }}>
              {home.slogan[currentLanguage]}
            </SubHeading>
          )}
        />

        <Animate
          sequenceIndex={2}
          start={{
            transform: "translateY(20px)",
            opacity: 0,
          }}
          end={{
            transform: "translateY(0)",
          }}
          easeType="ease-in"
          render={({ style }) => (
            <ButtonsGroupSmall style={style}>
              <PrimaryButton
                onClick={() => {
                  // @ts-ignore
                  homeRef.current.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {home.demo[currentLanguage]}
              </PrimaryButton>

              <PrimaryButton
                onClick={() => {
                  navigate(translateLink("get-started", currentLanguage))
                }}
              >
                {home.getStarted[currentLanguage]} &nbsp;<span>▶</span>
              </PrimaryButton>
            </ButtonsGroupSmall>
          )}
        />
      </Head>

      <VideoHeading>React Web</VideoHeading>
      <VideoWrapper show={isWeb}>
        <div style={{ position: "relative" }}>
          <Animate
            sequenceIndex={3}
            delay={0.1}
            start={{ opacity: 0 }}
            end={{ opacity: 1 }}
            duration={0.4}
            easeType="ease-in"
            render={({ style }) => (
              <Video
                id="tabPanel-1"
                aria-labelledby="tabPanel-1"
                controls
                playsInline
                muted
                style={style}
              >
                <source src={video} type="video/mp4" />
              </Video>
            )}
          />
        </div>
      </VideoWrapper>

      <VideoWrapper show={!isWeb}>
        <VideoHeading>React Native</VideoHeading>
        <Video
          id="tabPanel-2"
          aria-labelledby="tabPanel-2"
          controls
          playsInline
          isLast
          muted
        >
          <source src={nativeVideo} type="video/mp4" />
        </Video>
      </VideoWrapper>

      <ToggleGroup role="tablist" aria-label="Select video">
        <button
          style={{
            background: isWeb ? colors.lightPink : "none",
          }}
          aria-label="show web video"
          aria-selected={isWeb ? "true" : "false"}
          aria-controls="tabPanel-1"
          role="tab"
          onClick={() => {
            setIsWeb(true)
          }}
        >
          React Web
        </button>
        <button
          style={{
            background: !isWeb ? colors.lightPink : "none",
          }}
          role="tab"
          aria-label="show react native video"
          aria-selected={!isWeb}
          aria-controls="tabPanel-2"
          onClick={() => {
            setIsWeb(false)
          }}
        >
          React Native
        </button>
      </ToggleGroup>
    </AnimateGroup>
  )
}
