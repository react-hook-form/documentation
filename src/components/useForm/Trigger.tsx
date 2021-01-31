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
        trigger validation across the form
      </p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>
                trigger:{" "}
                <span className={typographyStyles.typeText}>
                  {`(payload?: string | string[]) => Promise<boolean>`}
                </span>
              </h2>
            </code>
            {api.trigger.description}

            <CodeArea
              rawData={trigger}
              url="https://codesandbox.io/s/react-hook-form-v6-triggervalidation-b6j5h"
              tsRawData={triggerTs}
              tsUrl="https://codesandbox.io/s/react-hook-form-v6-ts-triggervalidation-xj8gk"
            />
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
