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
  <Layout location={location} defaultLang="kr">
    <Seo title={getStarted.title.kr} location={location} />
    <GetStartedPage location={location} defaultLang="kr" />
  </Layout>
)

export default GetStarted
