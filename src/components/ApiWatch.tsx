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
            </tr>
            <tr>
              <td>
                <code className={typographyStyles.typeText}>string</code>
              </td>
              <td>{api.watch.tableTitle.single}</td>
            </tr>
            <tr>
              <td>
                <code className={typographyStyles.typeText}>string[]</code>
              </td>
              <td>{api.watch.tableTitle.multiple}</td>
            </tr>
            <tr>
              <td>
                <code className={typographyStyles.typeText}>undefined</code>
              </td>
              <td>{api.watch.tableTitle.all}</td>
            </tr>
            <tr>
              <td>
                <code
                  className={typographyStyles.typeText}
                >{`(data: unknown, { name: string, type: string }) => void`}</code>
              </td>
              <td>{api.watch.tableTitle.callback}</td>
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
                <code>watch('inputName')</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>unknown</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>watch(['inputName1'])</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>unknown[]</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>watch()</code>
              </td>
              <td>
                <code
                  className={typographyStyles.typeText}
                >{`{[key:string]: unknown}`}</code>
              </td>
            </tr>
            <tr>
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

      <h2 id="rules" className={typographyStyles.rulesTitle}>
        Rules
      </h2>

      <ul>
        <li>
          <p>
            When <code>defaultValue</code> is not defined, the first render of{" "}
            <code>watch</code> will return <code>undefined</code> because it is
            called before <code>register</code>. It's <b>recommend</b> to
            provide <code>defaultValues</code> at <code>useForm</code> to avoid
            this behaviour, but you can set the inline <code>defaultValue</code>{" "}
            as the second argument.
          </p>
        </li>
        <li>
          <p>
            When both <code>defaultValue</code> and <code>defaultValues</code>{" "}
            are supplied, <code>defaultValue</code> will be returned.
          </p>
        </li>
        <li>
          <p>
            This API will trigger re-render at the root of your app or form,
            consider using a callback or the{" "}
            <Link to="/api/usewatch">useWatch</Link> api if you are experiencing
            performance issues.
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

      <h2 id="example" className={typographyStyles.subTitle}>
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
        src="https://www.youtube.com/embed/3qLd69WMqKk"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <StarRepo currentLanguage="en" />
    </>
  )
}
