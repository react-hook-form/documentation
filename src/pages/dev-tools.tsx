import Layout from "../components/layout"
import Seo from "../components/seo"
import DevTools from "../components/DevTools"
import api from "../data/api"

const Api = () => (
  <Layout>
    <Seo title={api.title} />
    <DevTools />
  </Layout>
)

export default Api
