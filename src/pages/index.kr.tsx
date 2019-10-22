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
  <Layout location={location} defaultLang="kr">
    <Seo
      title={home.title.kr}
      description={home.description.kr}
      location={location}
    />
    <Home location={location} defaultLang="kr" />
  </Layout>
)

export default IndexPage
