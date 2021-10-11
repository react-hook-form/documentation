import * as React from "react"
import Footer from "./Footer"
import { Link } from "gatsby"
import { Menu } from "./Menu"
import api from "../data/en/api"
import useFormState from "./codeExamples/useFormState"
import * as typographyStyles from "../styles/typography.module.css"
import * as containerStyles from "../styles/container.module.css"
import FormStateTable from "./FormStateTable"
import CodeArea from "./CodeArea"
import * as tableStyles from "../styles/table.module.css"
import generic from "../data/generic"

export default ({ currentLanguage }) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        useFormState
      </h1>
      <p className={typographyStyles.subHeading}>
        Subscribe to form state update
      </p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section id="useFormRef">
            <code className={typographyStyles.codeHeading}>
              <h2>
                useFormState:{" "}
                <span
                  className={typographyStyles.typeText}
                >{`({ control: Control }) => FormState`}</span>
              </h2>
            </code>

            <p>
              This custom hook allows you to subscribe to each form state, and
              isolate the re-render at the custom hook level. It has its scope
              in terms of form state subscription, so it would not affect other
              useFormState and useForm. Using this hook can reduce the re-render
              impact on large and complex form application.
            </p>

            <p>
              <b className={typographyStyles.note}>Important:</b> returned{" "}
              <code>formState</code> is wrapped with Proxy to improve render
              performance and skip extra logic if specific state is not
              subscribed, so make sure you deconstruct or read it before render
              in order to enable the subscription.
            </p>

            <CodeArea
              rawData={`const { isDirty } = useFormState(); // ✅
const formState = useFormState(); // ❌ should deconstruct the formState      
`}
            />

            <h2 className={typographyStyles.subTitle}>Props</h2>

            <p>
              The following table contains information about the arguments for{" "}
              <code>useFormState</code>.
            </p>
            <div className={tableStyles.tableWrapper}>
              <table className={tableStyles.table}>
                <thead>
                  <tr>
                    <th>{generic.name[currentLanguage]}</th>
                    <th width={"200px"}>{generic.type[currentLanguage]}</th>
                    <th width={"90px"}>{generic.required[currentLanguage]}</th>
                    <th>{generic.description[currentLanguage]}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>control</code>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>object</code>
                    </td>
                    <td></td>
                    <td>
                      <Link to={"/api/useform/control"}>
                        <code>control</code>
                      </Link>{" "}
                      object from useForm.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>name</code>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>
                        string | string[]
                      </code>
                    </td>
                    <td></td>
                    <td>
                      Provide a single input name, an array of them, or
                      subscribe to all inputs' formState update.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>disabled</code>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>
                        boolean = false
                      </code>
                    </td>
                    <td> </td>
                    <td>
                      <p>Option to disable the subscription.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <FormStateTable currentLanguage={currentLanguage} api={api} />

            <CodeArea
              rawData={useFormState}
              url={"https://codesandbox.io/s/useformstate-75xly"}
            />
          </section>

          <Footer currentLanguage={currentLanguage} />
        </main>
      </div>
    </div>
  )
}
