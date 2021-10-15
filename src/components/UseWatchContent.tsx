import * as React from "react"
import CodeArea from "./CodeArea"
import useWatch from "./codeExamples/useWatch"
import useWatchTs from "./codeExamples/useWatchTs"
import generic from "../data/generic"
import * as typographyStyles from "../styles/typography.module.css"
import * as tableStyles from "../styles/table.module.css"
import TabGroup from "./TabGroup"
import useWatchFieldArray from "./codeExamples/useWatchFieldArray"

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
          useWatch:{" "}
          <span
            className={typographyStyles.typeText}
          >{`({ control?: Control, name?: string, defaultValue?: any, disabled?: boolean }) => object`}</span>
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
                  string | string[]
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
                <code className={typographyStyles.typeText}>any</code>
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
          </tbody>
        </table>
      </div>

      <h2 className={typographyStyles.subTitle}>Rules</h2>

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
            The only different between <code>useWatch</code> and{" "}
            <code>watch</code> is at root level or component level update.
          </p>
        </li>
        <li>
          <p>
            <code>useWatch</code> execution order matters, which means if you
            are update form value before the subscription is in place, then the
            value update will be ignored.
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
            <code>useWatch</code> result is optimised for render phase instead
            of <code>useEffect</code>'s deps, to detect value update you may
            want to use an external custom hook for value comparison.
          </p>
        </li>
      </ul>

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
