import * as React from "react"
import { useForm } from "react-hook-form"
import { DevTool } from "react-hook-form-devtools"
import typographyStyles from "../styles/typography.module.css"
import builderStyles from "./BuilderPage.module.css"
import Form from "./Form"
import styles from "./DevTools.module.css"
import Footer from "./Footer"
import DevToolFeaturesList from "./DevToolFeaturesList"
import FeaturesList from "./FeaturesList"

export default () => {
  const methods = useForm({
    mode: "onChange",
  })

  const { register, control, handleSubmit, formState } = methods

  const onSubmit = data => {
    console.log(data)
  }

  console.log(formState.isValid)

  return (
    <>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        Dev Tools
      </h1>
      <p className={typographyStyles.subHeading}>
        React Hook Form DevTools to help debug forms.
      </p>

      <DevToolFeaturesList isPlayFeature currentLanguage="en" />

      <div
        style={{
          margin: "0 auto",
          maxWidth: 500,
        }}
      >
        <Form
          {...{
            onSubmit,
            submitData: {},
            toggleBuilder: () => {},
            formUpdated: () => {},
            currentLanguage: "en",
            methods,
            devTool: true,
          }}
        />
      </div>

      <div className={styles.devTool}>
        <DevTool control={control} />
      </div>

      <Footer currentLanguage="en" />
    </>
  )
}
