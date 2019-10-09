import * as React from "react"
import { Title, H1, Note } from "../styles/typography"
import { Animate } from "react-simple-animate"
import styled from "styled-components"
import track from "./utils/track"
import { useStateMachine } from "little-state-machine"
import FormFields from "./FormFields"
import { DarkButton, PinkButton } from "../styles/buttons"
import { CenterContent } from "../styles/containers"
import goToBuilder from "./utils/goToBuilder"
import useForm from "react-hook-form"

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
  margin-top: 20px;
`

const DemoForm = styled.form`
  flex: 1;

  & > select,
  & > input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    padding: 6px 10px;
    margin-bottom: 10px;
    font-size: 0.9rem;
  }

  & > select:not([multiple]) {
    height: 43px;
  }
`

export default function Form({
  onSubmit,
  submitData,
  toggleBuilder,
  formUpdated,
}: {
  onSubmit: any
  submitData: any
  toggleBuilder: (state: boolean) => void
  formUpdated: boolean
}) {
  const {
    register,
    errors,
    handleSubmit,
    watch,
    formState: { touched },
    reset,
  } = useForm({
    mode: "onChange",
  })
  const {
    state: { formData },
  } = useStateMachine()

  return (
    <>
      <CenterContent>
        <H1>Live Demo</H1>
        {formUpdated && (
          <Animate
            play={formUpdated}
            start={{ opacity: 0, transform: "translateY(20px)" }}
            end={{ opacity: 1 }}
            delay={1.5}
            render={({ style }) => (
              <p style={{ marginBottom: 20, ...style }}>
                <Note>Note:</Note> your form have been updated.
              </p>
            )}
          />
        )}
        <p>
          The following form demonstrates form validation in action. Each column
          represents what has been captured in the custom hook. You can also
          change fields in the form by clicking the <strong>EDIT</strong>{" "}
          button.
        </p>
      </CenterContent>
      <Wrapper>
        <DemoForm onSubmit={handleSubmit(onSubmit)}>
          <Title>Example</Title>

          <FormFields {...{ formData, errors, register }} />

          <PinkButton
            onClick={() => {
              track({
                category: "Button",
                action: "Submit - Form data",
                label: "Submit",
              })
            }}
          >
            Submit
          </PinkButton>
          <Title
            style={{
              fontSize: 14,
              maxWidth: "80%",
              margin: "0 auto 0",
            }}
          >
            or
          </Title>

          <DarkButton
            type="button"
            onClick={() => {
              reset()
              track({
                category: "Button",
                action: "Edit - Form data",
                label: "Edit",
              })
              toggleBuilder(true)
              goToBuilder()
            }}
          >
            Edit
          </DarkButton>
        </DemoForm>

        <section>
          <Title>Watch</Title>
          {!Object.keys(watch()).length && (
            <p>ⓘ Change input value to see watched values.</p>
          )}
          <Animate
            duration={0.8}
            play={Object.keys(watch() || {}).length > 0}
            start={{ opacity: 0 }}
            end={{ opacity: 1 }}
          >
            <Code>{JSON.stringify(watch(), null, 2)}</Code>
          </Animate>
        </section>

        <section>
          <Title>Errors</Title>
          {!Object.keys(errors).length && (
            <p>ⓘ Validation errors will appear here.</p>
          )}
          <Animate
            duration={0.8}
            play={!!Object.keys(errors).length}
            start={{ opacity: 0 }}
            end={{ opacity: 1 }}
          >
            <Code>
              {Object.keys(errors).length
                ? JSON.stringify(
                    Object.entries(errors).reduce(
                      (previous, [key, { ref, ...rest }]) => {
                        previous[key] = rest
                        return previous
                      },
                      {}
                    ),
                    null,
                    2
                  )
                : ""}
            </Code>
          </Animate>
        </section>

        <section>
          <Title>Touched</Title>
          {!touched.length && (
            <p>ⓘ Touched fields will display here.</p>
          )}
          <Animate
            duration={0.8}
            play={!!touched.length}
            start={{ opacity: 0 }}
            end={{ opacity: 1 }}
          >
            <Code>{JSON.stringify(touched, null, 2)}</Code>
          </Animate>
        </section>

        {!!Object.keys(submitData).length && (
          <section>
            <Title>Submit</Title>
            <Animate
              duration={0.8}
              play={!!Object.keys(submitData).length}
              start={{ opacity: 0 }}
              end={{ opacity: 1 }}
            >
              <Code>
                {Object.keys(submitData).length
                  ? JSON.stringify(submitData, null, 2)
                  : ""}
              </Code>
            </Animate>
          </section>
        )}
      </Wrapper>
    </>
  )
}
