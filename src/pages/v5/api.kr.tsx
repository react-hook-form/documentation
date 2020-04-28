import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ApiPage from "../../components/ApiPage"
import api from "../../data/kr/api-v5"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="kr">
    <Seo title={api.title} location={location} />
    <ApiPage defaultLang="kr" />
  </Layout>
)

export default Api
