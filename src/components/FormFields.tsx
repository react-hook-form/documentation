import * as React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'

const errorStyle = {
  border: `1px solid ${colors.secondary}`,
  background: colors.errorPink,
  borderLeft: `10px solid ${colors.lightPink}`,
}

const RadioGroup = styled.div`
  display: flex;
  margin-bottom: 20px;

  & > label:first-child {
    margin-right: 20px;
  }
`

export default ({ formData, errors, register, tabIndex }) => {
  return (formData || []).map(field => {
    switch (field.type) {
      case 'select':
        return (
          <select
            aria-label={field.name}
            tabIndex={tabIndex}
            name={field.name}
            ref={register({ required: field.required })}
            key={field.name}
            style={{
              marginBottom: 20,
              ...(errors[field.name] ? errorStyle : null),
            }}
          >
            <option value="">Select...</option>
            {field.options &&
              field.options
                .split(';')
                .filter(Boolean)
                .map(option => {
                  return <option key={option}>{option}</option>
                })}
          </select>
        )
      case 'textarea':
        return (
          <textarea
            aria-label={field.name}
            tabIndex={tabIndex}
            name={field.name}
            placeholder={field.name}
            ref={register({
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
      case 'radio':
        return (
          <RadioGroup key={field.name} style={{ marginBottom: 20 }} aria-label={field.name}>
            {field.options &&
              field.options
                .split(';')
                .filter(Boolean)
                .map(name => {
                  return (
                    <label
                      key={name}
                      style={{
                        ...(errors[field.name] ? { color: colors.lightPink } : null),
                      }}
                    >
                      {name}
                      &nbsp;
                      <input
                        tabIndex={tabIndex}
                        type="radio"
                        name={field.name}
                        value={name}
                        ref={register({ required: field.required })}
                      />
                    </label>
                  )
                })}
          </RadioGroup>
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
            tabIndex={tabIndex}
            name={field.name}
            placeholder={field.name}
            ref={register({
              required: field.required,
              ...(field.pattern ? { pattern: new RegExp(field.pattern) } : null),
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
