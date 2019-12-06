import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ResourcePage from "../components/ResourcePage"

const ResourcesPT = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => {
  return (
    <Layout location={location} defaultLang="pt">
      <Seo title="Resources" location={location} />
      <ResourcePage defaultLang="pt" />
    </Layout>
  )
}

export default ResourcesPT
