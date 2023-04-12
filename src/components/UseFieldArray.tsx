import api from "../data/en/api"
import typographyStyles from "../styles/typography.module.css"
import Footer from "./Footer"
import { Menu } from "./Menu"
import containerStyles from "../styles/container.module.css"
import UseFieldArrayContent from "./UseFieldArrayContent"
import StarRepo from "./StarRepo"

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

            <StarRepo />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}
