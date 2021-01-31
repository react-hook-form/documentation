import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ApiPage from "../components/v6/ApiPageV6"
import api from "../data/kr/api"

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
    <ApiPage defaultLang="kr" api={api} />
  </Layout>
)

export default Api
