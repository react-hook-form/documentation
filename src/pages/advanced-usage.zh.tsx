import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AdvancedUsage from "../components/AdvancedPage"
import advanced from "../data/zh/advanced"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang={"zh"}>
    <Seo title={advanced.title} location={location} />
    <AdvancedUsage defaultLang="zh" />
  </Layout>
)

export default Api
