import * as React from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import { TableWrapper, Table } from "./ApiPage"
import CodeArea from "./CodeArea"
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
  api,
  currentLanguage,
}: {
  api: any
  goToSection: Function
  currentLanguage: string
}) {
  const [isStandard, toggleOption] = React.useState(true)

  return (
    <>
      {api.register.description}

      <TableWrapper>
        <Table>
          <tbody>
            <tr>
              <th>
                Input <code>{generic.name[currentLanguage]}</code>
              </th>
              <th>{api.register.example}</th>
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

      {api.register.fieldArray}

      {api.register.options.note(goToSection)}

      <p>
        <CodeBlock>{`register({ name: 'firstName', type: 'custom' }, { required: true, min: 8 })`}</CodeBlock>
      </p>

      <Group>
        <legend>{api.register.options.title}</legend>
        <p>{api.register.selectHelp}</p>
        <label>
          <input
            onChange={() => toggleOption(true)}
            type="radio"
            name="errorMessage"
            defaultChecked
          />
          {api.register.options.registerWithValidation}
        </label>
        <label>
          <input
            onChange={() => toggleOption(false)}
            type="radio"
            name="errorMessage"
          />
          {api.register.options.registerWithValidationMessage}
        </label>
      </Group>

      <TableWrapper>
        <Table>
          <tbody>
            <tr>
              <th>{generic.name[currentLanguage]}</th>
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
                <br />
                <TypeText>React.RefObject</TypeText>
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
                <br />
                <TypeText>{isStandard ? "boolean" : "string"}</TypeText>
              </td>
              <td>{api.register.validation.required}</td>
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
                <br />
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
              <td>{api.register.validation.maxLength}</td>
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
                <br />
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
              <td>{api.register.validation.minLength}</td>
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
                <br />
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
              <td>{api.register.validation.max}</td>
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
                <br />
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
              <td>{api.register.validation.min}</td>
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
                <br />
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
              <td>{api.register.validation.pattern}</td>
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
                <br />
                <code>
                  <TypeText>Function | Object</TypeText>
                </code>
              </td>
              <td>{api.register.validation.validate}</td>
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
        positive: value => parseInt(value, 10) > 0,
        lessThanTen: value => parseInt(value, 10) < 10
      }`
          : `{
        positive: value => parseInt(value, 10) > 0 || 'should be greater than 0',
        lessThanTen: value => parseInt(value, 10) < 10 || 'should be lower than 10'
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
