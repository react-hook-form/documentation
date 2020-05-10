import * as React from "react"
import { useStateMachine } from "little-state-machine"
import Footer from "./Footer"
import migrateV5ToV6 from "../data/en/migrateV5ToV6"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"

const MigrateV5ToV6 = ({ defaultLang }) => {
  const {
    state: { language },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }

  return (
    <div className={containerStyles.container}>
      <section>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          Migration Guide
        </h1>
        <p className={typographyStyles.subHeading}>V5 to V6</p>
      </section>

      <div
        style={{
          maxWidth: "1024px",
          margin: "0 auto",
        }}
      >
        {migrateV5ToV6}

        <Footer currentLanguage={currentLanguage} />
      </div>
    </div>
  )
}
export default MigrateV5ToV6
