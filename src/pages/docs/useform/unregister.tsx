import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import StarRepo from "../../../components/StarRepo"
import containerStyles from "../../../styles/container.module.css"
import typographyStyles from "../../../styles/typography.module.css"
import UnregisterContent from "../../../content/unregister.mdx"
import Footer from "../../../components/Footer"
import { Menu, apiLinks } from "../../../components/Menu"

const Unregister = () => {
  return (
    <Layout>
      <Seo title="useForm - unregister" />
      <div className={containerStyles.container}>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          unregister
        </h1>
        <p className={typographyStyles.subHeading}>
          Unregister uncontrolled/controlled inputs
        </p>

        <div className={containerStyles.wrapper}>
          <Menu pages={apiLinks} />

          <main>
            <UnregisterContent />
            <StarRepo />

            <Footer />
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default Unregister
