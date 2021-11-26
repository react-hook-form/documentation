import * as React from "react"
import Footer from "../Footer"
import { Menu } from "../Menu"
import api from "../../data/en/api"
import * as typographyStyles from "../../styles/typography.module.css"
import * as containerStyles from "../../styles/container.module.css"
import CodeArea from "../CodeArea"
import trigger from "../codeExamples/trigger"
import triggerTs from "../codeExamples/triggerTs"

export default ({ currentLanguage }) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        trigger
      </h1>
      <p className={typographyStyles.subHeading}>
        Trigger validation across the form
      </p>

      <div className={containerStyles.wrapper}>
        <Menu />

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
              src={"https://www.youtube.com/embed/-bcyJCDjksE"}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
