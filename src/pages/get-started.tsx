import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GetStartedPage from "../components/GetStartedPage"
import getStarted from "../data/en/getStarted"

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
    <Seo title={getStarted.title} />
    <GetStartedPage
      location={location}
      defaultLang="en"
      getStarted={getStarted}
    />
  </Layout>
)

export default GetStarted
