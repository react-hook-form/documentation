import Seo from "../../components/seo"
import Layout from "../../components/layout"
import UseWatch from "../../components/UseWatch"

const Usewatch = ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useWatch" />
      <UseWatch currentLanguage="en" />
    </Layout>
  )
}

export default Usewatch
