import * as React from "react"
import Footer from "../Footer"
import { Menu } from "../Menu"
import api from "../../data/en/api"
import ApiRefTable from "../ApiRefTable"
import typographyStyles from "../../styles/typography.module.css"
import containerStyles from "../../styles/container.module.css"

export default ({ currentLanguage }) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        register
      </h1>
      <p className={typographyStyles.subHeading}>
        Register uncontrolled/controlled inputs
      </p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section id="registerRef">
            <code className={typographyStyles.codeHeading}>
              <h2>
                register:{" "}
                <span
                  className={typographyStyles.typeText}
                >{`(Ref, RegisterOptions?) => ({ onChange, onBlur, name, ref })`}</span>
              </h2>
            </code>

            <ApiRefTable api={api} currentLanguage={currentLanguage} />
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
