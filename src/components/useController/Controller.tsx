import Footer from "../Footer"
import { Menu } from "../Menu"
import api from "../../data/en/api"
import * as typographyStyles from "../../styles/typography.module.css"
import * as containerStyles from "../../styles/container.module.css"
import ControllerContent from "../ControllerContent"
import StarRepo from "../StarRepo"

const Controller = ({ currentLanguage }) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        Controller
      </h1>
      <p className={typographyStyles.subHeading}>
        Wrapper component for controlled inputs
      </p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <ControllerContent currentLanguage={currentLanguage} api={api} />

            <StarRepo currentLanguage="en" />
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}

export default Controller
