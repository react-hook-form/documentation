import api from "../data/api"
import * as typographyStyles from "../styles/typography.module.css"
import Footer from "./Footer"
import { Menu } from "./Menu"
import * as containerStyles from "../styles/container.module.css"
import UseFieldArrayContent from "./UseFieldArrayContent"
import StarRepo from "./StarRepo"

export default function UseFieldArray() {
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
            <UseFieldArrayContent api={api} />

            <StarRepo />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}
