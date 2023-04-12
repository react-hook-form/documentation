import Seo from "../../components/seo"
import Layout from "../../components/layout"
import UseControllerContent from "../../components/UseController"

const Usecontroller = () => {
  return (
    <Layout>
      <Seo title="useController" />
      <UseControllerContent currentLanguage="en" />
    </Layout>
  )
}

export default Usecontroller
