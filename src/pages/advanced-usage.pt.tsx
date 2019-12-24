import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AdvancedUsage from "../components/AdvancedPage"
import advanced from "../data/pt/advanced"

const ApiPT = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="pt">
    <Seo title={advanced.title} location={location} />
    <AdvancedUsage defaultLang="pt" />
  </Layout>
)

export default ApiPT
