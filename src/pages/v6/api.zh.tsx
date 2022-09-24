import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ApiPage from "../../components/v6/ApiPageV6"
import api from "../../data/V6/en/api"

const ApiZh = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="zh">
    <Seo title={api.title} location={location} />
    <ApiPage defaultLang="zh" api={api} />
  </Layout>
)

export default ApiZh
