import colors from "../styles/colors"
import styles from "./FormFields.module.css"

const errorStyle = {
  border: `1px solid ${colors.secondary}`,
  background: colors.errorPink,
  borderLeft: `10px solid ${colors.lightPink}`,
}

const FormFields = ({ formData, errors, register }) => {
  return (formData || []).map((field) => {
    switch (field.type) {
      case "select":
        return (
          <select
            aria-label={field.name}
            {...register(field.name, { required: field.required })}
            key={field.name}
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
              ...(field.maxLength ? { maxLength: field.maxLength } : null),
              ...(field.minLength ? { minLength: field.minLength } : null),
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
              ...(field.max ? { max: field.max } : null),
              ...(field.min ? { min: field.min } : null),
              ...(field.maxLength ? { maxLength: field.maxLength } : null),
              ...(field.minLength ? { minLength: field.minLength } : null),
            })}
          />
        )
    }
  })
}

export default FormFields
