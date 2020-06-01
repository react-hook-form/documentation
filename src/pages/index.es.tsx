import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/HomePage"
import home from "../data/home"

const IndexPage = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="es">
    <Seo
      title={home.title.es}
      description={home.description.es}
      location={location}
    />
    <Home location={location} defaultLang="es" />
  </Layout>
)

export default IndexPage
