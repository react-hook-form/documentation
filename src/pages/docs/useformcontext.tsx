import Seo from "../../components/seo"
import Layout from "../../components/layout"
import Footer from "../../components/Footer"
import { Menu } from "../../components/Menu"
import StarRepo from "../../components/StarRepo"
import containerStyles from "../../styles/container.module.css"
import typographyStyles from "../../styles/typography.module.css"
import UseFormContextContent from "../../content/use-form-context.mdx"

const Useformcontext = () => {
  return (
    <Layout>
      <Seo title="useFormContext" />
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
            <UseFormContextContent />
            <StarRepo />

            <Footer />
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default Useformcontext
