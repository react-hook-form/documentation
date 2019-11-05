import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ApiPage from "../components/ApiPage"
import api from "../data/api"

const ApiZh = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang={"zh"}>
    <Seo title={api.title.zh}  location={location} />
    <ApiPage defaultLang="zh" />
  </Layout>
)

export default ApiZh
