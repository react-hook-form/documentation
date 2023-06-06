import Footer from "./Footer"
import Link from "next/link"
import api from "../data/api"
import useFormState from "./codeExamples/useFormState"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import FormStateTable from "./FormStateTable"
import CodeArea from "./CodeArea"
import tableStyles from "../styles/table.module.css"
import generic from "../data/generic"
import StarRepo from "./StarRepo"
import { Menu, apiLinks } from "./Menu"

const UseFormState = () => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        useFormState
      </h1>
      <p className={typographyStyles.subHeading}>
        Subscribe to form state update
      </p>

      <div className={containerStyles.wrapper}>
        <Menu pages={apiLinks} />

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

            <h2 className={typographyStyles.subTitle}>Props</h2>

            <p>
              The following table contains information about the arguments for{" "}
              <code>useFormState</code>.
            </p>
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
                      <code>control</code>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>object</code>
                    </td>
                    <td>
                      <Link href="/docs/useform/control">
                        <code>control</code>
                      </Link>{" "}
                      object provided by <code>useForm</code>. It's optional if
                      you are using FormContext.
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
                    <td>
                      <p>Option to disable the subscription.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>exact</code>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>
                        boolean = false
                      </code>
                    </td>
                    <td>
                      <p>
                        This prop will enable an exact match for input name
                        subscriptions.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <FormStateTable api={api} />

            <h2 id="rules" className={typographyStyles.rulesTitle}>
              Rules
            </h2>

            <p>
              Returned <code>formState</code> is wrapped with Proxy to improve
              render performance and skip extra computation if specific state is
              not subscribed, so make sure you deconstruct or read it before
              render in order to enable the subscription.
            </p>

            <CodeArea
              rawData={`const { isDirty } = useFormState(); // ✅
const formState = useFormState(); // ❌ should deconstruct the formState      
`}
            />

            <h2 id="example" className={typographyStyles.subTitle}>
              Examples
            </h2>

            <CodeArea
              rawData={useFormState}
              url="https://codesandbox.io/s/useformstate-75xly"
            />

            <StarRepo />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default UseFormState
