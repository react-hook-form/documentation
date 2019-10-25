import * as React from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import { TableWrapper, Table } from "./ApiPage"
import Link from "../styles/link"
import CodeArea from "./CodeArea"
import api from "../data/api"
import generic from "../data/generic"
import { CodeBlock, TypeText } from "../styles/typography"

const Group = styled.fieldset`
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
  const [isStandard, toggleOption] = React.useState(true)

  return (
    <>
      {api.register[currentLanguage].description}

      <TableWrapper>
        <Table>
          <tbody>
            <tr>
              <th>
                Input <code>{generic.name[currentLanguage]}</code>
              </th>
              <th>{api.register[currentLanguage].example}</th>
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

      {api.register[currentLanguage].fieldArray}

      {api.register[currentLanguage].options.note(goToSection)}

      <p>
        <CodeBlock>{`register({ name: 'firstName', type: 'custom' }, { required: true, min: 8 })`}</CodeBlock>
      </p>

      <Group>
        <legend>{api.register[currentLanguage].options.title}</legend>
        <p>{api.register[currentLanguage].selectHelp}</p>
        <label>
          <input
            onChange={() => toggleOption(true)}
            type="radio"
            name="errorMessage"
            defaultChecked
          />
          {api.register[currentLanguage].options.registerWithValidation}
        </label>
        <label>
          <input
            onChange={() => toggleOption(false)}
            type="radio"
            name="errorMessage"
          />
          {api.register[currentLanguage].options.registerWithValidationMessage}
        </label>
      </Group>

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
                  <TypeText>React.RefObject</TypeText>
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
                  <TypeText>{isStandard ? "boolean" : "string"}</TypeText>
                </code>
              </td>
              <td>{api.register[currentLanguage].validation.required}</td>
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
                  <TypeText>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string
}`}
                  </TypeText>
                </code>
              </td>
              <td>{api.register[currentLanguage].validation.maxLength}</td>
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
                  <TypeText>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string
}`}
                  </TypeText>
                </code>
              </td>
              <td>{api.register[currentLanguage].validation.minLength}</td>
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
                  <TypeText>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string
}`}
                  </TypeText>
                </code>
              </td>
              <td>{api.register[currentLanguage].validation.max}</td>
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
                  <TypeText>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string
}`}
                  </TypeText>
                </code>
              </td>
              <td>{api.register[currentLanguage].validation.min}</td>
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
                  <TypeText>
                    {isStandard
                      ? "RegExp"
                      : `{
  value: RegExp,
  message: string
}`}
                  </TypeText>
                </code>
              </td>
              <td>{api.register[currentLanguage].validation.pattern}</td>
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
                  <TypeText>Function | Object</TypeText>
                </code>
              </td>
              <td>{api.register[currentLanguage].validation.validate}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`// callback function
<input
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
// object of callback functions
<input
  name="test1"
  ref={
    register({
      validate: ${
        isStandard
          ? `{
        greaterThanZero: value => parseFloat(value) > 0,
        lessThanOnehundred: value => parseFloat(value) < 100
      }`
          : `{
        greaterThanZero: value => parseFloat(value) > 0 || 'should be greater than 0',
        lessThanOnehundred: value => parseFloat(value) < 100 || 'should be greater than 100'
      }`
      }
    })
  }
/>
// you can do asynchronous validation as well
<input
  name="test2"
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
