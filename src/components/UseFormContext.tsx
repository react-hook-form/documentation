import * as React from "react"
import api from "../data/en/api"
import * as typographyStyles from "../styles/typography.module.css"
import FormContext from "./FormContext"
import Footer from "./Footer"
import { Menu } from "./Menu"
import * as containerStyles from "../styles/container.module.css"

export default function UseFieldArray({
  currentLanguage,
}: {
  currentLanguage: string
}) {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        useFormContext
      </h1>
      <p className={typographyStyles.subHeading}>
        React Context API for hook form
      </p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <FormContext currentLanguage={currentLanguage} api={api} />

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
