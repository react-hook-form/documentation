import CodeArea from "./CodeArea"
import code from "./codeExamples/defaultExample"
import codeTs from "./codeExamples/defaultExampleTs"
import copyClipBoard from "./utils/copyClipBoard"
import styles from "./GetStarted.module.css"
import ClipBoard from "./ClipBoard"
import { useTheme } from "next-themes"

export default function GetStarted({
  quickStartRef,
  getStarted,
}: {
  quickStartRef: any
  getStarted: any
}) {
  const { theme } = useTheme()
  const lightMode = theme === "light"

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
