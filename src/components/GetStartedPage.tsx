import LearnMore from "../components/learnMore"
import Footer from "../components/Footer"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import GetStartedContent, { meta } from "../content/get-started.mdx"
import { Menu, getStartedLinks } from "./Menu"

const GetStartedPage = () => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        {meta.title}
      </h1>
      <p className={typographyStyles.subHeading}>{meta.description}</p>

      <div className={containerStyles.wrapper}>
        <Menu pages={getStartedLinks} />

        <main>
          <GetStartedContent />

          <LearnMore />

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default GetStartedPage
