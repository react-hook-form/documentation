import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AdvancedUsage from "../components/AdvancedUsage"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location}>
    <Seo title="Advanced Usage" />
    <AdvancedUsage />
  </Layout>
)

export default Api
