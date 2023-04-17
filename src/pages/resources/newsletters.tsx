import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ResourcePageNewsletter from "../../components/ResourcePageNewsletter"

const ResourcesNewsletter = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="Newsletter" />
      <ResourcePageNewsletter defaultLang="en" />
    </Layout>
  )
}

export default ResourcesNewsletter
