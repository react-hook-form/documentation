import * as React from "react"
import { Animate } from "react-simple-animate"
import { useStateMachine } from "little-state-machine"
import FormFields from "./FormFields"
import goToBuilder from "./utils/goToBuilder"
import { useForm } from "react-hook-form"
import home from "../data/home"
import generic from "../data/generic"
import buttonStyles from "../styles/button.module.css"
import containerStyles from "../styles/container.module.css"
import typographyStyles from "../styles/typography.module.css"
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
  methods,
  devTool,
}: {
  onSubmit: any
  submitData: Object
  toggleBuilder: (state: boolean) => void
  formUpdated: boolean
  currentLanguage: string
  methods: any
  devTool: boolean
}) {
  const {
    register,
    errors,
    handleSubmit,
    watch,
    formState: { touched },
    reset,
  } =
    methods ||
    useForm({
      mode: "onChange",
    })
  const {
    state: { formData },
  } = useStateMachine()

  return (
    <>
      {!devTool && (
        <div className={containerStyles.centerContent}>
          <h1 className={typographyStyles.h1}>
            {home.liveDemo[currentLanguage].title}
          </h1>
          {formUpdated && (
            <Animate
              play={formUpdated}
              start={{ opacity: 0, transform: "translateY(20px)" }}
              end={{ opacity: 1 }}
              delay={1.5}
              render={({ style }) => (
                <p style={{ marginBottom: 20, ...style }}>
                  <b className={typographyStyles.note}>Note:</b> your form have
                  been updated.
                </p>
              )}
            />
          )}
          <p>{home.liveDemo[currentLanguage].description}</p>
        </div>
      )}

      <div className={styles.wrapper}>
        <form className={styles.demoForm} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={typographyStyles.title}>
            {generic.example[currentLanguage]}
          </h2>

          <FormFields {...{ formData, errors, register }} />

          <button className={buttonStyles.pinkButton}>
            {home.liveDemo[currentLanguage].submit}
          </button>

          {!devTool && (
            <>
              <h2
                className={typographyStyles.title}
                style={{
                  fontSize: 14,
                  maxWidth: "80%",
                  margin: "0 auto",
                }}
              >
                or
              </h2>

              <button
                className={buttonStyles.darkButton}
                type="button"
                onClick={() => {
                  reset()
                  toggleBuilder(true)
                  goToBuilder()
                }}
              >
                {generic.edit[currentLanguage]}
              </button>
            </>
          )}
        </form>

        {!devTool && (
          <>
            <section>
              <h2 className={typographyStyles.title}>
                {home.liveDemo[currentLanguage].watchTitle}
              </h2>
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
              <h2 className={typographyStyles.title}>
                {home.liveDemo[currentLanguage].errorTitle}
              </h2>
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
              <h2 className={typographyStyles.title}>
                {home.liveDemo[currentLanguage].touchedTitle}
              </h2>
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
                <h2 className={typographyStyles.title}>
                  {home.liveDemo[currentLanguage].submit}
                </h2>
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
          </>
        )}
      </div>
    </>
  )
}

export default React.memo(Form)
