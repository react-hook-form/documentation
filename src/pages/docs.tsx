import Layout from "../components/layout"
import Seo from "../components/seo"
import api from "../data/api"
import ApiGallery from "../components/ApiGallery"

const Api = () => (
  <Layout>
    <Seo
      title={api.title}
      description="Complete API reference for React Hook Form — hooks, methods, and TypeScript types."
    />
    <ApiGallery />
  </Layout>
)

export default Api
