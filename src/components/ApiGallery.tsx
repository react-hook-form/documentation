import * as React from "react"
import { useStateMachine } from "little-state-machine"
import Footer from "./Footer"
import typographyStyles from "../styles/typography.module.css"
import styles from "./ApiGallery.module.css"
import containerStyles from "../styles/container.module.css"
import headerStyles from "./Header.module.css"

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

      <main className={styles.root}>
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
                Subscribe to individual form state update and isolate re-render
                at the hook level.
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
                Manage dynamically generate fields on the fly, shuffle, remove
                and append fields.
              </p>
              <a href="/api">Read more ▸</a>
            </div>
          </li>
        </ul>

        <div className={styles.versionControl}>
          <p>Switch Version: </p>
          <div
            className={`${headerStyles.toggleGroup} ${headerStyles.smallToggleGroup}`}
          >
            <button
              disabled
              role="tab"
              aria-label="show v6 doc"
              aria-selected="false"
              aria-controls="tabPanel-2"
            >
              V7
            </button>
            <button
              role="tab"
              aria-label="show v6 doc"
              aria-selected="false"
              aria-controls="tabPanel-2"
            >
              V6
            </button>
            <button
              aria-label="show v5 doc"
              aria-selected="true"
              aria-controls="tabPanel-1"
              role="tab"
            >
              V5
            </button>
          </div>
        </div>
      </main>

      <Footer currentLanguage={currentLanguage} />
    </div>
  )
}
