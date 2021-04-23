import * as React from "react"
import generic from "../../data/generic"
import CodeArea from "../CodeArea"
import useFieldArray from "../codeExamples/v6/useFieldArray"
import * as typographyStyles from "../../styles/typography.module.css"
import * as tableStyles from "../../styles/table.module.css"
import TabGroup from "../TabGroup"
import useFieldArrayConditional from "../codeExamples/v6/useFieldArrayConditional"

export default function UseFieldArrayContentV6({
  currentLanguage,
  api,
}: {
  currentLanguage: string
  api: any
}) {
  return (
    <>
      <code className={typographyStyles.codeHeading}>
        <h2>
          useFieldArray:
          <br />
          <span
            className={typographyStyles.typeText}
          >{`({ control?: Control, name: string, keyName?: string = 'id' }) => object`}</span>
          <a
            className={typographyStyles.videoLink}
            href="https://www.youtube.com/watch?v=LhIvi4XHIco"
            target="_blank"
            rel="noopener noreferrer"
          >
            Video
          </a>
        </h2>
      </code>

      {api.useFieldArray.description}

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th>{generic.name[currentLanguage]}</th>
              <th>{generic.type[currentLanguage]}</th>
              <th>{generic.description[currentLanguage]}</th>
            </tr>
            {api.useFieldArray.table}
          </tbody>
        </table>
      </div>

      <TabGroup buttonLabels={["useFieldArray", "conditional Field Array"]}>
        <CodeArea
          rawData={useFieldArray}
          url="https://codesandbox.io/s/react-hook-form-usefieldarray-vy8fv"
        />
        <CodeArea
          rawData={useFieldArrayConditional}
          url="https://codesandbox.io/s/usefieldarray-conditional-znizl"
        />
      </TabGroup>
    </>
  )
}
