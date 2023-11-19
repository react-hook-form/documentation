import Layout from "../components/layout"
import Seo from "../components/seo"
import DevTools from "../components/DevTools"
import content from "../data/devtools"

const Api = () => (
  <Layout>
    <Seo title="API Documentation" />
    <DevTools content={content} />
  </Layout>
)

export default Api
