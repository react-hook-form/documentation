import styles from "./sponsorsList.module.css"

const sponsors = [
  {
    name: "follower24",
    url: "https://www.follower24.de/",
    logo: "https://camo.githubusercontent.com/18448c6df47adb0b54376469641667a63005b6cc9bc402d9475a42e06b525c2f/68747470733a2f2f696d616765732e6f70656e636f6c6c6563746976652e636f6d2f666f6c6c6f77657232342f303032393766382f6176617461722f3235362e706e673f6865696768743d323536",
  },
]

export function SponsorsList() {
  return (
    <section className={styles.root} aria-labelledby="sponsors-heading">
      <p className={styles.eyebrow}>Sponsors</p>
      <h2 id="sponsors-heading" className={styles.title}>
        Supported and backed by
      </h2>
      <p className={styles.lead}>
        React Hook Form is free and open source, sustained by the companies and
        individuals who sponsor its development.
      </p>

      <ul className={styles.grid}>
        {sponsors.map(({ name, url, logo }) => (
          <li key={name}>
            <a
              className={styles.card}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.logo} src={logo} alt="" />
              <span className={styles.name}>{name}</span>
            </a>
          </li>
        ))}
        <li>
          <a
            className={`${styles.card} ${styles.add}`}
            href="https://opencollective.com/react-hook-form"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.plus} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path
                  d="M12 20.5s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.7c0 5.6-7.5 10.2-7.5 10.2z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className={styles.name}>Become a sponsor</span>
          </a>
        </li>
      </ul>
    </section>
  )
}
