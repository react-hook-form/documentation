import Footer from "../Footer"
import { Menu } from "../Menu"
import * as typographyStyles from "../../styles/typography.module.css"
import * as containerStyles from "../../styles/container.module.css"
import TabGroup from "../TabGroup"
import CodeArea from "../CodeArea"
import * as tableStyles from "../../styles/table.module.css"
import generic from "../../data/generic"
import resetFieldCode from "../codeExamples/resetFieldCode"
import resetFieldOptionCode from "../codeExamples/resetFieldOptionCode"
import StarRepo from "../StarRepo"

export default function ResetField({ currentLanguage }) {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        resetField
      </h1>
      <p className={typographyStyles.subHeading}>Reset field state and value</p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>
                resetField:{" "}
                <span
                  className={typographyStyles.typeText}
                >{`(name: string, options?: Record<string, boolean | any>) => void`}</span>
              </h2>
            </code>

            <p>Reset an individual field state.</p>

            <h2 className={typographyStyles.subTitle}>Props</h2>

            <p>After invoke this function.</p>

            <ul>
              <li>
                <p>
                  <code>isValid</code> form state will be reevaluated.
                </p>
              </li>
              <li>
                <p>
                  <code>isDirty</code> form state will be reevaluated.
                </p>
              </li>
            </ul>

            <p>
              <code>ResetField</code> has the ability to retain field state.
              Here are the options you may want to use:{" "}
            </p>

            <div className={tableStyles.tableWrapper}>
              <table className={tableStyles.table}>
                <thead>
                  <tr>
                    <th>{generic.name.en}</th>
                    <th></th>
                    <th>{generic.type.en}</th>
                    <th>{generic.description.en}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>name</code>
                    </td>
                    <td></td>
                    <td>
                      <code className={typographyStyles.typeText}>string</code>
                    </td>
                    <td>
                      <p>registered field name.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>options</td>
                    <td>
                      <code>keepError</code>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>boolean</code>
                    </td>
                    <td>
                      <p>
                        When set to <code>true</code>, field error will be
                        retained.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <code>keepDirty</code>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>boolean</code>
                    </td>
                    <td>
                      <p>
                        When set to <code>true</code>, <code>dirtyFields</code>{" "}
                        will be retained.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <code>keepTouched</code>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>boolean</code>
                    </td>
                    <td>
                      <p>
                        When set to <code>true</code>,{" "}
                        <code>touchedFields</code> state will be unchanged.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <code>defaultValue</code>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>unknown</code>
                    </td>
                    <td>
                      <p>
                        When this value is <b>not</b> provided, field will be
                        revert back to it's defaultValue.
                      </p>

                      <p>When this value is provided:</p>
                      <ol>
                        <li>
                          <p>field will be updated with the supplied value.</p>
                        </li>
                        <li>
                          <p>
                            field's <code>defaultValue</code> will be updated to
                            this value.
                          </p>
                        </li>
                      </ol>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="rules" className={typographyStyles.rulesTitle}>
              Rules
            </h2>

            <ul>
              <li>
                <p>name need to match registered field name.</p>

                <CodeArea
                  rawData={`register('test');

resetField('test'); // ✅ register input and resetField works
resetField('non-existent-name'); // ❌ failed by input not found
`}
                />
              </li>
            </ul>

            <h2 id="example" className={typographyStyles.subTitle}>
              Examples
            </h2>

            <TabGroup
              buttonLabels={["Reset Field State", "Reset With Options"]}
            >
              <CodeArea
                rawData={resetFieldCode}
                url="https://codesandbox.io/s/priceless-firefly-d0kuv"
              />
              <CodeArea
                rawData={resetFieldOptionCode}
                url="https://codesandbox.io/s/resetfield-with-options-iw4wd"
              />
            </TabGroup>

            <h2 className={typographyStyles.subTitle}>Video</h2>

            <p>
              The following video tutorial demonstrates <code>resetField</code>{" "}
              API.
            </p>

            <iframe
              width="100%"
              height="528"
              title="react hook form controller build"
              src="https://www.youtube.com/embed/IdLFcNaEFEo"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <StarRepo currentLanguage="en" />
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
