import * as React from "react"
import * as typographyStyles from "../styles/typography.module.css"
import FormStateTable from "./FormStateTable"

export default React.memo(
  ({ api, currentLanguage }: { currentLanguage: string; api: any }) => {
    return (
      <>
        <code className={typographyStyles.codeHeading}>
          <h2>
            formState: <span className={typographyStyles.typeText}>Object</span>
          </h2>
        </code>
        {api.formState.description}

        <FormStateTable currentLanguage={currentLanguage} api={api} />
      </>
    )
  }
)
