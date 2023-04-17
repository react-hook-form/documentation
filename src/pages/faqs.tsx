import Layout from "../components/layout"
import Seo from "../components/seo"
import FaqPage from "../components/FaqPage"
import faq from "../data/en/faq"

const Faq = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="en">
    <Seo title={faq.title} />
    <FaqPage defaultLang="en" faq={faq} />
  </Layout>
)

export default Faq
