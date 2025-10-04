import styles from "./sponsorsList.module.css"

export function SponsorsList() {
  return (
    <div className={styles.root}>
      <p className={styles.heading}>SUPPORTED AND BACKED BY</p>

      <div className={styles.logoGroup}>
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
