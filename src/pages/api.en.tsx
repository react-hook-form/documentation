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
  <Layout location={location}>
    <Seo title="API Documentation" location={location} />
    <ApiPage />
  </Layout>
)

export default Api
