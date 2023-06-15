import { useEffect } from "react"
import Link from "next/link"
import Footer from "./Footer"
import typographyStyles from "../styles/typography.module.css"
import styles from "./ApiGallery.module.css"
import containerStyles from "../styles/container.module.css"
import headerStyles from "./Header.module.css"
import { useRouter } from "next/router"

export default function ApiGallery() {
  const router = useRouter()

  const onChange = (e) => {
    const version = parseInt(e.target.value)

    if (version !== 7) {
      router.push(`https://legacy.react-hook-form.com/v${version}/api`)
    } else {
      router.push(`/v${version}/docs/`)
    }
  }

  useEffect(() => {
    const name = window.location.hash.toLowerCase().slice(1)

    if (name === "controller") {
      router.push(`/docs/usecontroller/${name}`)
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
      router.push(`/docs/useform/${name}`)
    } else if (
      ["controller", "useformcontext", "usefieldarray"].includes(name)
    ) {
      router.push(`/docs/${name}`)
    }
  }, [router])

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
                re-renders.
              </p>
              <Link href="/docs/useform" aria-label="read more about useForm">
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
                For Controlled components: interface with the useForm methods
                and isolate its re-render.
              </p>
              <Link
                href="/docs/usecontroller"
                aria-label="read more about useController"
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
                Access your useForm methods and properties from nested
                components. Great for building larger forms and shared
                components!
              </p>
              <Link
                href="/docs/useformcontext"
                aria-label="read more about useformcontext"
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
                Subscribe to individual form input changes without impacting the
                root component's render.
              </p>
              <Link href="/docs/usewatch" aria-label="read more about usewatch">
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
                Subscribe to individual form state updates and isolating
                re-renders at the hook level.
              </p>
              <Link
                href="/docs/useformstate"
                aria-label="read more about useformstate"
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
                Manage dynamically generated fields on the fly, shuffle, remove
                and append fields. Ideal for complex CRUD data entry scenarios.
              </p>
              <Link
                href="/docs/usefieldarray"
                aria-label="read more about usefieldarray"
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
              value="6"
              role="tab"
              aria-label="show v6 doc"
              aria-selected="false"
              aria-controls="tabPanel-2"
            >
              V6
            </button>
            <button
              onClick={onChange}
              value="5"
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

      <Footer />
    </div>
  )
}
