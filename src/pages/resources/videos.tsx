import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ResourcePageVideos from "../../components/ResourcePageVideos"

const ResourcesVideos = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="Resources" />
      <ResourcePageVideos defaultLang="en" />
    </Layout>
  )
}

export default ResourcesVideos
