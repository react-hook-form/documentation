import Seo from "../../components/seo"
import Layout from "../../components/layout"
import UseForm from "../../components/UseForm"
import { MDXProvider } from "@mdx-js/react"
import { MDXComponents } from "../../components/mdx/mdx"

export default function UseFormPage() {
  return (
    <Layout>
      <MDXProvider components={MDXComponents}>
        <Seo title="useForm" />
        <UseForm />
      </MDXProvider>
    </Layout>
  )
}
