import * as React from "react"
import CodeArea from "./CodeArea"
import formContext from "./codeExamples/formContext"
import * as typographyStyles from "../styles/typography.module.css"
import { Link } from "gatsby"

export default function FormContext({ api }) {
  return (
    <>
      <code className={typographyStyles.codeHeading}>
        <h2>
          useFormContext:{" "}
          <span className={typographyStyles.typeText}>Function</span>
        </h2>
      </code>

      {api.useFormContext.introduction}

      <h2 className={typographyStyles.subTitle}>Return</h2>

      <p>This hook will return all the useForm return methods and props.</p>

      <CodeArea
        rawData={`const methods = useForm()
      
<FormProvider {...methods} /> // all the useForm return props
      
const methods = useFormContext() // retrieve those props`}
      />

      {api.useFormContext.description}

      <h2 id="rules" className={typographyStyles.rulesTitle}>
        Rules
      </h2>

      <p>
        You need to wrap your form with the{" "}
        <Link to="/api/formprovider">
          <code>FormProvider</code>
        </Link>{" "}
        component for <code>useFormContext</code> to work properly.
      </p>

      <h2 id="example" className={typographyStyles.subTitle}>
        Examples
      </h2>

      <CodeArea
        rawData={formContext}
        url="https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi"
      />
    </>
  )
}
