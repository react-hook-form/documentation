import type { GlobalState } from "little-state-machine"
import type { FieldErrors, UseFormRegister } from "react-hook-form"
import colors from "../styles/colors"
import styles from "./FormFields.module.css"

const errorStyle = {
  border: `1px solid ${colors.secondary}`,
  background: colors.errorPink,
  borderLeft: `10px solid ${colors.lightPink}`,
}

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
            style={{
              marginBottom: 20,
              ...(errors[field.name] ? errorStyle : null),
            }}
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
            style={{
              marginBottom: 20,
              ...(errors[field.name] ? errorStyle : null),
            }}
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
                    style={{
                      ...(errors[field.name]
                        ? { color: colors.lightPink }
                        : null),
                    }}
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
            style={{
              marginBottom: 20,
              ...(errors[field.name] ? errorStyle : null),
            }}
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
