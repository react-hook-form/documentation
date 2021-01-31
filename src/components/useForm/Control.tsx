import * as React from "react"
import { useStateMachine } from "little-state-machine"
import Footer from "../Footer"
import { Menu } from "../Menu"
import api from "../../data/en/api"
import typographyStyles from "../../styles/typography.module.css"
import containerStyles from "../../styles/container.module.css"
import CodeArea from "../CodeArea"
import control from "../codeExamples/control"
import controlTs from "../codeExamples/controlTs"

export default ({ currentLanguage }) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        clearErrors
      </h1>
      <p className={typographyStyles.subHeading}>Clear form errors</p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>
                control:{" "}
                <span className={typographyStyles.typeText}>Object</span>
              </h2>
            </code>
            {api.control.description}

            <CodeArea
              rawData={control}
              url="https://codesandbox.io/s/react-hook-form-v6-controller-ts-4dpm9"
              tsRawData={controlTs}
              tsUrl="https://codesandbox.io/s/react-hook-form-v6-controller-ts-4dpm9"
            />
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
