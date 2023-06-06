import Footer from "../Footer"
import api from "../../data/api"
import typographyStyles from "../../styles/typography.module.css"
import containerStyles from "../../styles/container.module.css"
import TabGroup from "../TabGroup"
import CodeArea from "../CodeArea"
import setError from "../codeExamples/setError"
import setErrorTs from "../codeExamples/setErrorTs"
import setMultipleErrors from "../codeExamples/setMultipleErrors"
import setMultipleErrorsTs from "../codeExamples/setMultipleErrorsTs"
import setAllErrors from "../codeExamples/setAllErrors"
import setAllErrorsTs from "../codeExamples/setAllErrorsTs"
import StarRepo from "../StarRepo"
import serverError from "../codeExamples/serverError"
import { Menu, apiLinks } from "../Menu"

const SetError = () => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        setError
      </h1>
      <p className={typographyStyles.subHeading}>Manually set an input error</p>

      <div className={containerStyles.wrapper}>
        <Menu pages={apiLinks} />

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

            <h2 id="example" className={typographyStyles.subTitle}>
              Examples
            </h2>

            <TabGroup
              buttonLabels={[
                "Single Error",
                "Multiple Errors",
                "Single Field Errors",
                "Server Error",
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
                url="https://codesandbox.io/s/seterror-single-field-errors-79wcr9"
              />
              <CodeArea tsRawData={serverError} />
            </TabGroup>

            <h2 className={typographyStyles.subTitle}>Video</h2>
            <p>
              The following video explain <code>setError</code> API in detail.
            </p>

            <iframe
              width="100%"
              height="528"
              title="react hook form setError"
              src="https://www.youtube.com/embed/raMqvE0YyIY"
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

export default SetError
