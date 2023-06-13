import Layout from "../components/layout"
import Seo from "../components/seo"
import GetStartedPage from "../components/GetStartedPage"
import getStarted from "../data/getStarted"
import { MDXProvider } from "@mdx-js/react"
import { MDXComponents } from "../components/mdx/mdx"

const GetStarted = () => (
  <Layout>
    <MDXProvider components={MDXComponents}>
      <Seo title={getStarted.title} />
      <GetStartedPage />
    </MDXProvider>
  </Layout>
)

export default GetStarted
