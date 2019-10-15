import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/Home"
import home from "../data/home";

const IndexPage = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="jp">
    <Seo
      title={home.title.en}
      description={home.description.en}
      location={location}
    />
    <Home location={location} defaultLang="jp" />
  </Layout>
)

export default IndexPage
