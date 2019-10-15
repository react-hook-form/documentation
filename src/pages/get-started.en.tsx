import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GetStartedPage from "../components/GetStartedPage"

const GetStarted = ({
  location,
}: {
  location: {
    search: string
    pathname: string
    hash: string
  }
}) => (
  <Layout location={location} defaultLang="en">
    <Seo title="Get Started" location={location} />
    <GetStartedPage location={location} />
  </Layout>
)

export default GetStarted
