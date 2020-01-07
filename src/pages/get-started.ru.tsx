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
  <Layout location={location} defaultLang="ru">
    <Seo title={getStarted.title} location={location} />
    <GetStartedPage location={location} defaultLang="ru" />
  </Layout>
)

export default GetStarted
