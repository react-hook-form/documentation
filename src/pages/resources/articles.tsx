import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ResourcePageArticles from "../../components/ResourcePageArticles"

const ResourcesArticles = () => {
  return (
    <Layout>
      <Seo
        title="Articles"
        description="Community articles and tutorials about React Hook Form."
      />
      <ResourcePageArticles />
    </Layout>
  )
}

export default ResourcesArticles
