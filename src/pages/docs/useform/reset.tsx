import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import Footer from "../../../components/Footer"
import { Menu } from "../../../components/Menu"
import StarRepo from "../../../components/StarRepo"
import containerStyles from "../../../styles/container.module.css"
import typographyStyles from "../../../styles/typography.module.css"
import ResetContent from "../../../content/reset.mdx"

const ResetComponent = () => {
  return (
    <Layout>
      <Seo title="useForm - reset" />
      <div className={containerStyles.container}>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          reset
        </h1>
        <p className={typographyStyles.subHeading}>
          Reset form state and values
        </p>

        <div className={containerStyles.wrapper}>
          <Menu />

          <main>
            <ResetContent />
            <StarRepo />

            <Footer />
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default ResetComponent
