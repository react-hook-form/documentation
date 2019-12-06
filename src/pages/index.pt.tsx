import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/HomePage"
import home from "../data/home"

const IndexPagePT = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="pt">
    <Seo
      title={home.title.pt}
      description={home.description.pt}
      location={location}
    />
    <Home location={location} defaultLang="pt" />
  </Layout>
)

export default IndexPagePT
