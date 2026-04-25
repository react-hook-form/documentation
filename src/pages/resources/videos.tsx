import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ResourcePageVideos from "../../components/ResourcePageVideos"

const ResourcesVideos = () => {
  return (
    <Layout>
      <Seo
        title="Videos"
        description="Video tutorials and conference talks about React Hook Form."
      />
      <ResourcePageVideos />
    </Layout>
  )
}

export default ResourcesVideos
