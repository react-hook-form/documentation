import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import GetValues from "../../../components/useForm/GetValues"

const Getvalues = ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - getValues" />
      <GetValues currentLanguage="en" />
    </Layout>
  )
}

export default Getvalues
