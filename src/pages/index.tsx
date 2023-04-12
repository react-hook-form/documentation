import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/HomePage"
import home from "../data/home"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title={home.title.en} description={home.description.en} />
      <Home />
    </Layout>
  )
}

export default IndexPage
