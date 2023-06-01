import Layout from "../components/layout"
import Seo from "../components/seo"
import FaqPage from "../components/FaqPage"
import faq from "../data/faq"
import { MDXProvider } from "@mdx-js/react"
import { MDXComponents } from "../components/mdx/mdx"

const Faq = () => (
  <Layout>
    <MDXProvider components={MDXComponents}>
      <Seo title={faq.title} />
      <FaqPage faq={faq} />
    </MDXProvider>
  </Layout>
)

export default Faq
