import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ApiPage from "../../components/ApiPage"
import api from "../../data/es/api-v5"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="en">
    <Seo title={api.title} location={location} />
    <ApiPage defaultLang="en" />
  </Layout>
)

export default Api
