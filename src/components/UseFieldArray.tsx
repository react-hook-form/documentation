import * as React from "react"
import api from "../data/en/api"
import typographyStyles from "../styles/typography.module.css"
import Footer from "./Footer"
import { Menu } from "./Menu"
import containerStyles from "../styles/container.module.css"
import UseFieldArrayContent from "./UseFieldArrayContent"

export default function UseFieldArray({
  currentLanguage,
}: {
  currentLanguage: string
}) {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        useFieldArray
      </h1>
      <p className={typographyStyles.subHeading}>React hooks for Field Array</p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <UseFieldArrayContent currentLanguage={currentLanguage} api={api} />
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
