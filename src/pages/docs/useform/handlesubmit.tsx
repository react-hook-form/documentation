import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import containerStyles from "../../../styles/container.module.css"
import typographyStyles from "../../../styles/typography.module.css"
import Footer from "../../../components/Footer"
import { Menu } from "../../../components/Menu"
import StarRepo from "../../../components/StarRepo"
import HandleSubmitContent from "../../../content/handle-submit.mdx"

const Handlesubmit = () => {
  return (
    <Layout>
      <Seo title="useForm - handleSubmit" />
      <div className={containerStyles.container}>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          handleSubmit
        </h1>
        <p className={typographyStyles.subHeading}>
          Ready to send to the server
        </p>

        <div className={containerStyles.wrapper}>
          <Menu />

          <main>
            <HandleSubmitContent />

            <StarRepo />

            <Footer />
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default Handlesubmit
