import * as React from "react"
import Footer from "../Footer"
import { Menu } from "../Menu"
import api from "../../data/en/api"
import CodeArea from "../CodeArea"
import setFocus from "../codeExamples/setFocus"
import setFocusTs from "../codeExamples/setFocusTs"
import * as typographyStyles from "../../styles/typography.module.css"
import * as containerStyles from "../../styles/container.module.css"

export default ({ currentLanguage }) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        setFocus
      </h1>
      <p className={typographyStyles.subHeading}>Manually set an input focus</p>

      <h2 className={typographyStyles.subTitle}>Rules</h2>

      <p>
        This API will invoke{" "}
        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/focus"
        >
          focus
        </a>{" "}
        method and it's limited to web only.
      </p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>
                setFocus:
                <span className={typographyStyles.typeText}>
                  {`(name: string) => void`}
                </span>
              </h2>
            </code>

            {api.setFocus.description}

            <CodeArea
              rawData={setFocus}
              tsRawData={setFocusTs}
              url="https://codesandbox.io/s/setfocus-rolus"
              tsUrl="https://codesandbox.io/s/setfocus-rolus"
            />
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
