import * as React from "react"
import { Title, H1, Note } from "../styles/typography"
import { Animate } from "react-simple-animate"
import { useStateMachine } from "little-state-machine"
import FormFields from "./FormFields"
import { DarkButton, PinkButton } from "../styles/buttons"
import { CenterContent } from "../styles/containers"
import goToBuilder from "./utils/goToBuilder"
import useForm from "react-hook-form"
import home from "../data/home"
import generic from "../data/generic"
import styles from "./Form.module.css"

const animationProps = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
  duration: 0.8,
}

function Form({
  onSubmit,
  submitData,
  toggleBuilder,
  formUpdated,
  currentLanguage,
}: {
  onSubmit: any
  submitData: Object
  toggleBuilder: (state: boolean) => void
  formUpdated: boolean
  currentLanguage: string
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
        <H1>{home.liveDemo[currentLanguage].title}</H1>
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
        <p>{home.liveDemo[currentLanguage].description}</p>
      </CenterContent>

      <div className={styles.wrapper}>
        <form className={styles.demoForm} onSubmit={handleSubmit(onSubmit)}>
          <Title>{generic.example[currentLanguage]}</Title>

          <FormFields {...{ formData, errors, register }} />

          <PinkButton>{home.liveDemo[currentLanguage].submit}</PinkButton>

          <Title
            style={{
              fontSize: 14,
              maxWidth: "80%",
              margin: "0 auto",
            }}
          >
            or
          </Title>

          <DarkButton
            type="button"
            onClick={() => {
              reset()
              toggleBuilder(true)
              goToBuilder()
            }}
          >
            {generic.edit[currentLanguage]}
          </DarkButton>
        </form>

        <section>
          <Title>{home.liveDemo[currentLanguage].watchTitle}</Title>
          <p>ⓘ {home.liveDemo[currentLanguage].watch}</p>
          <Animate
            play={Object.keys(watch()).length > 0}
            {...animationProps}
            render={({ style }) => (
              <pre className={styles.code} style={style}>
                {JSON.stringify(watch(), null, 2)}
              </pre>
            )}
          />
        </section>

        <section>
          <Title>{home.liveDemo[currentLanguage].errorTitle}</Title>
          <p>ⓘ {home.liveDemo[currentLanguage].error}</p>
          <Animate {...animationProps} play={!!Object.keys(errors).length}>
            <pre className={styles.code}>
              {Object.keys(errors).length > 0 &&
                JSON.stringify(
                  Object.entries(errors).reduce(
                    (previous, [key, { ref, ...rest }]) => {
                      previous[key] = rest
                      return previous
                    },
                    {}
                  ),
                  null,
                  2
                )}
            </pre>
          </Animate>
        </section>

        <section>
          <Title>{home.liveDemo[currentLanguage].touchedTitle}</Title>
          <p>ⓘ {home.liveDemo[currentLanguage].touched}</p>
          <Animate
            play={!!touched.length}
            {...animationProps}
            render={({ style }) => (
              <pre className={styles.code} style={style}>
                {JSON.stringify(touched, null, 2)}
              </pre>
            )}
          />
        </section>

        {!!Object.keys(submitData).length && (
          <section>
            <Title>{home.liveDemo[currentLanguage].submit}</Title>
            <Animate
              play={!!Object.keys(submitData).length}
              {...animationProps}
              render={({ style }) => (
                <pre className={styles.code} style={style}>
                  {Object.keys(submitData).length > 0 &&
                    JSON.stringify(submitData, null, 2)}
                </pre>
              )}
            />
          </section>
        )}
      </div>
    </>
  )
}

export default React.memo(Form)
