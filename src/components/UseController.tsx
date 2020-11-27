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
import useController from "./codeExamples/useController"

export default function UseController({ api }: { api: any }) {
  return (
    <>
      <code className={typographyStyles.codeHeading}>
        <h2>
          useController:{" "}
          <span
            className={typographyStyles.typeText}
          >{`({ name: string, control: object }) => object`}</span>
        </h2>
      </code>

      {api.useController.description}

      <CodeArea
        rawData={useController}
        url="https://codesandbox.io/s/react-hook-form-v6-controller-qsd8r"
      />
    </>
  )
}
