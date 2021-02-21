import * as React from "react"
import { useStateMachine } from "little-state-machine"
import Footer from "../Footer"
import { Menu } from "../Menu"
import api from "../../data/en/api"
import typographyStyles from "../../styles/typography.module.css"
import containerStyles from "../../styles/container.module.css"
import ApiFormState from "../ApiFormState"
import CodeArea from "../CodeArea"
import formState from "../codeExamples/formState"
import formStateTs from "../codeExamples/formStateTs"

export default ({ currentLanguage }) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        formState
      </h1>
      <p className={typographyStyles.subHeading}>State of the form</p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <ApiFormState currentLanguage={currentLanguage} api={api} />

            <CodeArea
              rawData={formState}
              url="https://codesandbox.io/s/react-hook-form-v6-formstate-forked-tyqlp"
              tsRawData={formStateTs}
              tsUrl="https://codesandbox.io/s/react-hook-form-v6-ts-formstate-forked-5sxs3"
            />
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
