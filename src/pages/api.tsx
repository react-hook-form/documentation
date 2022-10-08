import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import api from "../data/en/api"
import ApiGallery from "../components/ApiGallery"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="en">
    <Seo title={api.title} location={location} />
    <ApiGallery defaultLang="en" />
  </Layout>
)

export default Api
