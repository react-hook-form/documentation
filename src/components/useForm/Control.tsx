import * as React from "react"
import Footer from "../Footer"
import { Menu } from "../Menu"
import api from "../../data/en/api"
import * as typographyStyles from "../../styles/typography.module.css"
import * as containerStyles from "../../styles/container.module.css"
import CodeArea from "../CodeArea"
import control from "../codeExamples/control"
import controlTs from "../codeExamples/controlTs"
import StarRepo from "../StarRepo"

export default ({ currentLanguage }) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        control
      </h1>
      <p className={typographyStyles.subHeading}>Take control of the form</p>

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

            <h2 id="example" className={typographyStyles.subTitle}>
              Examples
            </h2>

            <CodeArea
              rawData={control}
              url="https://codesandbox.io/s/react-hook-form-v7-controller-5h1q5"
              tsRawData={controlTs}
              tsUrl="https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw"
            />

            <StarRepo currentLanguage="en" />
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
