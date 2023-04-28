import Seo from "../components/seo"
import Layout from "../components/layout"
import * as containerStyle from "../styles/container.module.css"
import * as styles from "../components/ResourcePage.module.css"
import * as typographyStyles from "../styles/typography.module.css"
import * as mediaStyles from "./media.module.css"
import Footer from "../components/Footer"

const Media = () => {
  return (
    <Layout>
      <Seo title="About us" />
      <div className={containerStyle.container}>
        <main className={styles.root}>
          <h1 className={typographyStyles.headingWithTopMargin} id="main">
            Media
          </h1>
          <p className={typographyStyles.subHeading}>
            The following are assets that represent React Hook Form.
          </p>

          <div className={mediaStyles.media}>
            <div>
              <img
                src="/images/logo/react-hook-form-logo-only.png"
                alt="logo only"
              />
              <p>PNG</p>
            </div>
            <div>
              <img
                src="/images/logo/react-hook-form-logo-only.svg"
                alt="logo only"
              />
              <p>SVG</p>
            </div>

            <div>
              <img
                src="/images/logo/react-hook-form-logo-only.png"
                alt="logo only"
                className={mediaStyles.logo}
              />
              <p>PNG</p>
            </div>
            <div>
              <img
                src="/images/logo/react-hook-form-logo-only.svg"
                alt="logo only"
                className={mediaStyles.logo}
              />
              <p>SVG</p>
            </div>

            <div>
              <img
                src="/images/logo/react-hook-form-logo-grey.png"
                alt="logo only"
              />
              <p>PNG</p>
            </div>
            <div>
              <img
                src="/images/logo/react-hook-form-logo-grey.svg"
                alt="logo only"
              />
              <p>SVG</p>
            </div>

            <div>
              <img
                src="/images/logo/react-hook-form-logo-only-grey.png"
                alt="logo only"
                className={mediaStyles.logo}
              />
              <p>PNG</p>
            </div>
            <div>
              <img
                src="/images/logo/react-hook-form-logo-only-grey.svg"
                alt="logo only"
                className={mediaStyles.logo}
              />
              <p>SVG</p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </Layout>
  )
}

export default Media
