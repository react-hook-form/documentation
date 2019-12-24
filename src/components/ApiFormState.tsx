import * as React from "react"
import { CodeSandBoxLink } from "./CodeArea"
import { CodeHeading, Table, TableWrapper } from "./ApiPage"
import { TypeText } from "../styles/typography"
import generic from "../data/generic"

export default React.memo(
  ({ api, currentLanguage }: { currentLanguage: string; api: any }) => {
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
                  <TypeText>{`string[]`}</TypeText>
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
                <td>{api.formState.isValid}</td>
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
