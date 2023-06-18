import api from "../data/api"
import typographyStyles from "../styles/typography.module.css"
import Footer from "./Footer"
import containerStyles from "../styles/container.module.css"
import UseFieldArrayContent from "./UseFieldArrayContent"
import StarRepo from "./StarRepo"
import { Menu, apiLinks } from "./Menu"

export default function UseFieldArray() {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        useFieldArray
      </h1>
      <p className={typographyStyles.subHeading}>React hooks for Field Array</p>

      <div className={containerStyles.wrapper}>
        <Menu pages={apiLinks} />

        <main>
          <section>
            <UseFieldArrayContent api={api} />

            <StarRepo />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}
