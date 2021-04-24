import * as React from "react"
import Footer from "../Footer"
import { Menu } from "../Menu"
import api from "../../data/en/api"
import * as typographyStyles from "../../styles/typography.module.css"
import * as containerStyles from "../../styles/container.module.css"
import TabGroup from "../TabGroup"
import CodeArea from "../CodeArea"
import handleSubmitCode from "../codeExamples/handleSubmitCode"
import handleSubmitCodeTs from "../codeExamples/handleSubmitCodeTs"
import handleSubmitAsyncCode from "../codeExamples/handleSubmitAsyncCode"

export default ({ currentLanguage }) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        handleSubmit
      </h1>
      <p className={typographyStyles.subHeading}>Ready to send to the server</p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>
                handleSubmit: <br />
                <span className={typographyStyles.typeText}>
                  ((data: Object, e?: Event) =&gt; void, (errors: Object, e?:
                  Event) =&gt; void) =&gt; Function
                </span>
              </h2>
            </code>
            {api.handleSubmit.description}
            <TabGroup buttonLabels={["sync", "async"]}>
              <CodeArea
                rawData={handleSubmitCode}
                tsRawData={handleSubmitCodeTs}
                url="https://codesandbox.io/s/react-hook-form-handlesubmit-v7-uqmiy"
                tsUrl="https://codesandbox.io/s/react-hook-form-handlesubmit-ts-v7-lcrtu"
              />
              <CodeArea
                rawData={handleSubmitAsyncCode}
                url="https://codesandbox.io/s/react-hook-form-async-submit-validation-kpx0o"
              />
            </TabGroup>
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
