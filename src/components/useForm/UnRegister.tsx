import * as React from "react"
import Footer from "../Footer"
import { Menu } from "../Menu"
import Popup from "../Popup"
import api from "../../data/en/api"
import typographyStyles from "../../styles/typography.module.css"
import containerStyles from "../../styles/container.module.css"
import CodeArea from "../CodeArea"
import unregisterCode from "../codeExamples/unregisterCode"
import unregisterCodeTs from "../codeExamples/unregisterCodeTs"

export default ({ currentLanguage }) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        unregister
      </h1>
      <p className={typographyStyles.subHeading}>
        Register uncontrolled/controlled inputs
      </p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section id="unregisterRef">
            <code className={typographyStyles.codeHeading}>
              <h2>
                unregister:{" "}
                <span
                  className={typographyStyles.typeText}
                >{`(name: string | string[]) => void`}</span>
              </h2>
            </code>

            {api.unregister.description}

            <CodeArea
              url="https://codesandbox.io/s/react-hook-form-unregister-v6-9nyzn"
              rawData={unregisterCode}
              tsUrl="https://codesandbox.io/s/react-hook-form-unregister-v6-ts-0ocnw"
              tsRawData={unregisterCodeTs}
            />
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
