import Link from "next/link"
import containerStyles from "../../styles/container.module.css"
import typographyStyles from "../../styles/typography.module.css"
import CodeArea from "../CodeArea"
import StarRepo from "../StarRepo"
import Footer from "../Footer"
import getFieldState from "../codeExamples/getFieldState"
import tableStyles from "../../styles/table.module.css"
import generic from "../../data/generic"
import { Menu, apiLinks } from "../Menu"

export const GetFieldState = () => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        getFieldState
      </h1>
      <p className={typographyStyles.subHeading}>State of the field</p>

      <div className={containerStyles.wrapper}>
        <Menu pages={apiLinks} />

        <main>
          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>
                getFieldState:{" "}
                <span
                  className={typographyStyles.typeText}
                >{`(name: string, formState?: Object) => ({isDirty, isTouched, invalid, error})`}</span>
              </h2>
            </code>

            <p>
              This method is introduced in react-hook-form (
              <Link href="https://github.com/react-hook-form/react-hook-form/releases/tag/v7.25.0">
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
                    <th>{generic.name}</th>
                    <th>{generic.type}</th>
                    <th>{generic.description}</th>
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
                        This is an optional prop, which is only required if{" "}
                        <code>formState</code> is not been read/subscribed from
                        the <code>useForm</code>, <code>useFormContext</code> or{" "}
                        <code>useFormState</code>.
                      </p>
                      <CodeArea
                        rawData={`const methods = useForm(); // not subscribed to any formState
const { error } = getFieldState('firstName', methods.formState) // It is subscribed now and reactive to error state updated

const { formState: { errors } } = useForm() // errors are subscribed and reactive to state update
getFieldState('firstName') // return updated field error state
`}
                      />
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
                    <th>{generic.name}</th>
                    <th>{generic.type}</th>
                    <th>{generic.description}</th>
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

            <h2 id="rules" className={typographyStyles.rulesTitle}>
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
                <p>
                  <code>getFieldState</code> works by subscribing to the form
                  state update, and you can subscribe to the formState in the
                  following ways:
                </p>

                <ul>
                  <li>
                    <p>
                      You can subscribe at the <code>useForm</code>,{" "}
                      <code>useFormContext</code> or <code>useFormState</code>.
                      This is will establish the form state subscription and{" "}
                      <code>getFieldState</code> second argument will no longer
                      be required.
                    </p>

                    <CodeArea
                      rawData={`const { register, formState: { isDirty } } = useForm()
register('test');
getFieldState('test'); // ✅
`}
                    />

                    <CodeArea
                      rawData={`const { isDirty } = useFormState();
register('test');
getFieldState('test'); // ✅
`}
                    />

                    <CodeArea
                      rawData={`const { register, formState: { isDirty } } = useFormContext();
register('test');
getFieldState('test'); // ✅
`}
                    />
                  </li>

                  <li>
                    <p>
                      When form state subscription is not setup, you can pass
                      the entire <code>formState</code> as the second optional
                      argument by following the example below:
                    </p>

                    <CodeArea
                      rawData={`const { register } = useForm()
register('test');
const { isDirty } = getFieldState('test'); // ❌ formState isDirty is not subscribed at useForm

const { register, formState } = useForm()
const { isDirty } = getFieldState('test', formState); // ✅ formState.isDirty subscribed

const { formState } = useFormContext();
const { touchedFields } = getFieldState('test', formState); // ✅ formState.touchedFields subscribed
`}
                    />
                  </li>
                </ul>
              </li>
            </ul>

            <h2 id="example" className={typographyStyles.subTitle}>
              Examples
            </h2>

            <CodeArea
              rawData={getFieldState}
              url="https://codesandbox.io/s/getfieldstate-jvekk"
            />

            <StarRepo />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}
