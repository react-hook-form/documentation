import Layout from "../components/layout"
import Seo from "../components/seo"
import AdvancedUsage from "../components/AdvancedPage"
import advanced from "../data/en/advanced"

const Page = () => {
  return (
    <Layout>
      <Seo title={advanced.title} />
      <AdvancedUsage advanced={advanced} />
    </Layout>
  )
}

export default Page
