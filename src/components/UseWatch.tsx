import api from "../data/en/api"
import typographyStyles from "../styles/typography.module.css"
import Footer from "./Footer"
import { Menu } from "./Menu"
import containerStyles from "../styles/container.module.css"
import UseWatch from "./UseWatchContent"
import StarRepo from "./StarRepo"

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
        React Hook for subscribing to input changes
      </p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <UseWatch currentLanguage={currentLanguage} api={api} />
          </section>

          <StarRepo />

          <Footer />
        </main>
      </div>
    </div>
  )
}
