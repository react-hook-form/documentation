import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FaqPage from "../components/FaqPage"
import faq from "../data/pt/faq"

const Faq = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="pt">
    <Seo title={faq.title} location={location} />
    <FaqPage defaultLang="pt" />
  </Layout>
)

export default Faq
