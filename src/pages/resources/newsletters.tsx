import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ResourcePageNewsletter from "../../components/ResourcePageNewsletter"

const ResourcesNewsletter = () => {
  return (
    <Layout>
      <Seo title="Newsletter" description="Stay up to date with React Hook Form news and releases." />
      <ResourcePageNewsletter />
    </Layout>
  )
}

export default ResourcesNewsletter
