import * as React from "react"
import { useStateMachine } from "little-state-machine"
import Footer from "../Footer"
import { Menu } from "../Menu"
import api from "../../data/en/api"
import typographyStyles from "../../styles/typography.module.css"
import containerStyles from "../../styles/container.module.css"
import TabGroup from "../TabGroup"
import CodeArea from "../CodeArea"
import resetCode from "../codeExamples/resetCode"
import resetCodeTs from "../codeExamples/resetCodeTs"
import resetController from "../codeExamples/resetController"
import resetControllerTs from "../codeExamples/resetControllerTs"
import submitReset from "../codeExamples/submitReset"
import fieldArrayReset from "../codeExamples/fieldArrayReset"

export default ({ currentLanguage }) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        reset
      </h1>
      <p className={typographyStyles.subHeading}>Reset form state and values</p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>
                reset:{" "}
                <span
                  className={typographyStyles.typeText}
                >{`(values?: Record<string, any>, options?: Record<string, boolean>) => void`}</span>
              </h2>
            </code>

            {api.reset.description}

            <TabGroup
              buttonLabels={[
                "Uncontrolled",
                "Controller",
                "Submit with reset",
                "Field Array",
              ]}
            >
              <CodeArea
                rawData={resetCode}
                tsRawData={resetCodeTs}
                url="https://codesandbox.io/s/react-hook-form-reset-v7-r7m5s"
                tsUrl="https://codesandbox.io/s/react-hook-form-reset-v7-ts-pu901"
              />
              <CodeArea
                rawData={resetController}
                tsRawData={resetControllerTs}
                url="https://codesandbox.io/s/react-hook-form-v7-controller-5h1q5"
                tsUrl="https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw"
              />
              <CodeArea
                rawData={submitReset}
                url="https://codesandbox.io/s/react-hook-form-handlesubmit-with-reset-xu1zu"
              />
              <CodeArea
                rawData={fieldArrayReset}
                url="https://codesandbox.io/s/react-hook-form-reset-usefieldarray-forked-kdh2s"
              />
            </TabGroup>
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
