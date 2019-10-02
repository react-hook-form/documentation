import * as React from "react"
import { Heading, SubHeading } from "../styles/typography"
import styled, { css } from "styled-components"
import colors from "../styles/colors"
import track from "./utils/track"
import { navigate } from "@reach/router"
import { ButtonsGroup, PrimaryButton } from "../styles/buttons"
import breakpoints from "../styles/breakpoints"
// @ts-ignore
import video from "../images/react-hook-form-demo-video.mp4"
// @ts-ignore
import nativeVideo from "../images/react-hook-form-native-demo-video.mp4"

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

  @media ${breakpoints.fromMediumScreen} {
    height: 62px;
    fill: white;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    background: ${colors.lightPink};
    display: inline-block;
    top: 10px;
    margin-right: 10px;
  }
`

const ButtonsGroupSmall = styled(ButtonsGroup)`
  min-width: 300px;

  @media ${breakpoints.fromMediumScreen} {
    min-width: 400px;
  }
`

const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;

  @media ${breakpoints.fromMediumScreen} {
    height: auto;
  }

  & > h1 {
    font-size: 40px;

    @media ${breakpoints.fromMediumScreen} {
      font-size: 65px;
    }
  }

  & > p {
    font-size: 16px;
    font-weight: 100;
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
    font-size: 18px;
    width: 155px;
    background: none;
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

export default function Header({
  homeRef,
}: {
  homeRef: React.Ref<HTMLDivElement>
}) {
  const [isWeb, setIsWeb] = React.useState(true)
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

  return (
    <>
      <Head>
        <Logo viewBox="0 0 100 100">{LogoSvg}</Logo>

        <Heading>
          <DesktopLogo viewBox="0 0 100 100">{LogoSvg}</DesktopLogo> React Hook
          Form
        </Heading>

        <SubHeading style={{ marginBottom: 0 }}>
          Performant, flexible and extensible forms with easy to use for
          validation.
        </SubHeading>

        <ButtonsGroupSmall>
          <PrimaryButton
            onClick={() => {
              track({
                category: "Button",
                label: "Demo",
                action: "Click - Demo",
              })
              // @ts-ignore
              homeRef.current.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Demo
          </PrimaryButton>
          <PrimaryButton
            onClick={() => {
              track({
                category: "Button",
                label: "Get Started",
                action: "Click - Get Started",
              })
              navigate("/get-started")
            }}
          >
            Get Started &nbsp;<span>▶</span>
          </PrimaryButton>
        </ButtonsGroupSmall>
      </Head>

      <VideoHeading>React Web</VideoHeading>
      <VideoWrapper show={isWeb}>
        <Video
          id="tabPanel-1"
          aria-labelledby="tabPanel-1"
          controls
          playsInline
          muted
          onClick={() => {
            track({
              category: "Video",
              label: "video",
              action: "Play/Pause - Demo Video",
            })
          }}
        >
          <source src={video} type="video/mp4" />
        </Video>
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
          onClick={() => {
            track({
              category: "Video",
              label: "video",
              action: "Play/Pause - Demo Video",
            })
          }}
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
            track({
              category: "Button",
              label: "React Web",
              action: "Click - watch",
            })
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
            track({
              category: "Button",
              label: "React Native",
              action: "Click - watch",
            })
          }}
        >
          React Native
        </button>
      </ToggleGroup>
    </>
  )
}
