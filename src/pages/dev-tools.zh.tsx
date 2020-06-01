import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DevTools from "../components/DevTools"
import api from "../data/en/api"
import content from "../data/zh/devtools"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="zh">
    <Seo title={api.title} location={location} />
    <DevTools defaultLang="zh" content={content} />
  </Layout>
)

export default Api
