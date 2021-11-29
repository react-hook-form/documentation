import * as React from "react"
import Footer from "../Footer"
import { Menu } from "../Menu"
import api from "../../data/en/api"
import * as typographyStyles from "../../styles/typography.module.css"
import * as containerStyles from "../../styles/container.module.css"
import TabGroup from "../TabGroup"
import CodeArea from "../CodeArea"
import setError from "../codeExamples/setError"
import setErrorTs from "../codeExamples/setErrorTs"
import setMultipleErrors from "../codeExamples/setMultipleErrors"
import setMultipleErrorsTs from "../codeExamples/setMultipleErrorsTs"
import setAllErrors from "../codeExamples/setAllErrors"
import setAllErrorsTs from "../codeExamples/setAllErrorsTs"
import StarRepo from "../StarRepo"

export default ({ currentLanguage }) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        setError
      </h1>
      <p className={typographyStyles.subHeading}>Manually set an input error</p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>
                setError:
                <span className={typographyStyles.typeText}>
                  {`(name: string, error: FieldError, { shouldFocus?: boolean }) => void`}
                </span>
              </h2>
            </code>

            {api.setError.description}

            <TabGroup
              buttonLabels={[
                "Single Error",
                "Multiple Errors",
                "Single Field Errors",
              ]}
            >
              <CodeArea
                rawData={setError}
                tsRawData={setErrorTs}
                url="https://codesandbox.io/s/react-hook-form-v7-seterror-btbf8"
                tsUrl="https://codesandbox.io/s/react-hook-form-v7-ts-seterror-nfxxu"
              />
              <CodeArea
                rawData={setMultipleErrors}
                tsRawData={setMultipleErrorsTs}
                url="https://codesandbox.io/s/react-hook-form-v7-seterror-3y1op"
                tsUrl="https://codesandbox.io/s/react-hook-form-v7-ts-seterror-8h440"
              />
              <CodeArea
                rawData={setAllErrors}
                tsRawData={setAllErrorsTs}
                url="https://codesandbox.io/s/react-hook-form-set-single-field-with-multiple-errors-ogf20"
              />
            </TabGroup>

            <h2 className={typographyStyles.subTitle}>Video</h2>
            <p>
              The following video explain <code>setError</code> API in detail.
            </p>

            <iframe
              width="100%"
              height="528"
              title="react hook form setError"
              src={"https://www.youtube.com/embed/raMqvE0YyIY"}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <StarRepo currentLanguage="en" />
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
