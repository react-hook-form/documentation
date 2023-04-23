import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import SetFocus from "../../../components/useForm/SetFocus"

const Setfocus = ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - setFocus" />
      <SetFocus currentLanguage="en" />
    </Layout>
  )
}

export default Setfocus
