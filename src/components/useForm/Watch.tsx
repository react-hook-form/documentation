import * as React from "react"
import Footer from "../Footer"
import { Menu } from "../Menu"
import api from "../../data/en/api"
import * as typographyStyles from "../../styles/typography.module.css"
import * as containerStyles from "../../styles/container.module.css"
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
          <ApiWatch currentLanguage={currentLanguage} api={api} />

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
