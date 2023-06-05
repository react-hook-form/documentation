import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import ResetFieldContent from "../../../content/reset-field.mdx"
import containerStyles from "../../../styles/container.module.css"
import typographyStyles from "../../../styles/typography.module.css"
import Footer from "../../../components/Footer"
import { Menu } from "../../../components/Menu"
import StarRepo from "../../../components/StarRepo"

const Resetfield = () => {
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
          <Menu />

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

export default Resetfield
