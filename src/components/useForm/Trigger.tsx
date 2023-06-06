import Footer from "../Footer"
import api from "../../data/api"
import typographyStyles from "../../styles/typography.module.css"
import containerStyles from "../../styles/container.module.css"
import CodeArea from "../CodeArea"
import trigger from "../codeExamples/trigger"
import triggerTs from "../codeExamples/triggerTs"
import StarRepo from "../StarRepo"
import { Menu, apiLinks } from "../Menu"

const Trigger = () => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        trigger
      </h1>
      <p className={typographyStyles.subHeading}>
        Trigger validation across the form
      </p>

      <div className={containerStyles.wrapper}>
        <Menu pages={apiLinks} />

        <main>
          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>
                trigger:{" "}
                <span className={typographyStyles.typeText}>
                  {`(name?: string | string[]) => Promise<boolean>`}
                </span>
              </h2>
            </code>
            {api.trigger.description}

            <h2 id="rules" className={typographyStyles.rulesTitle}>
              Rules
            </h2>

            <p>
              Isolate render optimisation only applicable for targeting a single
              field name with <code>string</code> as payload, when supplied with{" "}
              <code>array</code> and <code>undefined</code> to trigger will
              re-render the entire formState.
            </p>

            <h2 id="example" className={typographyStyles.subTitle}>
              Examples
            </h2>

            <CodeArea
              rawData={trigger}
              url="https://codesandbox.io/s/react-hook-form-v6-triggervalidation-forked-8w9tn"
              tsRawData={triggerTs}
              tsUrl="https://codesandbox.io/s/react-hook-form-v6-ts-triggervalidation-forked-xs7hl"
            />

            <h2 className={typographyStyles.subTitle}>Video</h2>
            <p>
              The following video explain <code>trigger</code> API in detail.
            </p>

            <iframe
              width="100%"
              height="528"
              title="react hook form trigger API"
              src="https://www.youtube.com/embed/-bcyJCDjksE"
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

export default Trigger
