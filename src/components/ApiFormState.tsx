import * as React from "react"
import { CodeSandBoxLink } from "./CodeArea"
import { CodeHeading, Table, TableWrapper, CodeAsLink } from "./ApiPage"
import { TypeText, Note } from "../styles/typography"
import generic from "../data/generic"

const goToSection = (name, sectionsRef) => {
  const url = window.location.href
  const hashIndex = url.indexOf("#")
  const filterName = name.replace(/ |-/g, "")

  history.pushState(
    {},
    null,
    hashIndex < 0
      ? `${url}#${filterName}`
      : `${url.substr(0, hashIndex)}#${filterName}`
  )

  const refName = `${filterName}Ref`

  if (sectionsRef.current[refName]) {
    sectionsRef.current[refName].scrollIntoView({ behavior: "smooth" })
  }
}

export default React.memo(
  ({
    api,
    currentLanguage,
    sectionsRef,
  }: {
    currentLanguage: string
    api: any
    sectionsRef: any
  }) => {
    return (
      <>
        <CodeHeading>
          <h2>
            formState: <TypeText>Object</TypeText>
          </h2>
        </CodeHeading>
        <p>{api.formState.description}</p>

        <TableWrapper>
          <Table>
            <tbody>
              <tr>
                <th>{generic.name[currentLanguage]}</th>
                <th>{generic.type[currentLanguage]}</th>
                <th>{generic.description[currentLanguage]}</th>
              </tr>
              <tr>
                <td>
                  <code>dirty</code>
                </td>
                <td>
                  <TypeText>boolean</TypeText>
                </td>
                <td>{api.formState.dirty}</td>
              </tr>
              <tr>
                <td>
                  <code>isSubmitted</code>
                </td>
                <td>
                  <TypeText>boolean</TypeText>
                </td>
                <td>{api.formState.isSubmitted}</td>
              </tr>
              <tr>
                <td>
                  <code>touched</code>
                </td>
                <td>
                  <TypeText>object</TypeText>
                </td>
                <td>{api.formState.touched}</td>
              </tr>
              <tr>
                <td>
                  <code>isSubmitting</code>
                </td>
                <td>
                  <TypeText>boolean</TypeText>
                </td>
                <td>{api.formState.isSubmitting}</td>
              </tr>
              <tr>
                <td>
                  <code>submitCount</code>
                </td>
                <td>
                  <TypeText>number</TypeText>
                </td>
                <td>{api.formState.submitCount}</td>
              </tr>
              <tr>
                <td>
                  <code>isValid</code>
                </td>
                <td>
                  <TypeText>boolean</TypeText>
                </td>
                <td>
                  <div>{api.formState.isValid}</div>
                  <p>
                    <Note>Note:</Note> <code>isValid</code> is affected by{" "}
                    <CodeAsLink
                      onClick={() => goToSection("useForm", sectionsRef)}
                    >
                      mode
                    </CodeAsLink>
                    .
                  </p>
                  <p>
                    Will only update and subscribe on form submission when used
                    with <code>onSubmit</code>.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <CodeSandBoxLink
                    style={{
                      position: "relative",
                      left: 0,
                    }}
                    url="https://codesandbox.io/s/7o2wrp86k6"
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </TableWrapper>
      </>
    )
  }
)
