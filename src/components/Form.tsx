import * as React from 'react'
import { Title, H1 } from '../styles/typography'
import colors from '../styles/colors'
import { Animate } from 'react-simple-animate'
import styled from 'styled-components'
import Setting from './svgs/setting'
import track from './utils/track'
import { useStateMachine } from 'little-state-machine'
import { navigate } from '@reach/router'
import FormFields from './FormFields'
import { DarkBlueButton, PinkButton } from '../styles/buttons'
import { CenterContent } from '../styles/containers'
import goToBuilder from './utils/goToBuilder'

const Code = styled.pre`
  text-align: left;
  padding: 0 20px;
  white-space: pre-wrap;
  font-size: 0.7rem;
  line-height: 1.6;
`

const Wrapper = styled.div`
  display: grid;
  min-height: 70vh;
  transition: 1s all;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-column-gap: 40px;
`

const SettingIcon = styled.button`
  -webkit-appearance: none;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 14px;
  right: -2px;
  top: 0;
  z-index: 1;
  padding-left: 10px;
  background: #04102e;
  border-radius: 2px;
  cursor: pointer;

  @media (min-width: 768px) {
    top: 5px;
  }

  &:hover {
    transition: 0.3s all;
    color: ${colors.lightPink};
  }

  & > svg {
    fill: white;
    width: 20px;
    margin-right: 5px;
    display: inline-block;
  }
`

const SettingWords = styled.span`
  display: none;

  @media (min-width: 1500px) {
    display: inline-block;
  }
`

export default function Form({
  tabIndex,
  handleSubmit,
  onSubmit,
  submitData,
  register,
  errors,
  watch,
  toggleBuilder,
  setting,
  showSetting,
  toggleSetting,
  touched,
}) {
  const {
    state: { formData },
  } = useStateMachine()

  return (
    <>
      <CenterContent>
        <H1>Live Demo</H1>
        <p>
          The following form demonstrates form validation in action. Each columns represent what's been captured in the
          custom Hook. You can also change fields in the form by clicking the <strong>EDIT</strong> button, changing
          validation mode can be done by clicking the setting icon.
        </p>
      </CenterContent>
      <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title>
            Example{' '}
            <SettingIcon
              aria-label="Demo form setting"
              tabIndex={tabIndex}
              type="button"
              onClick={() => {
                track({
                  category: 'Icon Button',
                  label: 'Setting',
                  action: 'Click - Open Setting Menu',
                })
                toggleSetting(!showSetting)
              }}
            >
              <Setting />
              <SettingWords>Setting</SettingWords>
            </SettingIcon>
          </Title>

          <FormFields {...{ formData, errors, register, tabIndex }} />

          <PinkButton
            onClick={() => {
              track({
                category: 'Button',
                action: 'Submit - Form data',
                label: 'Submit',
              })
            }}
          >
            Submit
          </PinkButton>
          <Title
            style={{
              fontSize: 14,
              maxWidth: '80%',
              margin: '20px auto 0',
            }}
          >
            or
          </Title>

          <PinkButton
            type="button"
            tabIndex={tabIndex}
            onClick={() => {
              track({
                category: 'Button',
                action: 'Edit - Form data',
                label: 'Edit',
              })
              toggleBuilder(true)
              goToBuilder()
            }}
            style={{
              background: 'black',
              marginTop: 20,
              color: 'white',
              border: `1px solid ${colors.lightPink}`,
            }}
          >
            Edit
          </PinkButton>
        </form>

        {setting.showError && (
          <section>
            <Title>Errors</Title>
            {!Object.keys(errors).length && <p>ⓘ Press submit to trigger validation error.</p>}
            <Animate duration={0.8} play={!!Object.keys(errors).length} start={{ opacity: 0 }} end={{ opacity: 1 }}>
              <Code>
                {Object.keys(errors).length
                  ? JSON.stringify(
                      // @ts-ignore
                      Object.entries(errors).reduce((previous, [key, { ref, ...rest }]) => {
                        previous[key] = rest
                        return previous
                      }, {}),
                      null,
                      2,
                    )
                  : ''}
              </Code>
            </Animate>
          </section>
        )}

        {setting.showWatch &&
          setting.mode === 'onChange' && (
            <section>
              <Title>Watch</Title>
              {!Object.keys(watch() || {}).length && <p>ⓘ Change input value to see watched values.</p>}
              <Animate
                duration={0.8}
                play={Object.keys(watch() || {}).length > 0}
                start={{ opacity: 0 }}
                end={{ opacity: 1 }}
              >
                <Code>{JSON.stringify(watch(), null, 2)}</Code>
              </Animate>
            </section>
          )}

        {setting.showTouch && (
          <section>
            <Title>Touched</Title>
            {!Object.keys(touched).length && <p>ⓘ Touched fields will display here.</p>}
            <Animate duration={0.8} play={touched.length} start={{ opacity: 0 }} end={{ opacity: 1 }}>
              <Code>{JSON.stringify(touched, null, 2)}</Code>
            </Animate>
          </section>
        )}

        {setting.showSubmit && (
          <section>
            <Title>Submit</Title>
            {!Object.keys(submitData).length && <p>ⓘ Successful submit values will display here.</p>}
            <Animate duration={0.8} play={!!Object.keys(submitData).length} start={{ opacity: 0 }} end={{ opacity: 1 }}>
              <Code>{Object.keys(submitData).length ? JSON.stringify(submitData, null, 2) : ''}</Code>
            </Animate>
          </section>
        )}
      </Wrapper>
    </>
  )
}
