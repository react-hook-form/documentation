import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GetStartedPage from "../components/GetStartedPage"
import getStarted from "../data/getStarted"

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
    <Seo title={getStarted.title.en} location={location} />
    <GetStartedPage location={location} defaultLang="en" />
  </Layout>
)

export default GetStarted
