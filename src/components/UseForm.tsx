import Footer from "./Footer"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import StarRepo from "./StarRepo"
import { SelectNav } from "./selectNav"
import UseFormContent from "../content/use-form.mdx"
import { Menu, apiLinks } from "./Menu"

const UseForm = () => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        useForm
      </h1>
      <p className={typographyStyles.subHeading}>
        React hooks for form validation
      </p>

      <div className={containerStyles.wrapper}>
        <Menu pages={apiLinks} />

        <SelectNav
          options={[
            {
              label: "register",
              value: "/docs/useform/register",
            },
            {
              label: "unregister",
              value: "/docs/useform/unregister",
            },
            {
              label: "formstate",
              value: "/docs/useform/formstate",
            },
            {
              label: "watch",
              value: "/docs/useform/watch",
            },
            {
              label: "handlesubmit",
              value: "/docs/useform/handlesubmit",
            },
            {
              label: "reset",
              value: "/docs/useform/reset",
            },
            {
              label: "resetField",
              value: "/docs/useform/resetfield",
            },
            {
              label: "setError",
              value: "/docs/useform/seterror",
            },
            {
              label: "clearErrors",
              value: "/docs/useform/clearerrors",
            },
            {
              label: "setValue",
              value: "/docs/useform/setvalue",
            },
            {
              label: "setFocus",
              value: "/docs/useform/setfocus",
            },
            {
              label: "getValues",
              value: "/docs/useform/getvalues",
            },
            {
              label: "getFieldState",
              value: "/docs/useform/getfieldstate",
            },
            {
              label: "trigger",
              value: "/docs/useform/trigger",
            },
            {
              label: "control",
              value: "/docs/useform/control",
            },
            {
              label: "Form",
              value: "/docs/useform/form",
            },
          ]}
        />

        <main>
          <UseFormContent />

          <StarRepo />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default UseForm
