import Link from "next/link"
import Seo from "../components/seo"
import styles from "./404.module.css"

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" noindex />
    <div className={styles.container}>
      <main className={styles.root} id="main">
        <div className={styles.copy}>
          <p className={styles.eyebrow}>404 · Validation failed</p>
          <h1>This route isn&#39;t registered.</h1>
          <p className={styles.lead}>
            The page may have moved, the URL may have a typo, or this field was
            never added to the form.
          </p>

          <div className={styles.actions}>
            <Link href="/" className={styles.primaryAction}>
              Return home <span aria-hidden>→</span>
            </Link>
            <Link href="/docs" className={styles.secondaryAction}>
              Browse the API
            </Link>
          </div>

          <nav className={styles.suggestions} aria-label="Popular pages">
            <span>Or try</span>
            <Link href="/get-started">Get started</Link>
            <Link href="/integrations">Integrations</Link>
            <Link href="/faqs">FAQs</Link>
          </nav>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <span className={styles.number}>404</span>
          <div className={styles.errorCard}>
            <div className={styles.cardBar}>
              <span />
              <span />
              <span />
              <code>formState.errors</code>
            </div>
            <pre>
              <code>{`{
  "route": {
    "type": "not_found",
    "message": "Page is not registered"
  }
}`}</code>
            </pre>
            <div className={styles.status}>
              <span className={styles.statusDot} />
              <code>isValid: false</code>
            </div>
          </div>
        </div>
      </main>
    </div>
  </>
)

export default NotFoundPage
