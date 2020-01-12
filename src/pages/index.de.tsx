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
  <Layout location={location} defaultLang="de">
    <Seo
      title={home.title.de}
      description={home.description.de}
      location={location}
    />
    <Home location={location} defaultLang="de" />
  </Layout>
)

export default IndexPage
