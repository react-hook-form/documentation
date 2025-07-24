import styles from "./sponsorsList.module.css"

export function SponsorsList() {
  return (
    <div className={styles.root}>
      <p className={styles.heading}>SUPPORTED AND BACKED BY</p>

      <div className={styles.logoGroup}>
        <a
          href="https://www.beekai.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.beekai.com/marketing/logo/horizontal.svg"
            alt="BEEKAI Form builder"
          />
        </a>
        <a
          href="https://www.route4me.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/route4me.png" alt="route4me" />
        </a>
        <a
          href="https://www.follower24.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.twicsy}
            src="/images/follower24.png"
            alt="follower24"
          />
        </a>
        <a
          href="https://opencollective.com/react-hook-form"
          target="_blank"
          className={styles.add}
          rel="noopener noreferrer"
        >
          + Sponsor
        </a>
      </div>
    </div>
  )
}
