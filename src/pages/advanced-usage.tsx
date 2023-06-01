import Layout from "../components/layout"
import Seo from "../components/seo"
import AdvancedUsage from "../components/AdvancedPage"
import advanced from "../data/advanced"
import { MDXProvider } from "@mdx-js/react"
import { MDXComponents } from "../components/mdx/mdx"

const Api = () => {
  return (
    <Layout>
      <MDXProvider components={MDXComponents}>
        <Seo title={advanced.title} />
        <AdvancedUsage />
      </MDXProvider>
    </Layout>
  )
}

export default Api
