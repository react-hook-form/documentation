import Seo from "../components/seo"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import CtaCard from "../components/CtaCard"
import cards from "../styles/cards.module.css"
import styles from "./sponsors.module.css"

interface Sponsor {
  name: string
  imgUrl: string
  url: string
}

const README_URL =
  "https://raw.githubusercontent.com/react-hook-form/react-hook-form/master/README.md"

// Fallback used if the README fetch/parse fails at build time.
const fallbackMajorSponsors: Sponsor[] = [
  {
    name: "Follower24",
    imgUrl:
      "https://images.opencollective.com/follower24/00297f8/avatar/256.png?height=256",
    url: "https://www.follower24.de/",
  },
]

const fallbackSupportingSponsors: Sponsor[] = [
  {
    name: "Thanks.dev",
    imgUrl: "https://avatars.githubusercontent.com/u/72539280?s=200&v=4",
    url: "https://thanks.dev/",
  },
  {
    name: "Workleap",
    imgUrl:
      "https://images.opencollective.com/workleap/db82f38/logo/256.png?height=256",
    url: "https://workleap.com/",
  },
  {
    name: "Kinsta",
    imgUrl:
      "https://images.opencollective.com/kinsta/55912d7/logo/256.png?height=256",
    url: "https://kinsta.com/",
  },
  {
    name: "Sent",
    imgUrl: "https://avatars.githubusercontent.com/u/153308555?s=200&v=4",
    url: "https://www.sent.dm",
  },
  {
    name: "Niche",
    imgUrl: "https://avatars.githubusercontent.com/u/8988784?s=200&v=4",
    url: "https://niche.com",
  },
  {
    name: "Toss",
    imgUrl: "https://images.opencollective.com/toss/3ed69b3/logo/256.png",
    url: "https://toss.im",
  },
  {
    name: "Principal",
    imgUrl:
      "https://images.opencollective.com/principal/431e690/logo/256.png?height=256",
    url: "https://principal.com/about-us",
  },
  {
    name: "Hygraph",
    imgUrl: "https://avatars.githubusercontent.com/u/31031438",
    url: "https://hygraph.com",
  },
]

const extractSection = (
  markdown: string,
  startMarker: string,
  endMarkers: string[]
): string => {
  const startIdx = markdown.indexOf(startMarker)
  if (startIdx === -1) return ""

  const from = startIdx + startMarker.length
  let endIdx = markdown.length
  endMarkers.forEach((marker) => {
    const idx = markdown.indexOf(marker, from)
    if (idx !== -1 && idx < endIdx) endIdx = idx
  })

  return markdown.slice(from, endIdx)
}

const splitCells = (row: string): string[] => row.split("|").slice(1, -1)

// Sponsor tables in the README alternate a row of plain-text names with a
// row of `<a href><img src></a>` cells for their logos.
const parseSponsorSection = (section: string): Sponsor[] => {
  const rows = section
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("|"))
    .filter((line) => !/^\|[\s|:-]+\|$/.test(line))

  const sponsors: Sponsor[] = []
  for (let i = 0; i < rows.length; i += 2) {
    const nameCells = splitCells(rows[i] || "")
    const logoCells = splitCells(rows[i + 1] || "")

    nameCells.forEach((rawName, index) => {
      const name = rawName.trim()
      const cell = logoCells[index] || ""
      const hrefMatch = cell.match(/<a\s+href="([^"]+)"/i)
      const srcMatch = cell.match(/<img\s+src="([^"]+)"/i)

      if (name && hrefMatch && srcMatch) {
        sponsors.push({ name, url: hrefMatch[1], imgUrl: srcMatch[1] })
      }
    })
  }

  return sponsors
}

