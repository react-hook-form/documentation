import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import StarRepo from "./StarRepo"
import Footer from "./Footer"
import TSContent, { meta } from "../content/ts.mdx"
import { Menu, tsLinks } from "./Menu"

const TsPage = () => {
  return (
    <div className={containerStyles.container}>
      <section>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          {meta.title}
        </h1>
        <p className={typographyStyles.subHeading}>{meta.description}</p>
      </section>

      <div className={containerStyles.wrapper}>
        <Menu pages={tsLinks} />

        <main>
          <TSContent />

          <StarRepo />

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default TsPage
