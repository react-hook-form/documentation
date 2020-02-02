import * as React from "react"
import generic from "../data/generic"
import errorMessage from "./codeExamples/errorMessage"
import CodeArea from "./CodeArea"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"

export default ({
  api,
  currentLanguage,
}: {
  api: any
  currentLanguage: string
}) => {
  return (
    <div>
      <code className={typographyStyles.codeHeading}>
        <h2>
          ErrorMessage:{" "}
          <span className={typographyStyles.typeText}>Component</span>
        </h2>
      </code>

      {api.ErrorMessage.description}

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>{generic.name[currentLanguage]}</th>
              <th>{generic.type[currentLanguage]}</th>
              <th width="90px">{generic.required[currentLanguage]}</th>
              <th>{generic.description[currentLanguage]}</th>
            </tr>
          </thead>
          {api.ErrorMessage.table}
        </table>
      </div>

      <CodeArea
        rawData={errorMessage}
        url="https://codesandbox.io/s/react-hook-form-errormessage-pc2b6"
      />
    </div>
  )
}
