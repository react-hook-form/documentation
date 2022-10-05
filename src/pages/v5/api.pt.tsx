import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ApiPage from "../../components/V5/ApiPageV5"
import api from "../../data/V5/pt/api"

const ApiPT = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="pt">
    <Seo title={api.title} location={location} />
    <ApiPage defaultLang="pt" api={api} />
  </Layout>
)

export default ApiPT
