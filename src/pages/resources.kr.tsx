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
    <Layout location={location} defaultLang="kr">
      <Seo title="외부 리소스" location={location} />
      <ResourcePage defaultLang="kr" />
    </Layout>
  )
}
export default ResourcesEn
