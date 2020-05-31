import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ApiPage from "../../components/ApiPage"
import apiV5 from "../../data/zh/api-v5"
import api from "../../data/zh/api"

const ApiZh = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang={"zh"}>
    <Seo title={apiV5.title} location={location} />
    <ApiPage defaultLang="zh" api={api} />
  </Layout>
)

export default ApiZh