export const getStaticProps = async () => {
  let majorSponsors = fallbackMajorSponsors
  let supportingSponsors = fallbackSupportingSponsors

  try {
    const res = await fetch(README_URL)
    const markdown = await res.text()

    const parsedMajor = parseSponsorSection(
      extractSection(markdown, "## Major Sponsors", ["## Supporting Sponsors"])
    )
    const parsedSupporting = parseSponsorSection(
      extractSection(markdown, "## Supporting Sponsors", [
        "### Past Sponsors",
        "## Past Sponsors",
      ])
    )

    if (parsedMajor.length) majorSponsors = parsedMajor
    if (parsedSupporting.length) supportingSponsors = parsedSupporting
  } catch {}

  return {
    props: { majorSponsors, supportingSponsors },
    revalidate: 86400,
  }
}

const getDomain = (url: string): string => {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return url
  }
}

const OPEN_COLLECTIVE_URL = "https://opencollective.com/react-hook-form"

const MajorSponsorList = ({ sponsors }: { sponsors: Sponsor[] }) => (
  <ul className={styles.majorList}>
    {sponsors.map(({ name, imgUrl, url }) => (
      <li key={name} className={styles.majorCard}>
        <span className={styles.badge}>
          <svg viewBox="0 0 16 16" aria-hidden>
            <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
          </svg>
          Major sponsor
        </span>
        <div className={styles.majorBody}>
          <span className={styles.majorLogo}>
            <img src={imgUrl} alt="" loading="lazy" />
          </span>
          <div className={styles.majorText}>
            <h3>{name}</h3>
            <p>{getDomain(url)}</p>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visit}
          >
            Visit {getDomain(url)} ↗
          </a>
        </div>
      </li>
    ))}
  </ul>
)

const SponsorGrid = ({ sponsors }: { sponsors: Sponsor[] }) => (
  <ul className={styles.grid}>
    {sponsors.map(({ name, imgUrl, url }) => (
      <li key={name}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <span className={styles.logo}>
            <img src={imgUrl} alt="" loading="lazy" />
          </span>
          <span className={styles.name}>{name}</span>
          <span className={styles.domain}>{getDomain(url)}</span>
        </a>
      </li>
    ))}
  </ul>
)

const HeartIcon = (
  <svg viewBox="0 0 16 16">
    <path d="M8 14.25s-5.75-3.4-5.75-7.6A3.15 3.15 0 015.4 3.5c1.1 0 2 .55 2.6 1.4.6-.85 1.5-1.4 2.6-1.4a3.15 3.15 0 013.15 3.15c0 4.2-5.75 7.6-5.75 7.6z" />
  </svg>
)

const Sponsors = ({
  majorSponsors,
  supportingSponsors,
}: {
  majorSponsors: Sponsor[]
  supportingSponsors: Sponsor[]
}) => {
  return (
    <>
      <Seo
        title="Sponsors"
        description="Meet the sponsors who support the development of React Hook Form."
      />
      <div className={cards.page}>
        <PageHeader
          eyebrow="Sponsors"
          title="Backed by generous sponsors"
          lead="We’re incredibly grateful to these kind and generous sponsors for their support."
        />

        <main>
          <div className={styles.headerActions}>
            <a
              href={OPEN_COLLECTIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              Become a sponsor
            </a>
          </div>

          <section aria-labelledby="major-sponsors" className={styles.tier}>
            <h2 id="major-sponsors" className={styles.tierLabel}>
              Major sponsors
            </h2>
            <MajorSponsorList sponsors={majorSponsors} />
          </section>

          <section
            aria-labelledby="supporting-sponsors"
            className={styles.tier}
          >
            <h2 id="supporting-sponsors" className={styles.tierLabel}>
              Supporting sponsors
            </h2>
            <SponsorGrid sponsors={supportingSponsors} />
          </section>

          <CtaCard
            icon={HeartIcon}
            title="Support React Hook Form"
            description="Sponsorship funds ongoing maintenance, new features and documentation for everyone who builds forms with React."
            href={OPEN_COLLECTIVE_URL}
            label="Become a sponsor"
          />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Sponsors
