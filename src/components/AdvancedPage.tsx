import Footer from "./Footer"
import StarRepo from "./StarRepo"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import AdvancedContent, { meta } from "../content/advanced.mdx"
import { Menu, advancedLinks } from "./Menu"

function Advanced() {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        {meta.title}
      </h1>
      <p className={typographyStyles.subHeading}>{meta.description}</p>

      <div className={containerStyles.wrapper}>
        <Menu pages={advancedLinks} />

        <main>
          <AdvancedContent />
          <StarRepo />

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Advanced
