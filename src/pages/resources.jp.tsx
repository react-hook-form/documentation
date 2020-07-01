import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ResourcePage from "../components/ResourcePage"

const ResourcesEn = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => {
  return (
    <Layout location={location} defaultLang="jp">
      <Seo title="リソース" location={location} />
      <ResourcePage defaultLang="jp" />
    </Layout>
  )
}
export default ResourcesEn
