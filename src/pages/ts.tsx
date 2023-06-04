import Seo from "../components/seo"
import Layout from "../components/layout"
import TsPage from "../components/tsPage"
import { MDXProvider } from "@mdx-js/react"
import { MDXComponents } from "../components/mdx/mdx"

const Ts = () => {
  return (
    <Layout>
      <MDXProvider components={MDXComponents}>
        <Seo title="TS Support" />
        <TsPage />
      </MDXProvider>
    </Layout>
  )
}

export default Ts
