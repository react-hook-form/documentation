import api from "../data/api"
import typographyStyles from "../styles/typography.module.css"
import Footer from "./Footer"
import containerStyles from "../styles/container.module.css"
import UseWatch from "./UseWatchContent"
import StarRepo from "./StarRepo"
import { Menu, apiLinks } from "./Menu"

export default function UseFieldArray() {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        useWatch
      </h1>
      <p className={typographyStyles.subHeading}>
        React Hook for subscribing to input changes
      </p>

      <div className={containerStyles.wrapper}>
        <Menu pages={apiLinks} />

        <main>
          <section>
            <UseWatch api={api} />
          </section>

          <StarRepo />

          <Footer />
        </main>
      </div>
    </div>
  )
}
