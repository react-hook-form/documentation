import * as React from "react"
import CodeArea from "./CodeArea"
import useWatch from "./codeExamples/useWatch"
import useWatchTs from "./codeExamples/useWatchTs"
import generic from "../data/generic"
import * as typographyStyles from "../styles/typography.module.css"
import * as tableStyles from "../styles/table.module.css"
import TabGroup from "./TabGroup"
import useWatchFieldArray from "./codeExamples/useWatchFieldArray"
import { Link } from "gatsby"

export default function UseFieldArray({
  api,
  currentLanguage,
}: {
  currentLanguage: string
  api: any
}) {
  return (
    <>
      <code className={typographyStyles.codeHeading}>
        <h2>
          useWatch: <br />
          <span
            className={typographyStyles.typeText}
          >{`({ control?: Control, name?: string, defaultValue?: unknown, disabled?: boolean }) => object`}</span>
        </h2>
      </code>

      {api.useWatch.description}

      <h2 className={typographyStyles.subTitle}>Props</h2>

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>{generic.name[currentLanguage]}</th>
              <th>{generic.type[currentLanguage]}</th>
              {/*<th width="90px">{generic.required[currentLanguage]}</th>*/}
              <th>{generic.description[currentLanguage]}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>name</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>
                  string | string[] | undefined
                </code>
              </td>
              <td>{api.ErrorMessage.table.name}</td>
            </tr>
            <tr>
              <td>
                <code>control</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>Object</code>
              </td>
              <td>{generic.control[currentLanguage]}</td>
            </tr>
            <tr>
              <td>
                <code>defaultValue</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>unknown</code>
              </td>
              <td>
                <p>
                  default value for <code>useWatch</code> to return before the
                  initial render.
                </p>
                <p>
                  <b className={typographyStyles.note}>Note:</b> the first
                  render will always return <code>defaultValue</code> when it's
                  supplied.
                </p>
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

      <h2 className={typographyStyles.subTitle}>Return</h2>

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th
                style={{
                  minWidth: 340,
                }}
              >
                {generic.example[currentLanguage]}
              </th>
              <th
                style={{
                  minWidth: 180,
                }}
              >
                {generic.return[currentLanguage]}
              </th>
            </tr>
            <tr>
              <td>
                <code>useWatch('inputName')</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>unknown</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>useWatch(['inputName1'])</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>unknown[]</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>useWatch()</code>
              </td>
              <td>
                <code
                  className={typographyStyles.typeText}
                >{`{[key:string]: unknown}`}</code>
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
          <p>
            The initial return value from <code>useWatch</code> will always
            return what's inside of <code>defaultValue</code> or{" "}
            <code>defaultValues</code> from <code>useForm</code>.
          </p>
        </li>
        <li>
          <p>
            The only difference between <code>useWatch</code> and{" "}
            <code>watch</code> is at the root (
            <Link to="/api/useform">
              <code>useForm</code>
            </Link>
            ) level or the custom hook level update.
          </p>
        </li>
        <li>
          <p>
            <code>useWatch</code>'s execution order matters, which means if you
            update a form value before the subscription is in place, then the
            value updated will be ignored.
          </p>

          <CodeArea
            rawData={`setValue('test', 'data');
useWatch({ name: 'test' }); // ❌ subscription is happened after value update, no update received

useWatch({ name: 'example' }); // ✅ input value update will be received and trigger re-render
setValue('example', 'data'); 
`}
          />
        </li>
        <li>
          <p>
            <code>useWatch</code>'s result is optimised for render phase instead
            of <code>useEffect</code>'s deps, to detect value updates you may
            want to use an external custom hook for value comparison.
          </p>
        </li>
      </ul>

      <h2 id="example" className={typographyStyles.subTitle}>
        Examples
      </h2>

      <TabGroup buttonLabels={["Form", "Advance Field Array"]}>
        <CodeArea
          rawData={useWatch}
          url="https://codesandbox.io/s/react-hook-form-v7-usewatch-forked-9872t"
          tsRawData={useWatchTs}
          tsUrl="https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e"
        />
        <CodeArea
          rawData={useWatchFieldArray}
          url="https://codesandbox.io/s/watchusewatch-calc-4tpnh"
        />
      </TabGroup>
    </>
  )
}
