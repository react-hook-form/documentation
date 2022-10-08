import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DevTools from "../components/DevTools"
import api from "../data/en/api"
import content from "../data/en/devtools"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="en">
    <Seo title={api.title} />
    <DevTools defaultLang="en" content={content} />
  </Layout>
)

export default Api
