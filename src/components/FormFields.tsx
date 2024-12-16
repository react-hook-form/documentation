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
  return (formData || []).map((field, i) => {
    switch (field.type) {
      case "select":
        return (
          <select
            aria-label={field.name}
            {...register(field.name, { required: field.required })}
            key={field.name + i}
            style={{
              marginBottom: 20,
              ...(errors[field.name] ? errorStyle : null),
            }}
          >
            <option value="">Select...</option>
            {field.options &&
              field.options
                .split(";")
                .filter(Boolean)
                .map((option) => {
                  return <option key={option}>{option}</option>
                })}
          </select>
        )
      case "textarea":
        return (
          <textarea
            aria-label={field.name}
            placeholder={field.name}
            {...register(field.name, {
              required: field.required,
              ...getNumericValidationFor("maxLength", field.maxLength),
              ...getNumericValidationFor("minLength", field.minLength),
            })}
            key={field.name}
            style={{
              marginBottom: 20,
              ...(errors[field.name] ? errorStyle : null),
            }}
          />
        )
      case "radio":
        return (
          <div
            className={styles.radioGroup}
            key={field.name}
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
            style={{
              marginBottom: 20,
              ...(errors[field.name] ? errorStyle : null),
            }}
            aria-label={field.name}
            autoComplete="off"
            key={field.name}
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
