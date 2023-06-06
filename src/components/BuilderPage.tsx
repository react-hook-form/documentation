import { Animate } from "react-simple-animate"
import { useForm } from "react-hook-form"
import SortableContainer from "./SortableContainer"
import { useStateMachine } from "little-state-machine"
import colors from "../styles/colors"
import generateCode from "./logic/generateCode"
import copyClipBoard from "./utils/copyClipBoard"
import Footer from "./Footer"
import Popup from "./Popup"
import LearnMore from "./learnMore"
import goToBuilder from "./utils/goToBuilder"
import builder from "../data/builder"
import generic from "../data/generic"
import buttonStyles from "../styles/button.module.css"
import containerStyles from "../styles/container.module.css"
import typographyStyles from "../styles/typography.module.css"
import CodeArea from "./CodeArea"
import ClipBoard from "./ClipBoard"
import { useState, useRef, useEffect, memo, RefObject } from "react"
import styles from "./BuilderPage.module.css"
import { BeekaiBuilderPage } from "./BeekaiBuilderPage"
import { useRouter } from "next/router"

const updateStore = (state, payload) => {
  return {
    ...state,
    formData: [...payload],
  }
}

const errorStyle = {
  border: `1px solid ${colors.secondary}`,
  background: colors.errorPink,
}

const defaultValue = {
  max: undefined,
  min: undefined,
  pattern: undefined,
  maxLength: undefined,
  minLength: undefined,
  required: undefined,
  name: "",
  type: "",
  options: [],
}

