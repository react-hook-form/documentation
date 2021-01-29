import * as React from "react"
import { useStateMachine } from "little-state-machine"
import Footer from "./Footer"
import typographyStyles from "../styles/typography.module.css"
import styles from "./ApiGallery.module.css"
import containerStyles from "../styles/container.module.css"

export default function ApiGallery({ defaultLang }) {
  const {
    state: { language },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }

  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        API
      </h1>

      <p className={typographyStyles.subHeading}>
        React Hook Form's API overview
      </p>

      <ul className={styles.gallery}>
        <li>
          <div>
            <h3>
              <code>{`</>`}</code>useForm
            </h3>
            <p>
              A powerful custom hook to validate your form with minimal
              re-render.
            </p>
            <a href="/api">Read more ▸</a>
          </div>
        </li>
        <li>
          <div>
            <h3>
              <code>{`</>`}</code>useController
            </h3>
            <p>
              It is the go-to hook for Controlled components and isolates its
              re-render.
            </p>
            <a href="/api">Read more ▸</a>
          </div>
        </li>
        <li>
          <div>
            <h3>
              <code>{`</>`}</code>useFormContext
            </h3>
            <p>
              Building large forms and would like to access useForm methods in
              context.
            </p>
            <a href="/api">Read more ▸</a>
          </div>
        </li>
        <li>
          <div>
            <h3>
              <code>{`</>`}</code>useWatch
            </h3>
            <p>
              Subscribe to individual form input change without impacting the
              root component's render.
            </p>
            <a href="/api">Read more ▸</a>
          </div>
        </li>
        <li>
          <div>
            <h3>
              <code>{`</>`}</code>useFormState
            </h3>
            <p>
              Subscribe to individual form state update and isolate re-render at
              the hook level.
            </p>
            <a href="/api">Read more ▸</a>
          </div>
        </li>
        <li>
          <div>
            <h3>
              <code>{`</>`}</code>useFieldArray
            </h3>
            <p>
              Manage dynamically generate fields on the fly, shuffle, remove and
              append fields.
            </p>
            <a href="/api">Read more ▸</a>
          </div>
        </li>
      </ul>

      <Footer currentLanguage={currentLanguage} />
    </div>
  )
}
