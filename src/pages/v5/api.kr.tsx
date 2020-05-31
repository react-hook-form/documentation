import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ApiPage from "../../components/ApiPageV5"
import apiV5 from "../../data/V5/kr/api"
import api from "../../data/kr/api"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="kr">
    <Seo title={apiV5.title} location={location} />
    <ApiPage defaultLang="kr" api={api} />
  </Layout>
)

export default Api
