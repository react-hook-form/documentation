import * as React from "react"

import * as styles from "./BeekaiBuilderPage.module.css"
import * as buttonStyles from "../styles/button.module.css"

export function BeekaiBuilderPage() {
  return (
    <div className={styles.root}>
      <section className={styles.container}>
        <div className={styles.product}>
          <div className={styles.productImg} />
        </div>

        <div className={styles.content}>
          <img
            alt="BEEKAI Form builder"
            src="https://www.beekai.com/marketing/logo/horizontal.svg"
            className={styles.logo}
          />
          <h2 className={styles.heading}>Next-gen form builder</h2>
          <p>
            Build the next-generation forms with modern technology and best in
            class user experience and accessibility.
          </p>

          <ul className={styles.features}>
            <li>
              <p>Generate code for React/Vanilla JS</p>
            </li>
            <li>
              <p>GUI with drag and drop</p>
            </li>
            <li>
              <p>Improved accessibility by default</p>
            </li>
            <li>
              <p>Support dynamic field array</p>
            </li>
            <li>
              <p>End-to-end integration with submission</p>
            </li>
            <li>
              <p>User behaviour analytic</p>
            </li>
            <li>
              <p>and many more features</p>
            </li>
          </ul>

          <a
            href="https://www.beekai.com/features/form-builder"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles.darkButton}
          >
            Try it now
          </a>
        </div>
      </section>
    </div>
  )
}
