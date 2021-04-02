import * as React from "react"
import { useStateMachine } from "little-state-machine"
import { Link } from "gatsby"
import Footer from "./Footer"
import typographyStyles from "../styles/typography.module.css"
import styles from "./ApiGallery.module.css"
import containerStyles from "../styles/container.module.css"
import headerStyles from "./Header.module.css"
import { updateSetting } from "../actions/settingActions"
import { navigate } from "@reach/router"

export default function ApiGallery({ defaultLang }) {
  const {
    actions,
    state: {
      language,
      setting = {
        version: 7,
      },
    },
  } = useStateMachine({
    updateSetting,
  })
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }

  const onChange = (e) => {
    const version = parseInt(e.target.value)

    navigate(`/v${version}/api/`)

    actions.updateSetting({
      version,
    })
  }

  React.useEffect(() => {
    if (setting.version !== 7) {
      navigate(`/v${setting.version}/api`)
    } else if (window.location.hash) {
      const name = window.location.hash.toLowerCase().slice(1)

      if (name === "controller") {
        navigate(`/api/usecontroller/${name}`)
      } else if (
        [
          "register",
          "unregister",
          "watch",
          "handlesubmit",
          "reset",
          "setError",
          "clearerrors",
          "setvalues",
          "getvalues",
          "trigger",
          "control",
          "formstate",
        ].includes(name)
      ) {
        navigate(`/api/useform/${name}`)
      } else if (
        ["controller", "useformcontext", "usefieldarray"].includes(name)
      ) {
        navigate(`/api/${name}`)
      }
    }
  }, [setting])

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
              <Link to="/api/useform" aria-label={"read more about useForm"}>
                Read More ▸
              </Link>
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
              <Link
                to="/api/usecontroller"
                aria-label={"read more about useController"}
              >
                Read More ▸
              </Link>
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
              <Link
                to="/api/useformcontext"
                aria-label={"read more about useformcontext"}
              >
                Read More ▸
              </Link>
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
              <Link to="/api/usewatch" aria-label={"read more about usewatch"}>
                Read More ▸
              </Link>
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
              <Link
                to="/api/useformstate"
                aria-label={"read more about useformstate"}
              >
                Read More ▸
              </Link>
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
              <Link
                to="/api/usefieldarray"
                aria-label={"read more about usefieldarray"}
              >
                Read More ▸
              </Link>
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
              aria-label="show v7 doc"
              aria-selected="false"
              aria-controls="tabPanel-2"
            >
              V7
            </button>
            <button
              onClick={onChange}
              value={"6"}
              role="tab"
              aria-label="show v6 doc"
              aria-selected="false"
              aria-controls="tabPanel-2"
            >
              V6
            </button>
            <button
              onClick={onChange}
              value={"5"}
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
