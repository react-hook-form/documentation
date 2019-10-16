import * as React from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import { TableWrapper, Table, Type } from "./ApiPage"
import Link from "../styles/link"
import CodeArea from "./CodeArea"
import api from "../data/api"
import generic from "../data/generic"

const { useState } = React

const Option = styled.fieldset`
  padding: 10px 15px;
  border: 1px solid ${colors.lightBlue};
  border-radius: 3px;

  & > legend {
    text-align: center;
  }

  & > label {
    &:nth-child(2) {
      padding-top: 10px;
    }

    padding-bottom: 15px;
    display: block;

    & > input {
      margin-right: 10px;
    }
  }
`

export default function ApiRefTable({
  goToSection,
  currentLanguage,
}: {
  goToSection: Function
  currentLanguage: string
}) {
  const [isStandard, toggleOption] = useState(true)
  return (
    <>
      {api.register[currentLanguage]}

      <TableWrapper>
        <Table>
          <tbody>
            <tr>
              <th>
                Input <code>{generic.name[currentLanguage]}</code>
              </th>
              <th>{api.register.example[currentLanguage]}</th>
            </tr>
            <tr>
              <td>
                <code>name="firstName"</code>
              </td>
              <td>
                <code>{`{ firstName: 'value'}`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>name="firstName[0]"</code>
              </td>
              <td>
                <code>{`{ firstName: [ 'value' ] }`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>name="name.firstName"</code>
              </td>
              <td>
                <code>{`{ name: { firstName: 'value' } }`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>name="name.firstName[0]"</code>
              </td>
              <td>
                <code>{`{ name: { firstName: [ 'value' ] } }`}</code>
              </td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>

      <p
        style={{
          fontSize: 14,
          paddingLeft: 10,
          borderLeft: `4px solid ${colors.lightPink}`,
        }}
      >
        If you working on <code>arrays/array fields</code>, you can assign input
        name as <code>name[index]</code>.{" "}
        <Link
          href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
          title="example for Field Array"
        >
          Check out the Field Array example
        </Link>
        .
      </p>

      <br />

      <Option>
        <legend>{api.register.options[currentLanguage].title}</legend>
        <label>
          <input
            onChange={() => toggleOption(true)}
            type="radio"
            name="errorMessage"
            defaultChecked
          />
          {api.register.options[currentLanguage].registerWithValidation}
        </label>
        <label>
          <input
            onChange={() => toggleOption(false)}
            type="radio"
            name="errorMessage"
          />
          {api.register.options[currentLanguage].registerWithValidationMessage}
        </label>
      </Option>

      {api.register.options[currentLanguage].note(goToSection)}

      <p>
        <code>{`register({ name: 'firstName', type: 'custom' }, { required: true, min: 8 })`}</code>
      </p>

      <TableWrapper>
        <Table>
          <tbody>
            <tr>
              <th>{generic.name[currentLanguage]}</th>
              <th
                style={{
                  minWidth: 200,
                }}
              >
                {generic.type[currentLanguage]}
              </th>
              <th
                style={{
                  minWidth: 300,
                }}
              >
                {generic.description[currentLanguage]}
              </th>
              <th
                style={{
                  minWidth: 320,
                }}
              >
                {generic.codeExample[currentLanguage]}
              </th>
            </tr>
            <tr>
              <td>
                <code>ref</code>
              </td>
              <td>
                <code>
                  <Type>React.RefObject</Type>
                </code>
              </td>
              <td>React element ref</td>
              <td>
                <CodeArea
                  withOutCopy
                  style={{ marginTop: -10 }}
                  rawData={`<input
  name="test"
  ref={register}
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>required</code>
              </td>
              <td>
                <code>
                  <Type>{isStandard ? "boolean" : "string"}</Type>
                </code>
              </td>
              <td>{api.register.validation[currentLanguage].required}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      ${isStandard ? "required: true" : `required: 'error message'`}
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>maxLength</code>
              </td>
              <td>
                <code>
                  <Type>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string
}`}
                  </Type>
                </code>
              </td>
              <td>{api.register.validation[currentLanguage].maxLength}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      ${
        isStandard
          ? "maxLength: 2"
          : `maxLength : {
        value: 2,
        message: 'error message'
      }`
      }
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>minLength</code>
              </td>
              <td>
                <code>
                  <Type>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string
}`}
                  </Type>
                </code>
              </td>
              <td>{api.register.validation[currentLanguage].minLength}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      minLength: ${
        isStandard
          ? 1
          : `{
        value: 1,
        message: 'error message'
      }`
      }
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>max</code>
              </td>
              <td>
                <code>
                  <Type>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string
}`}
                  </Type>
                </code>
              </td>
              <td>{api.register.validation[currentLanguage].max}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      max: ${
        isStandard
          ? 3
          : `{
        value: 3,
        message: 'error message'
      }`
      }
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>min</code>
              </td>
              <td>
                <code>
                  <Type>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string
}`}
                  </Type>
                </code>
              </td>
              <td>{api.register.validation[currentLanguage].min}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      min: ${
        isStandard
          ? 3
          : `{
        value: 3,
        message: 'error message'
      }`
      }
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>pattern</code>
              </td>
              <td>
                <code>
                  <Type>
                    {isStandard
                      ? "RegExp"
                      : `{
  value: RegExp,
  message: string
}`}
                  </Type>
                </code>
              </td>
              <td>{api.register.validation[currentLanguage].pattern}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      pattern: ${
        isStandard
          ? "/[A-Za-z]{3}/"
          : `{
        value: /[A-Za-z]{3}/,
        message: 'error message'
      }`
      }
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>validate</code>
              </td>
              <td>
                <code>
                  <Type>Function | Object</Type>
                </code>
              </td>
              <td>{api.register.validation[currentLanguage].validate}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      validate: ${
        isStandard
          ? `value => value === '1'`
          : `value => value === '1' || 'error message';`
      }
    })
  }
/>
// you can do asynchronous validation as well
<input
  name="test1"
  ref={
    register({
      validate: ${
        isStandard
          ? `async value => await fetch(url)`
          : `async value => await fetch(url) || 'error message';`
      }
    })
  }
/>
`}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>
    </>
  )
}
