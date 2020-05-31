import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ApiPage from "../../components/ApiPageV5"
import apiV5 from "../../data/V5/jp/api"
import api from "../../data/jp/api"

const ApiZh = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="jp">
    <Seo title={apiV5.title} location={location} />
    <ApiPage defaultLang="jp" api={api} />
  </Layout>
)

export default ApiZh
