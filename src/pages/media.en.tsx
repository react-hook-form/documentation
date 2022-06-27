import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import * as containerStyle from "../styles/container.module.css"
import * as styles from "../components/ResourcePage.module.css"
import * as typographyStyles from "../styles/typography.module.css"
import * as mediaStyles from "./media.module.css"
import Footer from "../components/Footer"
import logoPng from "../images/logo/react-hook-form-logo-only.png"
import logoSvg from "../images/logo/react-hook-form-logo-only.svg"
import logoPngBg from "../images/logo/react-hook-form-logo.png"
import logoSvgBg from "../images/logo/react-hook-form-logo.svg"
import logoGreyPng from "../images/logo/react-hook-form-logo-only-grey.png"
import logoGreySvg from "../images/logo/react-hook-form-logo-only-grey.svg"
import logoGreyPngBg from "../images/logo/react-hook-form-logo-grey.png"
import logoGreySvgBg from "../images/logo/react-hook-form-logo-grey.svg"

export default ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="About us" location={location} />
      <div className={containerStyle.container}>
        <main className={styles.root}>
          <h1 className={typographyStyles.headingWithTopMargin} id="main">
            Media
          </h1>
          <p className={typographyStyles.subHeading}>
            THe following are assets that represent React Hook Form.
          </p>

          <div className={mediaStyles.media}>
            <div>
              <img src={logoPngBg} alt={"logo only"} />
              <p>PNG</p>
            </div>
            <div>
              <img src={logoSvgBg} alt={"logo only"} />
              <p>SVG</p>
            </div>

            <div>
              <img
                src={logoPng}
                alt={"logo only"}
                className={mediaStyles.logo}
              />
              <p>PNG</p>
            </div>
            <div>
              <img
                src={logoSvg}
                alt={"logo only"}
                className={mediaStyles.logo}
              />
              <p>SVG</p>
            </div>

            <div>
              <img src={logoGreyPngBg} alt={"logo only"} />
              <p>PNG</p>
            </div>
            <div>
              <img src={logoGreySvgBg} alt={"logo only"} />
              <p>SVG</p>
            </div>

            <div>
              <img
                src={logoGreyPng}
                alt={"logo only"}
                className={mediaStyles.logo}
              />
              <p>PNG</p>
            </div>
            <div>
              <img
                src={logoGreySvg}
                alt={"logo only"}
                className={mediaStyles.logo}
              />
              <p>SVG</p>
            </div>
          </div>
        </main>

        <Footer currentLanguage="en" />
      </div>
    </Layout>
  )
}
