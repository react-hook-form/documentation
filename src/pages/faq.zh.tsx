import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FaqMain from "../components/FaqMain"

const Faq = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location}>
    <Seo title="FAQs" location={location} />
    <FaqMain location={location} />
  </Layout>
)

export default Faq
