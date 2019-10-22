import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FaqPage from "../components/FaqPage"
import faq from "../data/faq";

const Faq = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="kr">
    <Seo title={faq.title.kr} location={location} />
    <FaqPage defaultLang="kr"/>
  </Layout>
)

export default Faq
