import * as React from "react"
import api from "../data/en/api"
import typographyStyles from "../styles/typography.module.css"
import Footer from "./Footer"
import { Menu } from "./Menu"
import containerStyles from "../styles/container.module.css"
import UseWatch from "./UseWatchContent"

export default function UseFieldArray({
  currentLanguage,
}: {
  currentLanguage: string
}) {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        useWatch
      </h1>
      <p className={typographyStyles.subHeading}>
        Subscribe to input update and re-render at hook level
      </p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <UseWatch currentLanguage={currentLanguage} api={api} />
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
