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
  <Layout location={location}>
    <Seo
      title={home.title.zh}
      description={home.description.zh}
      location={location}
    />
    <Home location={location} />
  </Layout>
)

export default IndexPage
