import api from "../data/api"
import typographyStyles from "../styles/typography.module.css"
import FormContext from "./FormContext"
import Footer from "./Footer"
import { Menu } from "./Menu"
import containerStyles from "../styles/container.module.css"
import StarRepo from "./StarRepo"

export default function UseFieldArray() {
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
          <FormContext api={api} />

          <StarRepo />

          <Footer />
        </main>
      </div>
    </div>
  )
}
