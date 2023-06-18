import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import containerStyles from "../../../styles/container.module.css"
import typographyStyles from "../../../styles/typography.module.css"
import Footer from "../../../components/Footer"
import StarRepo from "../../../components/StarRepo"
import SetFocusContent from "../../../content/set-focus.mdx"
import { Menu, apiLinks } from "../../../components/Menu"

const Setfocus = () => {
  return (
    <Layout>
      <Seo title="useForm - setFocus" />
      <div className={containerStyles.container}>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          setFocus
        </h1>
        <p className={typographyStyles.subHeading}>
          Manually set an input focus
        </p>

        <div className={containerStyles.wrapper}>
          <Menu pages={apiLinks} />

          <main>
            <SetFocusContent />

            <StarRepo />

            <Footer />
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default Setfocus
