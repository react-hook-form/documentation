import * as React from "react"

import * as styles from "./sponsorsList.module.css"

export function SponsorsList() {
  return (
    <div className={styles.root}>
      <p className={styles.heading}>SUPPORTED AND BACKED BY</p>

      <div className={styles.logoGroup}>
        <a
          href="https://www.casinoreviews.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/casinoreviews.png" alt="Casino Reviews" />
        </a>
        <a
          className={styles.placeholder}
          href="https://opencollective.com/react-hook-form"
          target="_blank"
          rel="noopener noreferrer"
        >
          ❤️ Your Company
        </a>
      </div>
    </div>
  )
}
