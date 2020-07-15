import * as React from "react"
import CodeArea from "../CodeArea"
import controller from "./codeExamples/controller"
import reactNativeController from "../codeExamples/reactNativeController"
import generic from "../../data/generic"
import TabGroup from "../TabGroup"
import typographyStyles from "../../styles/typography.module.css"
import tableStyles from "../../styles/table.module.css"
import controllerTs from "../codeExamples/controllerTs"
import VideoList from "../VideoList"

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

      <VideoList
        play={play}
        lists={[
          {
            title: "How to Use React-Hook-Form With Material UI",
            url: "https://www.youtube.com/watch?v=PquWexbGcVc",
          },
          {
            title: "React Hook Form - React Forms Episode II",
            url: "https://www.youtube.com/watch?v=0nDGeQKLFjo",
          },
          {
            title: "Using React Hook Form with Ionic React Components",
            url: "https://www.youtube.com/watch?v=5MsXpmh3Un8",
          },
        ]}
      />

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
          url="https://codesandbox.io/s/react-hook-form-controller-v5-ii1vs"
          tsRawData={controllerTs}
          tsUrl="https://codesandbox.io/s/react-hook-form-controller-ts-v5-g2gmc"
        />
        <CodeArea
          rawData={reactNativeController}
          isExpo
          url="https://snack.expo.io/@bluebill1049/react-hook-form---controller"
        />
      </TabGroup>
    </>
  )
}
