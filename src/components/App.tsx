import * as React from 'react'
import { Animate } from 'react-simple-animate'
import Nav from './Nav'
import styled from 'styled-components'
import colors from '../styles/colors'
import Form from './Form'
import Header from './Header'
import CodeCompareSection from './CodeCompareSection'
import CodePerfCompareSection from './CodePerfCompareSection'
import FooterContent from './Footer'
import Builder from './BuilderPage'
import { H1 } from '../styles/typography'
import { ButtonsGroup, DarkBlueButton } from '../styles/buttons'
import track from './utils/track'
import { navigate } from '@reach/router'
import { CenterContent } from '../styles/containers'

const { useState, useRef, useEffect } = React

const Root = styled.div`
  overflow: hidden;
  padding: 0 20px 50px;
  position: relative;

  @media (min-width: 1024px) {
    padding: 0 50px;
  }

  & form > select,
  & form > input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 0.9rem;
  }

  & form > select:not([multiple]) {
    height: 37px;
  }

  & form {
    flex: 1;
  }

  & form > input.form-error {
    border: 1px solid ${colors.secondary};
  }
`

function App({ location }) {
  const [submitData, updateSubmitData] = useState({})
  const settingButton = useRef(null)
  const builderButton = useRef(null)
  const HomeRef = useRef(null)
  const [showSetting, toggleSetting] = useState(false)
  const [showBuilder, toggleBuilder] = useState(false)
  const [setting, setConfig] = useState<{
    mode: 'onSubmit' | 'onBlur' | 'onChange'
    showError: boolean
    showWatch: boolean
    showTouch: boolean
    showSubmit: boolean
  }>({
    mode: 'onChange',
    showError: true,
    showWatch: true,
    showTouch: true,
    showSubmit: true,
  })
  const tabIndex = showBuilder ? -1 : 0
  let isMobile

  const onSubmit = data => {
    updateSubmitData(data)
  }

  useEffect(() => {
    if (location.search === '?goToDemo') {
      HomeRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    // @ts-ignore
    isMobile = typeof window === 'undefined' ? window.matchMedia('(max-width: 768px)').matches : false
  }, [])

  const Buttons = (
    <Nav
      tabIndex={tabIndex}
      pathname={location.pathname}
      builderButton={builderButton}
      showBuilder={showBuilder}
      toggleBuilder={toggleBuilder}
    />
  )

  return (
    <Root>
      {!isMobile && Buttons}

      <Builder
        showBuilder={showBuilder}
        toggleBuilder={toggleBuilder}
        builderButton={builderButton}
        isMobile={isMobile}
        HomeRef={HomeRef}
      />

      {isMobile && Buttons}

      <div
        onClick={() => {
          if (showSetting || showBuilder) {
            toggleSetting(false)
            toggleBuilder(false)
          }
        }}
        style={{
          perspective: '2000px',
        }}
      >
        <Animate
          play={showBuilder || showSetting}
          start={{ minHeight: '100vh', filter: 'blur(0)', transform: 'scale(1)' }}
          end={{ minHeight: '100vh', filter: 'blur(3px)', transform: 'scale(0.9) rotateX(5deg)' }}
        >
          <Header tabIndex={tabIndex} homeRef={HomeRef} />

          <CodeCompareSection />

          <CodePerfCompareSection />

          <CenterContent>
            <H1>Find it useful and interesting?</H1>
            <p>
              Form validation should be much simpler with React Hook Form. It will lead you to write less code and
              having better performance. Checkout the get started section and learn more at API documentation page.
            </p>
            <ButtonsGroup
              style={{
                maxWidth: 500,
                margin: '0 auto',
              }}
            >
              <DarkBlueButton
                onClick={() => {
                  track({
                    category: 'Button',
                    label: 'Get Started - Find it useful and interesting',
                    action: 'Click - Go to Get Started page',
                  })
                  navigate('/get-started')
                }}
              >
                Get Started
              </DarkBlueButton>
              <DarkBlueButton
                onClick={() => {
                  track({
                    category: 'Button',
                    label: 'API',
                    action: 'Click - Go to API page',
                  })
                  navigate('/api')
                }}
              >
                API
              </DarkBlueButton>
            </ButtonsGroup>
          </CenterContent>

          <Form
            {...{
              tabIndex,
              showSetting,
              toggleSetting,
              onSubmit,
              submitData,
              toggleBuilder,
              setting,
            }}
          />

          <div ref={HomeRef}>
            <FooterContent />
          </div>
        </Animate>
      </div>
    </Root>
  )
}

export default React.memo(App)
