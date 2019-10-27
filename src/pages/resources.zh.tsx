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
    <Layout location={location} defaultLang="zh">
      <Seo title="资源" location={location} />
      <ResourcePage defaultLang="zh" />
    </Layout>
  )
}
export default ResourcesEn
