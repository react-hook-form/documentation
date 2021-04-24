import * as React from "react"
import Footer from "../Footer"
import { Menu } from "../Menu"
import api from "../../data/en/api"
import * as typographyStyles from "../../styles/typography.module.css"
import * as containerStyles from "../../styles/container.module.css"
import TabGroup from "../TabGroup"
import CodeArea from "../CodeArea"
import setValue from "../codeExamples/setValue"
import setValueTs from "../codeExamples/setValueTs"
import setValueTypes from "../codeExamples/setValueTypes"
import setValueUseFieldArray from "../codeExamples/setValueUseFieldArray"

export default ({ currentLanguage }) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        setValue
      </h1>
      <p className={typographyStyles.subHeading}>Update input value</p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>
                setValue:{" "}
                <span className={typographyStyles.typeText}>
                  (name: string, value: unknown, config?: Object) =&gt; void
                </span>
              </h2>
            </code>

            {api.setValue.description}

            <TabGroup buttonLabels={["basic", "useFieldArray set value"]}>
              <CodeArea
                rawData={setValue}
                url="https://codesandbox.io/s/react-hook-form-v7-setvalue-h8wbk"
                tsRawData={setValueTs}
                rawTypes={setValueTypes}
                tsUrl="https://codesandbox.io/s/react-hook-form-v7-ts-setvalue-8z9hx"
              />
              <CodeArea
                rawData={setValueUseFieldArray}
                url="https://codesandbox.io/s/usefieldarray-with-setvalue-ykupr"
              />
            </TabGroup>
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
