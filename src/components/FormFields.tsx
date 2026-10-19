import type { GlobalState } from "little-state-machine"
import type { FieldErrors, UseFormRegister } from "react-hook-form"
import styles from "./FormFields.module.css"

function getNumericValidationFor<
  TKey extends "maxLength" | "minLength" | "min" | "max",
>(name: TKey, value: string): Record<TKey, number> | null {
  const number = parseInt(value, 10)
  if (typeof number === "number" && !Number.isNaN(number)) {
    return { [name]: number } as Record<TKey, number>
  }
  return null
}

const FormFields = ({
  formData,
  errors,
  register,
}: {
  formData: GlobalState["formData"]
  errors: FieldErrors
  register: UseFormRegister<Record<string, unknown>>
}) => {
  return formData.map((field, i) => {
    switch (field.type) {
      case "select":
        return (
          <select
            key={`${field.name}${i}`}
            aria-label={field.name}
            {...register(field.name, { required: field.required })}
            style={{ marginBottom: 20 }}
            className={errors[field.name] ? styles.invalid : undefined}
            aria-invalid={errors[field.name] ? "true" : "false"}
          >
            <option value="" key="select-default-option">
              Select...
            </option>
            {field.options &&
              field.options
                .split(";")
                .filter(Boolean)
                .map((option, optionIndex) => {
                  return (
                    <option key={`${option}-${optionIndex}`}>{option}</option>
                  )
                })}
          </select>
        )
      case "textarea":
        return (
          <textarea
            key={`${field.name}${i}`}
            aria-label={field.name}
            placeholder={field.name}
            {...register(field.name, {
              required: field.required,
              ...getNumericValidationFor("maxLength", field.maxLength),
              ...getNumericValidationFor("minLength", field.minLength),
            })}
            style={{ marginBottom: 20 }}
            className={errors[field.name] ? styles.invalid : undefined}
            aria-invalid={errors[field.name] ? "true" : "false"}
          />
        )
      case "radio":
        return (
          <div
            key={`${field.name}${i}`}
            className={styles.radioGroup}
            style={{ marginBottom: 20 }}
            aria-label={field.name}
          >
            {field.options &&
              field.options
                .split(";")
                .filter(Boolean)
                .map((name) => (
                  <label
                    key={name}
                    className={
                      errors[field.name] ? styles.invalidLabel : undefined
                    }
                  >
                    {name}
                    &nbsp;
                    <input
                      type="radio"
                      value={name}
                      {...register(field.name, {
                        required: field.required,
                      })}
                    />
                  </label>
                ))}
          </div>
        )
      default:
        return (
          <input
            key={`${field.name}${i}`}
            style={{ marginBottom: 20 }}
            className={errors[field.name] ? styles.invalid : undefined}
            aria-invalid={errors[field.name] ? "true" : "false"}
            aria-label={field.name}
            autoComplete="off"
            type={field.type}
            placeholder={field.name}
            {...register(field.name, {
              required: field.required,

              ...(field.pattern
                ? { pattern: new RegExp(field.pattern) }
                : null),

              ...getNumericValidationFor("max", field.max),
              ...getNumericValidationFor("min", field.min),
              ...getNumericValidationFor("maxLength", field.maxLength),
              ...getNumericValidationFor("minLength", field.minLength),
            })}
          />
        )
    }
  })
}

export default FormFields
