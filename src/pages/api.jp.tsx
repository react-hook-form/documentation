import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ApiPage from "../components/ApiPage"

const ApiZh = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="jp">
    <Seo title="API ドキュメンテーション" location={location} />
    <ApiPage defaultLang="jp" />
  </Layout>
)

export default ApiZh
