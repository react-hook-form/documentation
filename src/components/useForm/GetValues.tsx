import * as React from "react"
import { useStateMachine } from "little-state-machine"
import Footer from "../Footer"
import { Menu } from "../Menu"
import api from "../../data/en/api"
import * as typographyStyles from "../../styles/typography.module.css"
import * as containerStyles from "../../styles/container.module.css"
import CodeArea from "../CodeArea"
import getValues from "../codeExamples/getValues"
import getValuesTs from "../codeExamples/getValuesTs"
import getValuesTypes from "../codeExamples/getValuesTypes"

export default ({ currentLanguage }) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        getValues
      </h1>
      <p className={typographyStyles.subHeading}>Get form values</p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>
                getValues:{" "}
                <span
                  className={typographyStyles.typeText}
                >{`(payload?: string | string[]) => Object`}</span>
              </h2>
            </code>

            {api.getValues.description}

            <CodeArea
              rawData={getValues}
              url="https://codesandbox.io/s/react-hook-form-v7-getvalues-2eioh"
              tsRawData={getValuesTs}
              tsUrl="https://codesandbox.io/s/react-hook-form-v7-ts-getvalues-txsfg"
              rawTypes={getValuesTypes}
            />
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
