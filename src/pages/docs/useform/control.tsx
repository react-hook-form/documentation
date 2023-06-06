import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import Footer from "../../../components/Footer"
import StarRepo from "../../../components/StarRepo"
import containerStyles from "../../../styles/container.module.css"
import typographyStyles from "../../../styles/typography.module.css"
import ControlContent from "../../../content/control.mdx"
import { Menu, apiLinks } from "../../../components/Menu"

export default function ControlPage() {
  return (
    <Layout>
      <Seo title="useForm - control" />
      <div className={containerStyles.container}>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          control
        </h1>
        <p className={typographyStyles.subHeading}>Take control of the form</p>

        <div className={containerStyles.wrapper}>
          <Menu pages={apiLinks} />

          <main>
            <ControlContent />
            <StarRepo />

            <Footer />
          </main>
        </div>
      </div>
    </Layout>
  )
}
