import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GetStartedPage from "../components/GetStartedPage"
import getStarted from "../data/pt/getStarted"

const GetStartedPT = ({
  location,
}: {
  location: {
    search: string
    pathname: string
    hash: string
  }
}) => (
  <Layout location={location} defaultLang="pt">
    <Seo title={getStarted.title} location={location} />
    <GetStartedPage
      location={location}
      defaultLang="pt"
      getStarted={getStarted}
    />
  </Layout>
)

export default GetStartedPT
