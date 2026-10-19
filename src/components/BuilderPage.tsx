import { useState, useRef, useEffect, memo, RefObject } from "react"
import { useRouter } from "next/router"
import { Animate } from "react-simple-animate"
import clsx from "clsx"
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import SortableContainer from "./SortableContainer"
import { useStateMachine } from "little-state-machine"
import type { GlobalState, FormDataItem } from "little-state-machine"
import generateCode from "./logic/generateCode"
import copyClipBoard from "./utils/copyClipBoard"
import Footer from "./Footer"
import LearnMore from "./learnMore"
import goToBuilder from "./utils/goToBuilder"
import builder from "../data/builder"
import generic from "../data/generic"
import styles from "./BuilderPage.module.css"
import cards from "../styles/cards.module.css"
import PageHeader from "./PageHeader"
import { PrismSyntaxHighlight } from "./mdx/code"

type FormFieldDefinitionItem = Partial<FormDataItem> & { toggle?: boolean }

const defaultValue: FormFieldDefinitionItem = {
  max: undefined,
  min: undefined,
  pattern: undefined,
  maxLength: undefined,
  minLength: undefined,
  required: undefined,
  name: "",
  type: "",
  options: "",
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
  } = useStateMachine({
    updateFormData: (state, payload: GlobalState["formData"]) => {
      return {
        ...state,
        formData: [...payload],
      }
    },
  })
  const [editFormData, setEditFormData] = useState(defaultValue)
  const { register, handleSubmit, watch, setValue, reset, formState } =
    useForm<FormFieldDefinitionItem>()
  const errors = formState.errors
  const [editIndex, setEditIndex] = useState(-1)
  const copyFormData = useRef<GlobalState["formData"]>([])
  const closeButton = useRef<HTMLButtonElement>(null)
  const [showValidation, toggleValidation] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const id = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(id)
  }, [copied])

  const onSubmit: SubmitHandler<FormFieldDefinitionItem> = (data) => {
    toggleValidation(false)
    if (editIndex >= 0) {
      formData[editIndex] = data as FormDataItem
      updateFormData([...formData.filter((formInput) => formInput)])
      setEditFormData(defaultValue)
      setEditIndex(-1)
    } else {
      updateFormData([...formData, data as FormDataItem])
    }
    reset()
  }

  const form = useRef<HTMLHeadingElement>(null)
  const type = watch("type")
  const shouldToggleOn =
    !!editFormData.max ||
    !!editFormData.min ||
    !!editFormData.pattern ||
    !!editFormData.maxLength ||
    !!editFormData.minLength ||
    editFormData.required
  copyFormData.current = formData
  const editIndexRef = useRef<number | null>(null)
  editIndexRef.current = editIndex
  const router = useRouter()

  const validate = (value: unknown) => {
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
  }, [setValue, shouldToggleOn])

  useEffect(() => {
    if (editFormData.type) setValue("type", editFormData.type)
  }, [editFormData.type, setValue])

  useEffect(() => {
    setValue("required", !!editFormData.required)
  }, [editFormData.required, editIndex, setValue])

  const code = generateCode(formData)
  const showValidationFields = shouldToggleOn || showValidation

  const child = (
    <div className={cards.page}>
      <PageHeader
        eyebrow="Tools"
        title={builder.builder.title}
        lead="Build a form visually, then copy the generated React Hook Form code."
      />

      <div className={styles.pageWrapper}>
        <section className={styles.panel} aria-labelledby="builder-layout">
          <header className={styles.panelHeader}>
            <span className={styles.step}>1</span>
            <h2 id="builder-layout">{builder.layout.title}</h2>
            <span className={styles.count}>{formData.length} fields</span>
          </header>
          <p className={styles.hint}>
            Drag fields to reorder them, or edit and delete each one.
          </p>

          <SortableContainer
            updateFormData={updateFormData}
            formData={formData}
            editIndex={editIndex}
            setEditIndex={setEditIndex}
            setFormData={setEditFormData}
            reset={reset}
          />
        </section>

        <section className={styles.panel} aria-labelledby="builder-creator">
          <header className={styles.panelHeader}>
            <span className={styles.step}>2</span>
            <h2 id="builder-creator" ref={form}>
              {editIndex >= 0 ? "Edit field" : builder.inputCreator.title}
            </h2>
          </header>
          <p className={styles.hint}>
            Create or update a field. Generate Form loads it into the live demo
            on the homepage.
          </p>

          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label className={styles.field}>
              <span>{generic.name}</span>
              <input
                autoComplete="off"
                defaultValue={editFormData.name}
                aria-invalid={errors["name"] ? "true" : "false"}
                placeholder="e.g. firstName"
                {...register("name", { required: true, validate })}
              />
              {errors.name && (
                <small className={styles.error}>
                  {errors.name.type === "validate"
                    ? "Name must be unique."
                    : "Name is required."}
                </small>
              )}
            </label>

            <label className={styles.field}>
              <span>{generic.type}</span>
              <select
                {...register("type", { required: false })}
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
            </label>

            {(type === "select" ||
              type === "radio" ||
              editFormData.type === "select" ||
              editFormData.type === "radio") && (
              <label className={styles.field}>
                <span>{builder.inputCreator.options}</span>
                <input
                  key={editFormData.name}
                  defaultValue={editFormData.options}
                  type="text"
                  placeholder="Separate options with ;"
                  aria-invalid={errors["options"] ? "true" : "false"}
                  {...register("options", {
                    required: true,
                  })}
                />
                {errors.options && (
                  <small className={styles.error}>Options are required.</small>
                )}
              </label>
            )}

            <label className={styles.check}>
              <input
                type="checkbox"
                {...register("toggle", { required: false })}
                onClick={() => {
                  toggleValidation(!showValidation)
                }}
              />
              {builder.inputCreator.validation}
            </label>

            {showValidationFields && (
              <fieldset className={styles.rules}>
                <legend>Validation</legend>
                <label className={clsx(styles.check, styles.fullRow)}>
                  <input
                    type="checkbox"
                    {...register("required", { required: false })}
                  />
                  Required
                </label>
                <label className={styles.field}>
                  <span>Max</span>
                  <input
                    defaultValue={editFormData.max}
                    autoComplete="off"
                    type="number"
                    {...register("max", { required: false })}
                  />
                </label>
                <label className={styles.field}>
                  <span>Min</span>
                  <input
                    defaultValue={editFormData.min}
                    autoComplete="off"
                    type="number"
                    {...register("min", { required: false })}
                  />
                </label>
                <label className={styles.field}>
                  <span>MaxLength</span>
                  <input
                    defaultValue={editFormData.maxLength}
                    autoComplete="off"
                    type="number"
                    {...register("maxLength", { required: false })}
                  />
                </label>
                <label className={styles.field}>
                  <span>Pattern</span>
                  <input
                    autoComplete="off"
                    defaultValue={editFormData.pattern}
                    type="text"
                    {...register("pattern", { required: false })}
                  />
                </label>
              </fieldset>
            )}

            <div className={styles.actions}>
              <button
                className={styles.primary}
                onClick={() => {
                  form.current?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {editIndex >= 0 ? "Update field" : "Create field"}
              </button>
              {formData.length > 0 && (
                <button
                  className={styles.secondary}
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
                  {builder.inputCreator.generate} →
                </button>
              )}
            </div>
          </form>
        </section>

        <section
          className={clsx(styles.panel, styles.codePanel)}
          aria-labelledby="builder-code"
        >
          <header className={styles.panelHeader}>
            <span className={styles.step}>3</span>
            <h2 id="builder-code">{builder.code.title}</h2>
            <button
              type="button"
              className={styles.copy}
              onClick={() => {
                void copyClipBoard(code).then(() => setCopied(true))
              }}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </header>
          <p className={styles.hint}>
            Updates as you change the form. Paste it into your project.
          </p>
          <div className={styles.editor}>
            <div className={styles.editorBar} aria-hidden>
              <i />
              <i />
              <i />
              <span>App.jsx</span>
            </div>
            <PrismSyntaxHighlight className="language-jsx">
              {code}
            </PrismSyntaxHighlight>
          </div>
        </section>
      </div>

      <LearnMore />

      <Footer />
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
          <div id="builder" className={styles.builder}>
            <button
              className={styles.closeButton}
              aria-label="close builder"
              ref={closeButton}
              onClick={() => {
                toggleBuilder?.(false)
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
