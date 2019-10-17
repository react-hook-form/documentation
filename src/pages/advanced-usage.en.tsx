import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AdvancedUsage from "../components/AdvancedUsage"
import advanced from "../data/advanced"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="en">
    <Seo title={advanced.title.en} location={location} />
    <AdvancedUsage defaultLang="en" />
  </Layout>
)

export default Api
