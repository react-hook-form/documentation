import Footer from "../Footer"
import { Menu } from "../Menu"
import api from "../../data/api"
import typographyStyles from "../../styles/typography.module.css"
import containerStyles from "../../styles/container.module.css"
import TabGroup from "../TabGroup"
import CodeArea from "../CodeArea"
import resetCode from "../codeExamples/resetCode"
import resetCodeTs from "../codeExamples/resetCodeTs"
import resetController from "../codeExamples/resetController"
import resetControllerTs from "../codeExamples/resetControllerTs"
import submitReset from "../codeExamples/submitReset"
import fieldArrayReset from "../codeExamples/fieldArrayReset"
import StarRepo from "../StarRepo"

const Reset = () => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        reset
      </h1>
      <p className={typographyStyles.subHeading}>Reset form state and values</p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>
                reset:{" "}
                <span
                  className={typographyStyles.typeText}
                >{`<T>(values?: T | ResetAction<T>, options?: Record<string, boolean>) => void`}</span>
              </h2>
            </code>

            {api.reset.description}

            <h2 id="example" className={typographyStyles.subTitle}>
              Examples
            </h2>

            <TabGroup
              buttonLabels={[
                "Uncontrolled",
                "Controller",
                "Submit with reset",
                "Field Array",
              ]}
            >
              <CodeArea
                rawData={resetCode}
                tsRawData={resetCodeTs}
                url="https://codesandbox.io/s/react-hook-form-reset-v7-r7m5s"
                tsUrl="https://codesandbox.io/s/react-hook-form-reset-v7-ts-pu901"
              />
              <CodeArea
                rawData={resetController}
                tsRawData={resetControllerTs}
                url="https://codesandbox.io/s/react-hook-form-v7-controller-5h1q5"
                tsUrl="https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw"
              />
              <CodeArea
                rawData={submitReset}
                url="https://codesandbox.io/s/react-hook-form-handlesubmit-with-reset-xu1zu"
              />
              <CodeArea
                rawData={fieldArrayReset}
                url="https://codesandbox.io/s/react-hook-form-reset-usefieldarray-forked-kdh2s"
              />
            </TabGroup>
          </section>

          <h2 className={typographyStyles.subTitle}>Video</h2>
          <p>
            The following video explains in detail each different{" "}
            <code>formState</code> represents and functionality within the{" "}
            <code>reset</code> API.
          </p>

          <iframe
            width="100%"
            height="528"
            title="react hook form reset"
            src="https://www.youtube.com/embed/qmCLBjyPwVk"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <StarRepo />

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Reset
