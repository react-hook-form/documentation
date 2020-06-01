import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GetStartedPage from "../components/GetStartedPage"
import getStarted from "../data/es/getStarted"

const GetStarted = ({
  location,
}: {
  location: {
    search: string
    pathname: string
    hash: string
  }
}) => (
  <Layout location={location} defaultLang="es">
    <Seo title={getStarted.title} location={location} />
    <GetStartedPage
      location={location}
      defaultLang="es"
      getStarted={getStarted}
    />
  </Layout>
)

export default GetStarted
