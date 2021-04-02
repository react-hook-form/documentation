import * as React from "react"
import { useStateMachine } from "little-state-machine"
import Footer from "../Footer"
import { Menu } from "../Menu"
import Popup from "../Popup"
import api from "../../data/en/api"
import typographyStyles from "../../styles/typography.module.css"
import containerStyles from "../../styles/container.module.css"
import ApiWatch from "../ApiWatch"

export default ({ currentLanguage }) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        watch
      </h1>
      <p className={typographyStyles.subHeading}>Subscribe to input changes</p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <ApiWatch currentLanguage={currentLanguage} api={api} />
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
