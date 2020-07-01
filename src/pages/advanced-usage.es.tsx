import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AdvancedUsage from "../components/AdvancedPage"
import advanced from "../data/es/advanced"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="es">
    <Seo title={advanced.title} location={location} />
    <AdvancedUsage defaultLang="es" advanced={advanced} />
  </Layout>
)

export default Api
