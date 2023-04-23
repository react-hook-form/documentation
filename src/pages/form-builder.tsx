import Layout from "../components/layout"
import Seo from "../components/seo"
import BuilderPage from "../components/BuilderPage"
import builder from "../data/builder"

const Api = () => {
  return (
    <Layout>
      <Seo title={builder.title} description={builder.description} />
      <BuilderPage isStatic />
    </Layout>
  )
}

export default Api