function BuilderPage({
  showBuilder,
  toggleBuilder,
  HomeRef,
  isStatic,
}: {
  showBuilder?: boolean
  toggleBuilder?: (state: boolean) => void
  HomeRef?: RefObject<HTMLDivElement>
  isStatic?: boolean
}) {
  const {
    state: { formData = [] },
    actions: { updateFormData },
  } = useStateMachine({ updateFormData: updateStore })
  const [editFormData, setFormData] = useState(defaultValue)
  const {
    register,
    handleSubmit,
    errors = {},
    watch,
    setValue,
    reset,
  } = useForm()
  const [editIndex, setEditIndex] = useState(-1)
  const copyFormData = useRef([])
  const closeButton = useRef(null)
  const [showValidation, toggleValidation] = useState(false)
  const onSubmit = (data) => {
    toggleValidation(false)
    if (editIndex >= 0) {
      formData[editIndex] = data
      updateFormData([...formData.filter((formInput) => formInput)])
      setFormData(defaultValue)
      setEditIndex(-1)
    } else {
      updateFormData([...formData, ...[data]])
    }
    reset()
  }
  const form = useRef(null)
  const type = watch("type")
  const shouldToggleOn =
    editFormData.max ||
    editFormData.min ||
    editFormData.pattern ||
    editFormData.maxLength ||
    editFormData.minLength ||
    editFormData.required
  copyFormData.current = formData
  const editIndexRef = useRef(null)
  editIndexRef.current = editIndex
  const router = useRouter()

  const validate = (value) => {
    return (
      !Object.values(copyFormData.current).find(
        (data) => data.name === value
      ) || editIndexRef.current !== -1
    )
  }

  useEffect(() => {
    if (showBuilder && closeButton.current) {
      closeButton.current.focus()
    }
  }, [showBuilder])

  useEffect(() => {
    setValue("toggle", shouldToggleOn)
  }, [shouldToggleOn])

  useEffect(() => {
    if (editFormData.type) setValue("type", editFormData.type)
  }, [editFormData.type])

  useEffect(() => {
    setValue("required", editFormData.required)
  }, [editIndex])

  const child = (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        {builder.builder.title}
      </h1>
      <p className={typographyStyles.subHeading}>
        {builder.builder.description}
      </p>

      <div className={styles.pageWrapper}>
        <section>
          <h2 className={typographyStyles.title}>{builder.layout.title}</h2>

          <p style={{ fontSize: 14 }}>
            <Popup iconOnly />
            {builder.layout.message}
          </p>

          <SortableContainer
            {...{
              updateFormData,
              formData,
              editIndex,
              setEditIndex,
              setFormData,
              editFormData,
              reset,
            }}
          />
        </section>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={typographyStyles.title} ref={form}>
            {builder.inputCreator.title}
          </h2>

          <p style={{ fontSize: 14 }}>
            <Popup iconOnly />
            {builder.inputCreator.description}
          </p>

          <label>{generic.name}: </label>
          <input
            autoComplete="off"
            defaultValue={editFormData.name}
            aria-label="name"
            aria-invalid={errors["name"] ? "true" : "false"}
            name="name"
            style={{
              ...(errors["name"] ? errorStyle : null),
            }}
            ref={register({
              required: true,
              validate,
            })}
          />
          <Animate
            play={!!errors["name"]}
            duration={0.6}
            start={{
              maxHeight: 0,
            }}
            end={{ maxHeight: 20 }}
          >
            {errors.name && errors.name["type"] === "required" && (
              <p className={typographyStyles.error}>This is required.</p>
            )}
            {errors.name && errors.name["type"] === "validate" && (
              <p className={typographyStyles.error}>
                Name required to be unique.
              </p>
            )}
          </Animate>

          <label>{generic.type}: </label>
          <select
            aria-label="Select type"
            name="type"
            ref={register({ required: false })}
            defaultValue={editFormData.type}
          >
            <option value="text">Text</option>
            <option value="password">Password</option>
            <option value="select">Select</option>
            <option value="checkbox">Checkbox</option>
            <option value="radio">Radio</option>
            <option value="number">Number</option>
            <option value="textarea">Textarea</option>
            <option value="email">Email</option>
            <option value="range">Range</option>
            <option value="search">Search</option>
            <option value="tel">Tel</option>
            <option value="url">url</option>
            <option value="time">Time</option>
            <option value="datetime">datetime</option>
            <option value="datetime-local">datetime-local</option>
            <option value="week">week</option>
            <option value="month">month</option>
            <option value="validate" disabled>
              validate
            </option>
          </select>

          {(type === "select" ||
            type === "radio" ||
            editFormData.type === "select" ||
            editFormData.type === "radio") && (
            <>
              <label>{builder.inputCreator.options}:</label>
              <input
                key={editFormData.name}
                defaultValue={editFormData.options}
                type="text"
                name="options"
                placeholder="Enter options separate by ;"
                ref={register({
                  required: true,
                })}
              />
              <Animate
                play={!!errors["options"]}
                duration={0.6}
                start={{
                  maxHeight: 0,
                }}
                end={{ maxHeight: 20 }}
              >
                {errors.options && errors.options["type"] === "required" && (
                  <p className={typographyStyles.error}>This is required.</p>
                )}
              </Animate>
            </>
          )}

          <label>
            <input
              type="checkbox"
              name="toggle"
              ref={register({ required: false })}
              onClick={() => toggleValidation(!showValidation)}
            />
            {builder.inputCreator.validation}
          </label>

          <Animate
            play={shouldToggleOn || showValidation}
            start={{
              maxHeight: 0,
              overflow: "hidden",
            }}
            end={{
              maxHeight: 800,
              overflow: "hidden",
              marginBottom: 20,
            }}
          >
            <fieldset>
              <label
                style={{
                  marginTop: 0,
                }}
              >
                <input
                  type="checkbox"
                  name="required"
                  ref={register({ required: false })}
                />
                Required
              </label>
              <label htmlFor="max">Max</label>
              <input
                defaultValue={editFormData.max}
                aria-label="max"
                autoComplete="false"
                name="max"
                type="number"
                ref={register({ required: false })}
              />
              <label htmlFor="min">Min</label>
              <input
                defaultValue={editFormData.min}
                autoComplete="false"
                aria-label="min"
                name="min"
                type="number"
                ref={register({ required: false })}
              />
              <label htmlFor="maxLength">MaxLength</label>
              <input
                defaultValue={editFormData.maxLength}
                autoComplete="false"
                aria-label="max length"
                name="maxLength"
                type="number"
                ref={register({ required: false })}
              />
              <label htmlFor="pattern">Pattern</label>
              <input
                autoComplete="false"
                defaultValue={editFormData.pattern}
                style={{
                  marginBottom: "20px",
                }}
                aria-label="pattern"
                name="pattern"
                type="text"
                ref={register({ required: false })}
              />
            </fieldset>
          </Animate>

          <button
            className={buttonStyles.pinkButton}
            onClick={() => {
              form.current.scrollIntoView({ behavior: "smooth" })
            }}
          >
            {editIndex >= 0 ? generic.update : generic.create}
          </button>

          {formData.length > 0 && (
            <h2
              className={typographyStyles.title}
              style={{
                fontSize: 14,
                maxWidth: "80%",
                margin: "0 auto 0",
              }}
            >
              or
            </h2>
          )}

          <Animate
            play={(formData || []).length > 0}
            start={{
              opacity: 0,
              pointerEvents: "none",
            }}
            end={{
              opacity: 1,
              pointerEvents: "auto",
            }}
            render={({ style }) => (
              <button
                className={buttonStyles.darkButton}
                style={style}
                type="button"
                onClick={() => {
                  if (toggleBuilder) {
                    toggleBuilder(false)
                    document.body.style.overflow = "auto"
                    HomeRef?.current?.scrollIntoView({ behavior: "smooth" })
                  } else {
                    router.push("/?goToDemo&updated=true")
                  }
                }}
              >
                {builder.inputCreator.generate}
              </button>
            )}
          />
        </form>

        <section
          style={{
            paddingRight: "20px",
            position: "relative",
          }}
        >
          <h2 className={typographyStyles.title}>{builder.code.title}</h2>

          <p style={{ fontSize: 14 }}>
            <Popup iconOnly />
            {builder.code.description}
          </p>

          <section
            style={{
              position: "relative",
            }}
          >
            <div className={styles.buttonWrapper}>
              <ClipBoard
                onClick={() => copyClipBoard(generateCode(formData))}
                className={`${styles.button} ${styles.copyButton}`}
              />
            </div>

            <CodeArea rawData={generateCode(formData)} withOutCopy />
          </section>
        </section>
      </div>

      <BeekaiBuilderPage />

      <div style={{ margin: "0 20px" }}>
        <LearnMore />

        <Footer />
      </div>
    </div>
  )

  if (isStatic) return child

  return (
    <Animate
      play={showBuilder || isStatic}
      easeType="ease-in"
      duration={0.5}
      start={{
        transform: "translateY(100vh)",
      }}
      end={{
        transform: "translateY(0)",
      }}
      render={({ style }) => (
        <main className={styles.root} style={style}>
          <div
            id="builder"
            style={{
              overflow: "auto",
              height: "100vh",
              background: colors.primary,
            }}
          >
            <button
              className={styles.closeButton}
              aria-label="close builder"
              ref={closeButton}
              onClick={() => {
                toggleBuilder(false)
                goToBuilder(false)
              }}
            >
              &#10005;
            </button>

            {child}
          </div>
        </main>
      )}
    />
  )
}

export default memo(BuilderPage)
