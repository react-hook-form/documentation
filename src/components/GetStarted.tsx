import CodeArea from "./CodeArea"
import code from "./codeExamples/defaultExample"
import codeTs from "./codeExamples/defaultExampleTs"
import copyClipBoard from "./utils/copyClipBoard"
import * as styles from "./GetStarted.module.css"
import ClipBoard from "./ClipBoard"

export default function GetStarted({
  quickStartRef,
  getStarted,
}: {
  quickStartRef: any
  getStarted: any
}) {
  return (
    <>
      <h2 ref={quickStartRef}>{getStarted.install.linkTitle}</h2>
      <p>{getStarted.install.description}</p>

      <pre className="language-bash">
        npm install react-hook-form
        <ClipBoard
          className={styles.copyButton}
          onClick={() => copyClipBoard("npm install react-hook-form")}
        />
      </pre>

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
