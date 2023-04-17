import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ResourcePageBindings from "../../components/ResourcePageBindings"

const ResourcesBindings = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="3rd-party-bindings" />
      <ResourcePageBindings defaultLang="en" />
    </Layout>
  )
}

export default ResourcesBindings
