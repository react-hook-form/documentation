import * as React from "react"
import api from "../data/en/api"
import * as typographyStyles from "../styles/typography.module.css"
import Footer from "./Footer"
import { Menu } from "./Menu"
import * as containerStyles from "../styles/container.module.css"
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
        React Hook for subscribe to input changes
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
