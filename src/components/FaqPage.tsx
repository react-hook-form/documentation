import Footer from "../components/Footer"
import StarRepo from "../components/StarRepo"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import FAQContent, { meta } from "../content/faq.mdx"
import { Menu, faqLinks } from "./Menu"

const Faq = () => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        {meta.title}
      </h1>
      <p className={typographyStyles.subHeading}>{meta.description}</p>

      <div className={containerStyles.wrapper}>
        <Menu pages={faqLinks} />

        <main>
          <FAQContent />

          <StarRepo />

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Faq
