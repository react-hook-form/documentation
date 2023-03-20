import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ResourcePageArticles from "../../components/ResourcePageArticles"

const ResourcesArticles = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="Articles" />
      <ResourcePageArticles defaultLang="en" />
    </Layout>
  )
}

export default ResourcesArticles
