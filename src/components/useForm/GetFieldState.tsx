import * as React from "react"
import * as containerStyles from "../../styles/container.module.css"
import * as typographyStyles from "../../styles/typography.module.css"
import { Menu } from "../Menu"
import CodeArea from "../CodeArea"
import StarRepo from "../StarRepo"
import Footer from "../Footer"
import getFieldState from "../codeExamples/getFieldState"
import * as tableStyles from "../../styles/table.module.css"
import generic from "../../data/generic"

export const GetFieldState = () => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        getFieldState
      </h1>
      <p className={typographyStyles.subHeading}>State of the field</p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>
                getFieldState:{" "}
                <span className={typographyStyles.typeText}>{`object`}</span>
              </h2>
            </code>

            <p>
              This method will return individual field state. It will be useful
              when you are try to retrieve nested value field state in a
              typesafe approach.
            </p>

            <h2 className={typographyStyles.subTitle}>Rules</h2>

            <ul>
              <li>
                <p>name need to match registered field name.</p>

                <CodeArea
                  rawData={`getFieldState('test');

getFieldState('test'); // ✅ register input and return field state
getFieldState('non-existent-name'); // ❌ will return state as false and error as undefined 
`}
                />
              </li>
              <li>
                <p>formState will need to subscribed.</p>

                <CodeArea
                  rawData={`const { register, formState: 'isDirty' } = useForm()
register('test');
getFieldState('test'); // ✅ register input and return field state

---------------------------

// This is valid with useFormState as well
const { isDirty } = useFormState();

register('test');
getFieldState('test'); // ✅ register input and return field state
`}
                />

                <CodeArea
                  rawData={`const { register } = useForm()
register('test');
getFieldState('test'); // ❌ formState is subscribed and no re-render to inform state update

---------------------------

const { register, formState } = useForm()
getFieldState('test', formState); // ✅ register input and return field state
`}
                />
              </li>
            </ul>

            <h2 className={typographyStyles.subTitle}>Props</h2>

            <div className={tableStyles.tableWrapper}>
              <table className={tableStyles.table}>
                <thead>
                  <tr>
                    <th>{generic.name.en}</th>
                    <th>{generic.type.en}</th>
                    <th>{generic.description.en}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>name</code>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>string</code>
                    </td>
                    <td>
                      <p>registered field name.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>formState</p>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>object</code>
                    </td>
                    <td>
                      <p>
                        When set to <code>true</code>, field error will be
                        retained.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className={typographyStyles.subTitle}>Return</h2>

            <div className={tableStyles.tableWrapper}>
              <table className={tableStyles.table}>
                <thead>
                  <tr>
                    <th>{generic.name.en}</th>
                    <th>{generic.type.en}</th>
                    <th>{generic.description.en}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>isDirty</code>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>boolean</code>
                    </td>
                    <td>
                      <p>field is modified.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>isTouch</p>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>boolean</code>
                    </td>
                    <td>
                      <p>field has received a focus and blur event.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>invalid</p>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>boolean</code>
                    </td>
                    <td>
                      <p>field is not valid.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>invalid</p>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>
                        undefined | FieldError
                      </code>
                    </td>
                    <td>
                      <p>field error object.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <CodeArea
              rawData={getFieldState}
              url={"https://codesandbox.io/s/getfieldstate-jvekk"}
            />

            <StarRepo currentLanguage="en" />
          </section>

          <Footer currentLanguage={"en"} />
        </main>
      </div>
    </div>
  )
}
