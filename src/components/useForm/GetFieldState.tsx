import * as React from "react"
import { Link } from "gatsby"
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
              This method is introduced in react-hook-form (
              <Link to="https://github.com/react-hook-form/react-hook-form/releases/tag/v7.25.0">
                v7.25.0
              </Link>
              ) to return individual field state. It's useful in case you are
              trying to retrieve nested field state in a typesafe way.
            </p>

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
                      <p>
                        <b className={typographyStyles.note}>Condition: </b>
                        subscribe to <code>dirtyFields</code>.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>isTouched</p>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>boolean</code>
                    </td>
                    <td>
                      <p>field has received a focus and blur event.</p>
                      <p>
                        <b className={typographyStyles.note}>Condition: </b>
                        subscribe to <code>touchedFields</code>.
                      </p>
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
                      <p>
                        <b className={typographyStyles.note}>Condition: </b>
                        subscribe to <code>errors</code>.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>error</p>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>
                        undefined | FieldError
                      </code>
                    </td>
                    <td>
                      <p>field error object.</p>
                      <p>
                        <b className={typographyStyles.note}>Condition: </b>
                        subscribe to <code>errors</code>.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id={"rules"} className={typographyStyles.rulesTitle}>
              Rules
            </h2>

            <ul>
              <li>
                <p>name needs to match a registered field name.</p>

                <CodeArea
                  rawData={`getFieldState('test');

getFieldState('test'); // ✅ register input and return field state
getFieldState('non-existent-name'); // ❌ will return state as false and error as undefined 
`}
                />
              </li>
              <li>
                <p>formState will need to be subscribed.</p>

                <p>You can subscribe to the formState in two different ways:</p>

                <ol>
                  <li>
                    <p>
                      You can simply define the required state information when
                      destructuring the returned value of a relevant hook, such
                      as useForm(), useFormContext() or useFormState().
                    </p>

                    <p>
                      You do not need to pass the state information to
                      getFieldState().
                    </p>

                    <CodeArea
                      rawData={`const { register, formState: { isDirty } } = useForm()
register('test');
getFieldState('test'); // ✅ register input and return field state

---------------------------

// This is valid with useFormState as well
const { isDirty } = useFormState();

register('test');
getFieldState('test'); // ✅ register input and return field state
`}
                    />
                  </li>

                  <li>
                    <p>
                      You can pass the entire formState from useForm(),
                      useFormContext() or useFormState() directly to
                      getFieldState().
                    </p>

                    <p>
                      This will be the preferred approach for Typescript users
                      who have stricter linting or compilation rules about
                      unused declarations.
                    </p>

                    <CodeArea
                      rawData={`const { register } = useForm()
register('test');
getFieldState('test'); // ❌ formState is not subscribed so has no re-render to update state

---------------------------

const { register, formState } = useForm()
getFieldState('test', formState); // ✅ register input and return field state
`}
                    />
                  </li>
                </ol>
              </li>
            </ul>

            <h2 id={"example"} className={typographyStyles.subTitle}>
              Examples
            </h2>

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
