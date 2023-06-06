import generic from "../data/generic"
import errorMessage from "./codeExamples/errorMessage"
import errorsMessage from "./codeExamples/errorsMessage"
import CodeArea from "./CodeArea"
import TabGroup from "./TabGroup"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"
import errorMessageTs from "./codeExamples/errorMessageTs"
import errorsMessageTs from "./codeExamples/errorsMessageTs"
import containerStyles from "../styles/container.module.css"
import Footer from "./Footer"
import StarRepo from "./StarRepo"
import { Menu, apiLinks } from "./Menu"

export default function ErrorMessage({ api }: { api: any }) {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        ErrorMessage
      </h1>
      <p className={typographyStyles.subHeading}>
        An error message component to handle errors
      </p>

      <div className={containerStyles.wrapper}>
        <Menu pages={apiLinks} />

        <main>
          <section>
            <div>
              <code className={typographyStyles.codeHeading}>
                <h2>
                  ErrorMessage:{" "}
                  <span className={typographyStyles.typeText}>Component</span>
                </h2>
              </code>

              {api.ErrorMessage.description}

              <code
                style={{
                  fontSize: 16,
                  padding: 15,
                  background: "#191d3a",
                  color: "white",
                  borderRadius: 4,
                  display: "block",
                }}
              >
                npm install @hookform/error-message
              </code>

              <h2 className={typographyStyles.subTitle}>Props</h2>

              <div className={tableStyles.tableWrapper}>
                <table className={tableStyles.table}>
                  <thead>
                    <tr>
                      <th>{generic.name}</th>
                      <th>{generic.type}</th>
                      <th>{generic.required}</th>
                      <th>{generic.description}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>name</code>
                      </td>
                      <td>
                        <code className={typographyStyles.typeText}>
                          string
                        </code>
                      </td>
                      <td>✓</td>
                      <td>{api.ErrorMessage.table.name}</td>
                    </tr>
                    <tr>
                      <td>
                        <code>errors</code>
                      </td>
                      <td>
                        <code className={typographyStyles.typeText}>
                          object
                        </code>
                      </td>
                      <td></td>
                      <td>{api.ErrorMessage.table.errors}</td>
                    </tr>
                    <tr>
                      <td>
                        <code>message</code>
                      </td>
                      <td>
                        <code className={typographyStyles.typeText}>
                          string | React.ReactElement
                        </code>
                      </td>
                      <td></td>
                      <td>{api.ErrorMessage.table.message}</td>
                    </tr>
                    <tr>
                      <td>
                        <code>as</code>
                      </td>
                      <td>
                        <code className={typographyStyles.typeText}>
                          React.ElementType | string
                        </code>
                      </td>
                      <td></td>
                      <td>{api.ErrorMessage.table.as}</td>
                    </tr>
                    <tr>
                      <td>
                        <code>render</code>
                      </td>
                      <td>
                        <code className={typographyStyles.typeText}>
                          (
                          {`{ message: string | React.ReactElement, messages?: Object}`}
                          ) =&gt; any
                        </code>
                      </td>
                      <td></td>
                      <td>{api.ErrorMessage.table.render}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="example" className={typographyStyles.subTitle}>
                Examples
              </h2>

              <TabGroup
                buttonLabels={[
                  "Single Error Message",
                  "Multiple Error Messages",
                ]}
              >
                <CodeArea
                  rawData={errorMessage}
                  url="https://codesandbox.io/s/react-hook-form-v7-errormessage-jufsl"
                  tsRawData={errorMessageTs}
                  tsUrl="https://codesandbox.io/s/react-hook-form-v7-ts-errormessage-d1ues"
                />
                <CodeArea
                  rawData={errorsMessage}
                  url="https://codesandbox.io/s/react-hook-form-v7-errormessage-multiple-error-messages-lnvkt"
                  tsRawData={errorsMessageTs}
                  tsUrl="https://codesandbox.io/s/react-hook-form-v6-ts-errormessage-multiple-error-messages-forked-sy5f0"
                />
              </TabGroup>
            </div>

            <StarRepo />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}
