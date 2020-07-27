import * as React from "react"
import generic from "../data/generic"
import CodeArea from "./CodeArea"
import useFieldArray from "./codeExamples/useFieldArray"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"

export default function UseFieldArray({
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
          >{`({ control?: any, name: string, keyName?: string = 'id' }) => object`}</span>
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

      <CodeArea
        rawData={useFieldArray}
        url="https://codesandbox.io/s/react-hook-form-usefieldarray-vy8fv"
      />
    </>
  )
}
