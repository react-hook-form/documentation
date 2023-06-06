import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import Footer from "../../../components/Footer"
import StarRepo from "../../../components/StarRepo"
import containerStyles from "../../../styles/container.module.css"
import typographyStyles from "../../../styles/typography.module.css"
import ClearErrorsContent from "../../../content/clear-errors.mdx"
import { Menu, apiLinks } from "../../../components/Menu"

export default function ClearErrorsPage() {
  return (
    <Layout>
      <Seo title="useForm - ClearErrors" />
      <div className={containerStyles.container}>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          clearErrors
        </h1>
        <p className={typographyStyles.subHeading}>Clear form errors</p>

        <div className={containerStyles.wrapper}>
          <Menu pages={apiLinks} />

          <main>
            <ClearErrorsContent />
            <StarRepo />

            <Footer />
          </main>
        </div>
      </div>
    </Layout>
  )
}
