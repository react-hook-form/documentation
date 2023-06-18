import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import ResetFieldContent from "../../../content/reset-field.mdx"
import containerStyles from "../../../styles/container.module.css"
import typographyStyles from "../../../styles/typography.module.css"
import Footer from "../../../components/Footer"
import StarRepo from "../../../components/StarRepo"
import { Menu, apiLinks } from "../../../components/Menu"

const ResetField = () => {
  return (
    <Layout>
      <Seo title="useForm - resetField" />
      <div className={containerStyles.container}>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          resetField
        </h1>
        <p className={typographyStyles.subHeading}>
          Reset field state and value
        </p>

        <div className={containerStyles.wrapper}>
          <Menu pages={apiLinks} />

          <main>
            <ResetFieldContent />

            <StarRepo />

            <Footer />
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default ResetField
