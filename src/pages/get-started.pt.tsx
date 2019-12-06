import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GetStartedPage from "../components/GetStartedPage"
import getStarted from "../data/getStarted"

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
    <Seo title={getStarted.title.pt} location={location} />
    <GetStartedPage location={location} defaultLang="pt" />
  </Layout>
)

export default GetStartedPT
