import Layout from "../components/layout"
import Seo from "../components/seo"
import api from "../data/api"
import ApiGallery from "../components/ApiGallery"

const Api = () => (
  <Layout>
    <Seo title={api.title} />
    <ApiGallery />
  </Layout>
)

export default Api
