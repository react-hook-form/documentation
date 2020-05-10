import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import TsPage from "../components/tsPage"

export default ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="Migrate From V5 to V6" location={location} />
      <TsPage defaultLang="en" />
    </Layout>
  )
}
