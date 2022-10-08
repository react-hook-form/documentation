import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import TsPage from "../components/tsPage"

export default ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="TS Support" />
      <TsPage defaultLang="en" />
    </Layout>
  )
}
