import * as React from "react"
import CodeArea from "./CodeArea"
import controller from "./codeExamples/controller"
import reactNativeController from "./codeExamples/reactNativeController"
import generic from "../data/generic"
import TabGroup from "./TabGroup"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"
import controllerTs from "./codeExamples/controllerTs"
import VideoList from "./VideoList"

export default function Controller({
  currentLanguage,
  api,
}: {
  currentLanguage: string
  api: any
}) {
  const [play, setPlay] = React.useState(false)
  return (
    <>
      <code className={typographyStyles.codeHeading}>
        <h2>
          Controller:{" "}
          <span className={typographyStyles.typeText}>Component</span>
          <button
            className={typographyStyles.videoLink}
            onClick={() => setPlay(!play)}
          >
            Videos
          </button>
        </h2>
      </code>

      {api.Controller.description}

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
          {api.Controller.table}
        </table>
      </div>
      <TabGroup buttonLabels={["Web", "React Native"]}>
        <CodeArea
          rawData={controller}
          url="https://codesandbox.io/s/react-hook-form-v6-controller-qsd8r"
          tsRawData={controllerTs}
          tsUrl="https://codesandbox.io/s/react-hook-form-v6-controller-ts-4dpm9"
        />
        <CodeArea
          rawData={reactNativeController}
          isExpo
          url="https://snack.expo.io/@bluebill1049/react-hook-form-v6"
        />
      </TabGroup>
    </>
  )
}
