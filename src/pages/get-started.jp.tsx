import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GetStartedMain from "../components/GetStartedPage"
import getStarted from "../data/jp/getStarted"

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
    <Seo title={getStarted.title} location={location} />
    <GetStartedMain
      location={location}
      defaultLang="jp"
      getStarted={getStarted}
    />
  </Layout>
)

export default GetStarted
