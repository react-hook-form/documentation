import * as React from "react"
import CodeArea from "./CodeArea"
import watchCode from "./codeExamples/watchCode"
import watchCodeTs from "./codeExamples/watchCodeTs"
import generic from "../data/generic"
import * as typographyStyles from "../styles/typography.module.css"
import * as tableStyles from "../styles/table.module.css"
import TabGroup from "./TabGroup"
import watchFieldArrayCode from "./codeExamples/watchFieldArrayCode"
import StarRepo from "./StarRepo"
import { Link } from "gatsby"

export default function ApiWatch({
  currentLanguage,
  api,
}: {
  api: any
  currentLanguage: string
}) {
  return (
    <>
      <code className={typographyStyles.codeHeading}>
        <h2>
          watch:{" "}
          <span
            className={typographyStyles.typeText}
          >{`(names?: string | string[] | (data, options) => void) => unknown`}</span>
        </h2>
      </code>

      {api.watch.description}

      <h2 className={typographyStyles.subTitle}>Props</h2>

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th
                style={{
                  minWidth: 180,
                }}
              >
                {generic.type[currentLanguage]}
              </th>
              <th
                style={{
                  minWidth: 200,
                }}
              >
                {generic.description[currentLanguage]}
              </th>
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
                <code className={typographyStyles.typeText}>string</code>
              </td>
              <td>{api.watch.tableTitle.single}</td>
              <td>
                <code>watch('inputName')</code>
                <br />
                <code>watch('inputName', 'value')</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>{`any`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className={typographyStyles.typeText}>{`string[]`}</code>
              </td>
              <td>{api.watch.tableTitle.multiple}</td>
              <td>
                <code>watch(['inputName1'])</code>
                <br />
                <code>{`watch(['field1'], { field1: '1' })`}</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>{`unknown[]`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className={typographyStyles.typeText}>undefined</code>
              </td>
              <td>{api.watch.tableTitle.all}</td>
              <td>
                <code>watch()</code>
                <br />
                <code>{`watch(undefined, { field: '1' })`}</code>
              </td>
              <td>
                <code
                  className={typographyStyles.typeText}
                >{`{[key:string]: any}`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code
                  className={typographyStyles.typeText}
                >{`(data: unknown, { name: string, type: string }) => void`}</code>
              </td>
              <td>{api.watch.tableTitle.callback}</td>
              <td>
                <code>{`watch((data, { name, type }) => console.log(data, name, type))`}</code>
              </td>
              <td>
                <code
                  className={typographyStyles.typeText}
                >{`{ unsubscribe: () => void }`}</code>
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
          <p>
            When <code>defaultValue</code> is not defined, the first render of{" "}
            <code>watch</code> will return <code>undefined</code> because it is
            called before <code>register</code>, but you can set the{" "}
            <code>defaultValue</code> as the second argument or provide{" "}
            <code>defaultValues</code> via <code>useForm</code> to avoid this
            behaviour.
          </p>
        </li>
        <li>
          <p>
            If <code>defaultValues</code> was initialised in{" "}
            <code>useForm</code> as an argument, then the first render will
            return what's provided in <code>defaultValues</code>.
          </p>
        </li>
        <li>
          <p>
            when both <code>defaultValue</code> and <code>defaultValues</code>{" "}
            are supplied, <code>defaultValue</code> will be returned instead for
            the first execution before render.
          </p>
        </li>
        <li>
          <p>
            This API will trigger re-render at the root of your app or form,
            consider using a callback or the{" "}
            <Link to={"/api/usewatch"}>useWatch</Link> api if you are
            experiencing performance issues.
          </p>
        </li>
        <li>
          <p>
            <code>watch</code> result is optimised for render phase instead of{" "}
            <code>useEffect</code>'s deps, to detect value update you may want
            to use an external custom hook for value comparison.
          </p>
        </li>
      </ul>

      <h2 id={"example"} className={typographyStyles.subTitle}>
        Examples
      </h2>

      <TabGroup buttonLabels={["Form", "Advance Field Array"]}>
        <CodeArea
          rawData={watchCode}
          tsRawData={watchCodeTs}
          url="https://codesandbox.io/s/react-hook-form-watch-v7-qbxd7"
          tsUrl="https://codesandbox.io/s/react-hook-form-watch-v7-ts-8et1d"
        />
        <CodeArea
          rawData={watchFieldArrayCode}
          url="https://codesandbox.io/s/watch-with-usefieldarray-e2d64"
        />
      </TabGroup>

      <h2 className={typographyStyles.subTitle}>Video</h2>

      <p>
        The following video tutorial demonstrates <code>watch</code> API.
      </p>

      <iframe
        width="100%"
        height="528"
        title="react hook form controller build"
        src={"https://www.youtube.com/embed/3qLd69WMqKk"}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <StarRepo currentLanguage="en" />
    </>
  )
}
