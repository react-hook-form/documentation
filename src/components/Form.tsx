import { memo } from "react"
import { Animate } from "react-simple-animate"
import { useStateMachine } from "little-state-machine"
import FormFields from "./FormFields"
import goToBuilder from "./utils/goToBuilder"
import { useForm } from "react-hook-form"
import home from "../data/home"
import generic from "../data/generic"
import * as buttonStyles from "../styles/button.module.css"
import * as containerStyles from "../styles/container.module.css"
import * as typographyStyles from "../styles/typography.module.css"
import * as styles from "./Form.module.css"

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
  methods,
  devTool,
}: {
  onSubmit: any
  submitData: unknown
  toggleBuilder: (state: boolean) => void
  formUpdated: boolean
  methods?: any
  devTool?: boolean
}) {
  const { register, errors, handleSubmit, watch, formState, reset } =
    methods ||
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useForm({
      mode: "onChange",
    })
  const touched = Object.keys(formState.touched)
  const {
    state: { formData },
  } = useStateMachine()

  console.log(errors)

  return (
    <>
      {!devTool && (
        <div className={containerStyles.centerContent}>
          <h1 className={typographyStyles.h1}>{generic.liveDemo}</h1>
          {formUpdated && (
            <Animate
              play={formUpdated}
              start={{ opacity: 0, transform: "translateY(20px)" }}
              end={{ opacity: 1 }}
              delay={1.5}
              render={({ style }) => (
                <p style={{ marginBottom: 20, ...style }}>
                  <b className={typographyStyles.note}>Note:</b> your form has
                  been updated.
                </p>
              )}
            />
          )}
          <p className={typographyStyles.homeParagraph}>
            {home.liveDemo.description}
          </p>
        </div>
      )}

      <div className={styles.wrapper}>
        <form className={styles.demoForm} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={typographyStyles.title} style={{ marginTop: 40 }}>
            {generic.example}
          </h2>

          <FormFields {...{ formData, errors, register }} />

          <button className={buttonStyles.pinkButton}>
            {home.liveDemo.submit}
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
                {generic.edit}
              </button>
            </>
          )}
        </form>

        {!devTool && (
          <>
            <section>
              <h2 className={typographyStyles.title}>
                {home.liveDemo.watchTitle}
              </h2>
              <p>ⓘ {home.liveDemo.watch}</p>
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
                {home.liveDemo.errorTitle}
              </h2>
              <p>ⓘ {home.liveDemo.error}</p>
              <Animate {...animationProps} play={!!Object.keys(errors).length}>
                <pre className={styles.code}>
                  {Object.keys(errors).length > 0 &&
                    JSON.stringify(
                      Object.entries(errors).reduce(
                        // @ts-expect-error needed for previous
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
                {home.liveDemo.touchedTitle}
              </h2>
              <p>ⓘ {home.liveDemo.touched}</p>
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
                  {home.liveDemo.submit}
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

export default memo(Form)
