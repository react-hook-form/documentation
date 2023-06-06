import Seo from "../../components/seo"
import Layout from "../../components/layout"
import containerStyles from "../../styles/container.module.css"
import typographyStyles from "../../styles/typography.module.css"
import CodeArea from "../../components/CodeArea"
import formContext from "../../components/codeExamples/formContext"
import tableStyles from "../../styles/table.module.css"
import Link from "next/link"
import { Menu, apiLinks } from "../../components/Menu"

export default function FormProvider() {
  return (
    <Layout>
      <Seo title="FormProvider" />
      <div className={containerStyles.container}>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          FormProvider
        </h1>

        <p className={typographyStyles.subHeading}>
          A component to provide React Context
        </p>

        <div className={containerStyles.wrapper}>
          <Menu pages={apiLinks} />

          <main>
            <p>
              This component will host context object and allow consuming
              component to subscribe to context and use{" "}
              <Link href="/docs/useform">useForm</Link> props and methods.
            </p>

            <h2 className={typographyStyles.subTitle}>Props</h2>

            <p>
              This following table applied to <code>FormProvider</code>,{" "}
              <code>useFormContext</code> accepts no argument.
            </p>

            <div className={tableStyles.tableWrapper}>
              <table className={tableStyles.table}>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>
                    <code>...props</code>
                  </td>
                  <td>
                    <code className={typographyStyles.typeText}>Object</code>
                  </td>
                  <td>
                    <code>FormProvider</code> requires all <code>useForm</code>{" "}
                    methods.
                  </td>
                </tr>
              </table>
            </div>

            <h2 id="rules" className={typographyStyles.rulesTitle}>
              Rules
            </h2>
            <ul>
              <li>
                <p>Avoid using nested FormProvider</p>
              </li>
            </ul>

            <h2 id="example" className={typographyStyles.subTitle}>
              Examples
            </h2>

            <CodeArea
              rawData={formContext}
              url="https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi"
            />
          </main>
        </div>
      </div>
    </Layout>
  )
}
