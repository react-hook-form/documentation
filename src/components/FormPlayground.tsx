import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import type { FieldErrors } from "react-hook-form"
import clsx from "clsx"
import { PrismSyntaxHighlight } from "./mdx/code"
import copyClipBoard from "./utils/copyClipBoard"
import styles from "./FormPlayground.module.css"

const MODES = ["onSubmit", "onBlur", "onChange", "onTouched", "all"] as const
type Mode = (typeof MODES)[number]

type Rules = {
  firstNameRequired: boolean
  firstNameMinLength: boolean
  emailRequired: boolean
  emailPattern: boolean
  ageMin: boolean
}

type FormValues = { firstName: string; email: string; age: number }

const RULE_LABELS: { key: keyof Rules; field: string; label: string }[] = [
  { key: "firstNameRequired", field: "firstName", label: "required" },
  { key: "firstNameMinLength", field: "firstName", label: "minLength: 2" },
  { key: "emailRequired", field: "email", label: "required" },
  { key: "emailPattern", field: "email", label: "pattern: email" },
  { key: "ageMin", field: "age", label: "min: 18" },
]

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

// register() merges new options over the previous ones, so a rule that is
// switched off must be passed as undefined rather than omitted.
function buildOptions(rules: Rules) {
  return {
    firstName: {
      required: rules.firstNameRequired ? "First name is required" : undefined,
      minLength: rules.firstNameMinLength
        ? { value: 2, message: "Min length is 2" }
        : undefined,
    },
    email: {
      required: rules.emailRequired ? "Email is required" : undefined,
      pattern: rules.emailPattern
        ? { value: EMAIL_PATTERN, message: "Invalid email" }
        : undefined,
    },
    age: {
      valueAsNumber: true as const,
      min: rules.ageMin ? { value: 18, message: "Must be 18+" } : undefined,
    },
  }
}

function buildCode(mode: Mode, rules: Rules) {
  const opts = (entries: (string | false)[]) => {
    const list = entries.filter((e): e is string => !!e)
    return list.length
      ? `, {\n${list.map((e) => `          ${e},`).join("\n")}\n        }`
      : ""
  }
  const firstName = opts([
    rules.firstNameRequired && `required: "First name is required"`,
    rules.firstNameMinLength &&
      `minLength: { value: 2, message: "Min length is 2" }`,
  ])
  const email = opts([
    rules.emailRequired && `required: "Email is required"`,
    rules.emailPattern &&
      `pattern: { value: /^\\S+@\\S+\\.\\S+$/, message: "Invalid email" }`,
  ])
  const age = opts([
    `valueAsNumber: true`,
    rules.ageMin && `min: { value: 18, message: "Must be 18+" }`,
  ])

  return `import { useForm } from "react-hook-form"

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(${mode === "onSubmit" ? "" : `{ mode: "${mode}" }`})

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <input
        {...register("firstName"${firstName})}
      />
      <p>{errors.firstName?.message}</p>

      <input
        {...register("email"${email})}
      />
      <p>{errors.email?.message}</p>

      <input
        type="number"
        {...register("age"${age})}
      />
      <p>{errors.age?.message}</p>

      <button type="submit">Submit</button>
    </form>
  )
}`
}

const pickErrors = (errors: FieldErrors<FormValues>) =>
  Object.fromEntries(
    Object.entries(errors).map(([name, error]) => [
      name,
      { type: error?.type, message: error?.message },
    ])
  )

