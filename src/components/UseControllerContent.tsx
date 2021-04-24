import * as React from "react"
import CodeArea from "./CodeArea"
import generic from "../data/generic"
import useController from "./codeExamples/useController"
import useControllerTs from "./codeExamples/useControllerTs"
import * as tableStyles from "../styles/table.module.css"
import * as typographyStyles from "../styles/typography.module.css"
import UseControllerMethods from "./UseControllerMethods"

export default function UseControllerContent({
  api,
  currentLanguage,
}: {
  api: any
  currentLanguage: string
}) {
  return (
    <>
      <code className={typographyStyles.codeHeading}>
        <h2>
          useController:
          <br />
          <span
            className={typographyStyles.typeText}
          >{`(props?: UseControllerProps) => { field: object, fieldState: object, formState: object }`}</span>
        </h2>
      </code>
      {api.useController.description}
      <h2 className={typographyStyles.subTitle}>Props</h2>
      <p>
        The following table contains information about the arguments for{" "}
        <code>useController</code>.
      </p>
      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>{generic.name[currentLanguage]}</th>
              <th width="150px">{generic.type[currentLanguage]}</th>
              <th width="90px">{generic.required[currentLanguage]}</th>
              <th>{generic.description[currentLanguage]}</th>
            </tr>
          </thead>
          {api.useController.table}
        </table>
      </div>

      <UseControllerMethods currentLanguage={currentLanguage} />

      <CodeArea
        rawData={useController}
        tsRawData={useControllerTs}
        tsUrl="https://codesandbox.io/s/usecontroller-0o8px"
        url="https://codesandbox.io/s/usecontroller-i0ywh"
      />

      {api.useController.tips}
    </>
  )
}
