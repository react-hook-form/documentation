import { Heading, SubHeading } from '../styles/typography'
import * as React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'
import { AnimateGroup } from 'react-simple-animate'
import FeaturesList from './FeaturesList'
import track from './utils/track'
import { navigate } from '@reach/router'
import video from '../images/react-hook-form-demo-video.mp4'
import { ButtonsGroup } from '../styles/buttons'
import breakpoints from "../styles/breakpoints";

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
  margin-bottom: 100px;
  margin-top: -45px;
  background: ${colors.primary};

  @media ${breakpoints.fromMediumScreen} {
    width: 700px;
    height: 491px;
    margin: 0 auto 40px;
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

export default function Header({ homeRef, tabIndex }: any) {
  return (
    <AnimateGroup play>
      <Head>
        <Logo viewBox="0 0 100 100">
          <path d="M73.56,13.32H58.14a8.54,8.54,0,0,0-16.27,0H26.44a11,11,0,0,0-11,11V81.63a11,11,0,0,0,11,11H73.56a11,11,0,0,0,11-11V24.32A11,11,0,0,0,73.56,13.32Zm-30.92,2a1,1,0,0,0,1-.79,6.54,6.54,0,0,1,12.78,0,1,1,0,0,0,1,.79h5.38v6.55a3,3,0,0,1-3,3H40.25a3,3,0,0,1-3-3V15.32ZM82.56,81.63a9,9,0,0,1-9,9H26.44a9,9,0,0,1-9-9V24.32a9,9,0,0,1,9-9h8.81v6.55a5,5,0,0,0,5,5h19.5a5,5,0,0,0,5-5V15.32h8.81a9,9,0,0,1,9,9Z" />
          <path style={{ transform: 'translateX(-25px)' }} d="M71.6,45.92H54a1,1,0,0,0,0,2H71.6a1,1,0,0,0,0-2Z" />
          <path d="M71.6,45.92H54a1,1,0,0,0,0,2H71.6a1,1,0,0,0,0-2Z" />
          <path style={{ transform: 'translateX(-25px)' }} d="M71.1,69.49H53.45a1,1,0,1,0,0,2H71.1a1,1,0,0,0,0-2Z" />
          <path d="M71.1,69.49H53.45a1,1,0,1,0,0,2H71.1a1,1,0,0,0,0-2Z" />
        </Logo>

        <Heading>React Hook Form</Heading>
        <SubHeading>Performance, flexible and extensible forms with easy to use for validation.</SubHeading>

        <ButtonsGroupSmall>
          <button
            tabIndex={tabIndex}
            onClick={() => {
              track({
                category: 'Button',
                label: 'Demo',
                action: 'Click - Demo',
              })
              homeRef.current.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Demo
          </button>
          <button
            tabIndex={tabIndex}
            onClick={() => {
              track({
                category: 'Button',
                label: 'Get Started',
                action: 'Click - Get Started',
              })
              navigate('/get-started')
            }}
          >
            Get Started
          </button>
        </ButtonsGroupSmall>
      </Head>

      <Video
        controls
        autoPlay
        playsInline
        muted
        onClick={() => {
          track({
            category: 'Video',
            label: 'video',
            action: 'Play/Pause - Demo Video',
          })
        }}
      >
        <source src={video} type="video/mp4" />
      </Video>

      <FeaturesList />
    </AnimateGroup>
  )
}
