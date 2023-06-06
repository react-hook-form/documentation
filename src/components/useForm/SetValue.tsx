import Footer from "../Footer"
import api from "../../data/api"
import typographyStyles from "../../styles/typography.module.css"
import containerStyles from "../../styles/container.module.css"
import TabGroup from "../TabGroup"
import CodeArea from "../CodeArea"
import setValue from "../codeExamples/setValue"
import setValueTs from "../codeExamples/setValueTs"
import setValueTypes from "../codeExamples/setValueTypes"
import dependantFields from "../codeExamples/dependantFieldsTS"
import StarRepo from "../StarRepo"
import { Menu, apiLinks } from "../Menu"

const SetValue = () => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        setValue
      </h1>
      <p className={typographyStyles.subHeading}>Update field value</p>

      <div className={containerStyles.wrapper}>
        <Menu pages={apiLinks} />

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

            <h2 id="example" className={typographyStyles.subTitle}>
              Examples
            </h2>

            <TabGroup buttonLabels={["basic", "dependant fields"]}>
              <CodeArea
                rawData={setValue}
                url="https://codesandbox.io/s/react-hook-form-v7-setvalue-h8wbk"
                tsRawData={setValueTs}
                rawTypes={setValueTypes}
                tsUrl="https://codesandbox.io/s/react-hook-form-v7-ts-setvalue-8z9hx"
              />
              <CodeArea
                rawData={dependantFields}
                url="https://codesandbox.io/s/dependant-field-dwin1"
              />
            </TabGroup>

            <h2 className={typographyStyles.subTitle}>Video</h2>

            <p>
              The following video tutorial demonstrates <code>setValue</code>{" "}
              API in detail.
            </p>

            <iframe
              width="100%"
              height="528"
              title="react hook form setValue API"
              src="https://www.youtube.com/embed/qpv51sCH3fI"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <StarRepo />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default SetValue
