import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GetStartedMain from "../components/GetStartedPage"

const GetStarted = ({
  location,
}: {
  location: {
    search: string
    pathname: string
    hash: string
  }
}) => (
  <Layout location={location} defaultLang={"zh"}>
    <Seo title="Get Started" location={location} />
    <GetStartedMain location={location} />
  </Layout>
)

export default GetStarted
