import Seo from "../../components/seo"
import Layout from "../../components/layout"
import Footer from "../../components/Footer"
import StarRepo from "../../components/StarRepo"
import containerStyles from "../../styles/container.module.css"
import typographyStyles from "../../styles/typography.module.css"
import UseFormContextContent from "../../content/use-form-context.mdx"
import { Menu, apiLinks } from "../../components/Menu"

const UseFormContext = () => {
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
          <Menu pages={apiLinks} />

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

export default UseFormContext
