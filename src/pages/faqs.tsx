import Layout from "../components/layout"
import Seo from "../components/seo"
import FaqPage from "../components/FaqPage"
import faq from "../data/faq"

const Faq = () => (
  <Layout>
    <Seo title={faq.title} />
    <FaqPage faq={faq} />
  </Layout>
)

export default Faq
