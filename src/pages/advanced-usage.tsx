import Layout from "../components/layout"
import Seo from "../components/seo"
import AdvancedUsage from "../components/AdvancedPage"
import advanced from "../data/advanced"

const Api = () => {
  return (
    <Layout>
      <Seo title={advanced.title} />
      <AdvancedUsage advanced={advanced} />
    </Layout>
  )
}

export default Api
