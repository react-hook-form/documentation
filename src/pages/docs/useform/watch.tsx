import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import containerStyles from "../../../styles/container.module.css"
import typographyStyles from "../../../styles/typography.module.css"
import WatchContent from "../../../content/watch.mdx"
import Footer from "../../../components/Footer"
import { Menu, apiLinks } from "../../../components/Menu"

const WatchComponent = () => {
  return (
    <Layout>
      <Seo title="useForm - watch" />
      <div className={containerStyles.container}>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          watch
        </h1>
        <p className={typographyStyles.subHeading}>
          Subscribe to input changes
        </p>

        <div className={containerStyles.wrapper}>
          <Menu pages={apiLinks} />

          <main>
            <WatchContent />

            <Footer />
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default WatchComponent
