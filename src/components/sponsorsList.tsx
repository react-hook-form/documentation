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
            src="https://camo.githubusercontent.com/18448c6df47adb0b54376469641667a63005b6cc9bc402d9475a42e06b525c2f/68747470733a2f2f696d616765732e6f70656e636f6c6c6563746976652e636f6d2f666f6c6c6f77657232342f303032393766382f6176617461722f3235362e706e673f6865696768743d323536"
            alt="follower24"
          />
        </a>
        <a href="https://buy.fans/" target="_blank" rel="noopener noreferrer">
          <img
            className={styles.twicsy}
            src="https://images.opencollective.com/buy-instagram-followers-buyfans/2b97c05/logo/256.png?height=256"
            alt="BuyFans"
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
