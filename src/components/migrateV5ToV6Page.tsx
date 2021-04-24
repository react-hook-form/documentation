import * as React from "react"
import { Animate } from "react-simple-animate"
import { useStateMachine } from "little-state-machine"
import Footer from "./Footer"
import migrateV5ToV6 from "../data/en/migrateV5ToV6"
import * as typographyStyles from "../styles/typography.module.css"
import * as containerStyles from "../styles/container.module.css"

const MigrateV5ToV6 = ({ defaultLang, content = migrateV5ToV6 }) => {
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
        <Animate
          play
          delay={0.1}
          start={{
            opacity: 0,
            transform: "translateY(20px)",
          }}
          end={{
            opacity: 1,
          }}
        >
          {content}
        </Animate>
      </div>

      <Footer currentLanguage={currentLanguage} />
    </div>
  )
}
export default MigrateV5ToV6
