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
  <Layout location={location} defaultLang="zh">
    <Seo
      title={home.title.zh}
      description={home.description.zh}
      location={location}
    />
    <Home location={location} defaultLang={"zh"} />
  </Layout>
)

export default IndexPage
