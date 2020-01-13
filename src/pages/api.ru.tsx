import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ApiPage from "../components/ApiPage"
import api from "../data/en/api"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="ru">
    <Seo title={api.title} location={location} />
    <ApiPage defaultLang="ru" />
  </Layout>
)

export default Api
