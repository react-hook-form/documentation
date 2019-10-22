import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ApiPage from "../components/ApiPage"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="kr">
    <Seo title="API Documentation" location={location} />
    <ApiPage defaultLang="kr" />
  </Layout>
)

export default Api
