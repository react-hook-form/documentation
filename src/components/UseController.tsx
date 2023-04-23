import api from "../data/api"
import * as typographyStyles from "../styles/typography.module.css"
import Footer from "./Footer"
import { Menu } from "./Menu"
import * as containerStyles from "../styles/container.module.css"
import UseControllerContent from "./UseControllerContent"
import StarRepo from "./StarRepo"

export default function UseFieldArray() {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        useController
      </h1>
      <p className={typographyStyles.subHeading}>
        React hooks for controlled component
      </p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <UseControllerContent api={api} />

            <StarRepo />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}