function LiveForm({
  mode,
  rules,
  onSubmitted,
}: {
  mode: Mode
  rules: Rules
  onSubmitted: (values?: FormValues) => void
}) {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: {
      errors,
      isDirty,
      dirtyFields,
      touchedFields,
      isValid,
      isSubmitted,
      submitCount,
    },
  } = useForm<FormValues>({ mode })
  const options = buildOptions(rules)

  // Re-run validation when rules change so the errors reflect them.
  const rulesKey = JSON.stringify(rules)
  useEffect(() => {
    if (isSubmitted || mode !== "onSubmit") trigger()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rulesKey])

  const state = {
    errors: pickErrors(errors),
    isDirty,
    dirtyFields,
    touchedFields,
    isValid,
    submitCount,
  }

  return (
    <>
      <form
        className={styles.form}
        onSubmit={(e) => void handleSubmit((values) => onSubmitted(values))(e)}
        noValidate
      >
        <label>
          <span>First name</span>
          <input
            placeholder="Ada"
            aria-invalid={!!errors.firstName}
            {...register("firstName", options.firstName)}
          />
          <small>{errors.firstName?.message}</small>
        </label>
        <label>
          <span>Email</span>
          <input
            placeholder="ada@example.com"
            aria-invalid={!!errors.email}
            {...register("email", options.email)}
          />
          <small>{errors.email?.message}</small>
        </label>
        <label>
          <span>Age</span>
          <input
            type="number"
            placeholder="18"
            aria-invalid={!!errors.age}
            {...register("age", options.age)}
          />
          <small>{errors.age?.message}</small>
        </label>
        <div className={styles.formActions}>
          <button type="submit" className={styles.submit}>
            Submit
          </button>
          <button
            type="button"
            className={styles.reset}
            onClick={() => {
              reset()
              onSubmitted()
            }}
          >
            Reset
          </button>
        </div>
      </form>

      <div className={styles.stateLabel}>formState</div>
      <PrismSyntaxHighlight className="language-json">
        {JSON.stringify(state, null, 2)}
      </PrismSyntaxHighlight>
    </>
  )
}

export default function FormPlayground() {
  const [mode, setMode] = useState<Mode>("onSubmit")
  const [rules, setRules] = useState<Rules>({
    firstNameRequired: true,
    firstNameMinLength: true,
    emailRequired: true,
    emailPattern: true,
    ageMin: false,
  })
  const [submitted, setSubmitted] = useState<FormValues>()
  const [copied, setCopied] = useState(false)
  const code = buildCode(mode, rules)

  useEffect(() => {
    if (!copied) return
    const id = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(id)
  }, [copied])

  return (
    <div className={styles.playground}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarGroup}>
          <span className={styles.toolbarLabel}>mode</span>
          <div className={styles.segmented} role="radiogroup" aria-label="mode">
            {MODES.map((m) => (
              <button
                key={m}
                type="button"
                role="radio"
                aria-checked={mode === m}
                className={clsx(mode === m && styles.segmentActive)}
                onClick={() => {
                  setMode(m)
                  setSubmitted(undefined)
                }}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.toolbarGroup}>
          <span className={styles.toolbarLabel}>rules</span>
          <div className={styles.chips}>
            {RULE_LABELS.map(({ key, field, label }) => (
              <button
                key={key}
                type="button"
                aria-pressed={rules[key]}
                className={clsx(styles.chip, rules[key] && styles.chipOn)}
                onClick={() => setRules((r) => ({ ...r, [key]: !r[key] }))}
              >
                <span className={styles.chipField}>{field}</span> {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.panes}>
        <div className={styles.codePane}>
          <div className={styles.paneHeader}>
            <span className={styles.dots} aria-hidden>
              <i />
              <i />
              <i />
            </span>
            <span>App.tsx</span>
            <button
              type="button"
              className={styles.copy}
              onClick={() =>
                void copyClipBoard(code).then(() => setCopied(true))
              }
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <PrismSyntaxHighlight className="language-tsx">
            {code}
          </PrismSyntaxHighlight>
        </div>

        <div className={styles.previewPane}>
          <div className={styles.paneHeader}>
            <span className={styles.live} aria-hidden />
            <span>Live preview</span>
          </div>
          <div className={styles.previewBody}>
            <LiveForm
              key={mode}
              mode={mode}
              rules={rules}
              onSubmitted={setSubmitted}
            />
            {submitted && (
              <>
                <div className={styles.stateLabel}>submitted values</div>
                <PrismSyntaxHighlight className="language-json">
                  {JSON.stringify(submitted, null, 2)}
                </PrismSyntaxHighlight>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
