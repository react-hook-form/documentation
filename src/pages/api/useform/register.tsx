import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import Register from "../../../components/useForm/Register"

const RegisterComponent = ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - register" />
      <Register />
    </Layout>
  )
}

export default RegisterComponent
