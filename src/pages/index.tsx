import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/HomePage"
import home from "../data/home"

const IndexPage = () => (
  <Layout>
    <Seo title={home.title} description={home.description} />
    <Home />
  </Layout>
)

export default IndexPage
