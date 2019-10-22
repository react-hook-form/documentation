import * as React from "react"
import { CodeSandBoxLink } from "./CodeArea"
import { CodeHeading, Table, TableWrapper } from "./ApiPage"
import { TypeText } from "../styles/typography"
import api from "../data/api"
import generic from "../data/generic"

export default React.memo(
  ({ currentLanguage }: { currentLanguage: string }) => {
    return (
      <>
        <CodeHeading>
          <h2>
            formState: <TypeText>Object</TypeText>
          </h2>
        </CodeHeading>
        <p>{api.formState[currentLanguage].description}</p>

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
                <td>{api.formState[currentLanguage].dirty}</td>
              </tr>
              <tr>
                <td>
                  <code>isSubmitted</code>
                </td>
                <td>
                  <TypeText>boolean</TypeText>
                </td>
                <td>{api.formState[currentLanguage].isSubmitted}</td>
              </tr>
              <tr>
                <td>
                  <code>touched</code>
                </td>
                <td>
                  <TypeText>{`string[]`}</TypeText>
                </td>
                <td>{api.formState[currentLanguage].touched}</td>
              </tr>
              <tr>
                <td>
                  <code>isSubmitting</code>
                </td>
                <td>
                  <TypeText>boolean</TypeText>
                </td>
                <td>{api.formState[currentLanguage].isSubmitting}</td>
              </tr>
              <tr>
                <td>
                  <code>submitCount</code>
                </td>
                <td>
                  <TypeText>number</TypeText>
                </td>
                <td>{api.formState[currentLanguage].submitCount}</td>
              </tr>
              <tr>
                <td>
                  <code>isValid</code>
                </td>
                <td>
                  <TypeText>boolean</TypeText>
                </td>
                <td>{api.formState[currentLanguage].isValid}</td>
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
