import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/Home"

const IndexPage = ({ location }: { location: string }) => (
  <Layout location={location}>
    <Seo
      title="Home"
      description="React hook for form validation without the hassle"
    />
    <Home location={location} />
  </Layout>
)

export default IndexPage
