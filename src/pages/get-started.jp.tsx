import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GetStartedMain from "../components/GetStartedPage"
import getStarted from "../data/getStarted";

const GetStarted = ({
  location,
}: {
  location: {
    search: string
    pathname: string
    hash: string
  }
}) => (
  <Layout location={location} defaultLang="jp">
    <Seo title={getStarted.title.jp} location={location} />
    <GetStartedMain location={location} defaultLang="jp" />
  </Layout>
)

export default GetStarted
