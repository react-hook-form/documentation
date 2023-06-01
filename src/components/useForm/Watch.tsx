import Footer from "../Footer"
import { Menu } from "../Menu"
import api from "../../data/api"
import typographyStyles from "../../styles/typography.module.css"
import containerStyles from "../../styles/container.module.css"
import ApiWatch from "../ApiWatch"

const Watch = () => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        watch
      </h1>
      <p className={typographyStyles.subHeading}>Subscribe to input changes</p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <ApiWatch api={api} />

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Watch
