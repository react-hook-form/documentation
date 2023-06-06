import Footer from "../Footer"
import api from "../../data/api"
import typographyStyles from "../../styles/typography.module.css"
import containerStyles from "../../styles/container.module.css"
import CodeArea from "../CodeArea"
import getValues from "../codeExamples/getValues"
import getValuesTs from "../codeExamples/getValuesTs"
import getValuesTypes from "../codeExamples/getValuesTypes"
import StarRepo from "../StarRepo"
import { Menu, apiLinks } from "../Menu"

const GetValues = () => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        getValues
      </h1>
      <p className={typographyStyles.subHeading}>Get form values</p>

      <div className={containerStyles.wrapper}>
        <Menu pages={apiLinks} />

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

            <h2 id="example" className={typographyStyles.subTitle}>
              Examples
            </h2>

            <CodeArea
              rawData={getValues}
              url="https://codesandbox.io/s/react-hook-form-v7-getvalues-2eioh"
              tsRawData={getValuesTs}
              tsUrl="https://codesandbox.io/s/react-hook-form-v7-ts-getvalues-txsfg"
              rawTypes={getValuesTypes}
            />

            <StarRepo />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default GetValues
