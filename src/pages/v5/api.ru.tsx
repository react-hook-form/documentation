import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ApiPage from "../../components/ApiPage"
import apiV5 from "../../data/ru/api-v5"
import api from "../../data/ru/api"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="ru">
    <Seo title={apiV5.title} location={location} />
    <ApiPage defaultLang="ru" api={api} />
  </Layout>
)

export default Api
