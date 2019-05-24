import * as React from 'react'
import useForm from 'react-hook-form'
import { Animate } from 'react-simple-animate'
import ButtonGroup from './ButtonGroup'
import styled from 'styled-components'
import colors from './styles/colors'
import Form from './Form'
import Header from './Header'
import CodeCompareSection from './CodeCompareSection'
import CodePerfCompareSection from './CodePerfCompareSection'
import FooterContent from './Footer'

const { useState, useRef, Suspense, useEffect } = React

const LazyLoadPage = ({
  settingButton,
  toggleSetting,
  setting,
  showSetting,
  setConfig,
  showBuilder,
  toggleBuilder,
  builderButton,
  isMobile,
  HomeRef,
}) => {
  const Setting = React.lazy(() => import('./Setting'))
  const Builder = React.lazy(() => import('./BuilderPage'))

  return typeof window === 'undefined' ? null : (
    <>
      <Suspense fallback={<span />}>
        <Setting
          settingButton={settingButton}
          toggleSetting={toggleSetting}
          setting={setting}
          showSetting={showSetting}
          setConfig={setConfig}
        />
      </Suspense>

      <Suspense fallback={<span />}>
        <Builder
          showBuilder={showBuilder}
          toggleBuilder={toggleBuilder}
          builderButton={builderButton}
          isMobile={isMobile}
          HomeRef={HomeRef}
        />
      </Suspense>
    </>
  )
}

const Root = styled.div`
  overflow: hidden;
  color: white;
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
    font-size: 16px;
  }

  & form > select {
    width: 100%;
  }

  & form > select:not([multiple]) {
    height: 37px;
  }

  & form {
    flex: 1;
  }

  & form > input.form-error {
    border: 1px solid #bf1650;
  }
`

const Footer = styled.footer`
  padding: 40px 0;
  font-size: 12px;
  font-weight: 200;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  & > a {
    color: white;
    text-decoration: none;
    transition: 0.3s all;

    &:hover {
      color: ${colors.lightPink};
    }
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
  const {
    register,
    errors,
    handleSubmit,
    watch,
    formState: { touched },
  } = useForm({
    mode: setting.mode,
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

    isMobile = typeof window === 'undefined' ? window.matchMedia('(max-width: 768px)').matches : false
  }, [])

  const Buttons = (
    <ButtonGroup
      tabIndex={tabIndex}
      pathname={location.pathname}
      builderButton={builderButton}
      toggleBuilder={toggleBuilder}
      toggleSetting={toggleSetting}
      showSetting={showSetting}
      settingButton={settingButton}
      showBuilder={showBuilder}
    />
  )

  return (
    <Root>
      {!isMobile && Buttons}

      <LazyLoadPage
        {...{
          settingButton,
          toggleSetting,
          setting,
          showSetting,
          setConfig,
          showBuilder,
          toggleBuilder,
          builderButton,
          isMobile,
          HomeRef,
        }}
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

          <Form
            {...{
              tabIndex,
              showSetting,
              toggleSetting,
              handleSubmit,
              onSubmit,
              submitData,
              register,
              errors,
              watch,
              touched,
              toggleBuilder,
              setting,
            }}
          />

          <Footer ref={HomeRef}>
            <FooterContent />
          </Footer>
        </Animate>
      </div>
    </Root>
  )
}

export default React.memo(App)
