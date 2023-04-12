import Seo from "../../components/seo"
import Layout from "../../components/layout"
import UseFormState from "../../components/UseFormState"

const FormState = () => {
  return (
    <Layout>
      <Seo title="useFormState" />
      <UseFormState currentLanguage="en" />
    </Layout>
  )
}

export default FormState
