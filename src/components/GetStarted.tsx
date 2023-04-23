import CodeArea from "./CodeArea"
import code from "./codeExamples/defaultExample"
import codeTs from "./codeExamples/defaultExampleTs"
import generic from "../data/generic"
import copyClipBoard from "./utils/copyClipBoard"
import { useStateMachine } from "little-state-machine"
import * as styles from "./GetStarted.module.css"
import ClipBoard from "./ClipBoard"

export default function GetStarted({
  quickStartRef,
  currentLanguage,
  getStarted,
}: {
  quickStartRef: any
  currentLanguage: string
  getStarted: any
}) {
  const { state } = useStateMachine()
  const lightMode = state?.setting?.lightMode

  return (
    <>
      <h2 ref={quickStartRef}>{getStarted.install.linkTitle}</h2>
      <p>{getStarted.install.description}</p>

      <span
        className={`${styles.installCode} ${
          lightMode ? styles.lightInstallCode : ""
        }`}
      >
        npm install react-hook-form
        <ClipBoard
          className={styles.copyButton}
          currentLanguage={currentLanguage}
          onClick={() => copyClipBoard("npm install react-hook-form")}
        />
      </span>

      <h2
        style={{
          marginTop: 50,
        }}
      >
        {getStarted.example.title}
      </h2>
      <p>{getStarted.example.description}</p>
      <CodeArea
        rawData={code}
        tsRawData={codeTs}
        url="https://codesandbox.io/s/react-hook-form-get-started-j5wxo"
        tsUrl="https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm"
      />
    </>
  )
}
