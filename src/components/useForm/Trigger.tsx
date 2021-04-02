import * as React from "react"
import { useStateMachine } from "little-state-machine"
import Footer from "../Footer"
import { Menu } from "../Menu"
import api from "../../data/en/api"
import typographyStyles from "../../styles/typography.module.css"
import containerStyles from "../../styles/container.module.css"
import CodeArea from "../CodeArea"
import trigger from "../codeExamples/trigger"
import triggerTs from "../codeExamples/triggerTs"

export default ({ currentLanguage }) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        trigger
      </h1>
      <p className={typographyStyles.subHeading}>
        Trigger validation across the form
      </p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>
                trigger:{" "}
                <span className={typographyStyles.typeText}>
                  {`(name?: string | string[]) => void`}
                </span>
              </h2>
            </code>
            {api.trigger.description}

            <CodeArea
              rawData={trigger}
              url="https://codesandbox.io/s/react-hook-form-v6-triggervalidation-forked-8w9tn"
              tsRawData={triggerTs}
              tsUrl="https://codesandbox.io/s/react-hook-form-v6-ts-triggervalidation-forked-xs7hl"
            />
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
