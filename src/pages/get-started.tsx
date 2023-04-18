import Layout from "../components/layout"
import Seo from "../components/seo"
import GetStartedPage from "../components/GetStartedPage"
import getStarted from "../data/getStarted"

const GetStarted = () => (
  <Layout>
    <Seo title={getStarted.title} />
    <GetStartedPage getStarted={getStarted} />
  </Layout>
)

export default GetStarted
