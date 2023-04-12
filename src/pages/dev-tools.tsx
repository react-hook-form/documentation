import Layout from "../components/layout"
import Seo from "../components/seo"
import DevTools from "../components/DevTools"
import api from "../data/en/api"
import content from "../data/en/devtools"

const Api = () => (
  <Layout>
    <Seo title={api.title} />
    <DevTools content={content} />
  </Layout>
)

export default Api
