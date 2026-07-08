import clsx from "clsx"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Footer from "../components/Footer"
import containerStyle from "../styles/container.module.css"
import typographyStyles from "../styles/typography.module.css"
import buttonStyles from "../styles/button.module.css"
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

const MajorSponsorList = ({ sponsors }: { sponsors: Sponsor[] }) => (
  <div className={styles.majorList}>
    {sponsors.map(({ name, imgUrl, url }) => (
      <a
        key={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.majorCard}
      >
        <div className={styles.majorCardTop}>
          <img
            className={styles.majorLogo}
            src={imgUrl}
            alt={name}
            loading="lazy"
          />
          <div>
            <p className={styles.majorName}>{name}</p>
            <p className={styles.majorTagline}>{getDomain(url)}</p>
          </div>
        </div>
        <div className={styles.majorFooter}>
          <span>{getDomain(url)}</span>
          <span className={styles.arrow}>→</span>
        </div>
      </a>
    ))}
  </div>
)

const SponsorGrid = ({ sponsors }: { sponsors: Sponsor[] }) => (
  <div className={styles.grid}>
    {sponsors.map(({ name, imgUrl, url }) => (
      <a
        key={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
        title={name}
      >
        <img src={imgUrl} alt={name} loading="lazy" />
        <span>{name}</span>
      </a>
    ))}
  </div>
)

const Sponsors = ({
  majorSponsors,
  supportingSponsors,
}: {
  majorSponsors: Sponsor[]
  supportingSponsors: Sponsor[]
}) => {
  return (
    <Layout>
      <Seo
        title="Sponsors"
        description="Meet the sponsors who support the development of React Hook Form."
      />
      <div className={containerStyle.container}>
        <main className={styles.root}>
          <h1 className={typographyStyles.headingWithTopMargin} id="main">
            Sponsors
          </h1>
          <p className={typographyStyles.subHeading}>
            We’re incredibly grateful to these kind and generous sponsors for
            their support.
          </p>

          <div className={styles.ctaWrapper}>
            <a
              href="https://opencollective.com/react-hook-form"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles.primaryButton}
            >
              + Become a sponsor
            </a>
          </div>

          <MajorSponsorList sponsors={majorSponsors} />

          <span className={clsx(styles.tierLabel, styles.tierLabelMuted)}>
            Supporting Sponsors
          </span>
          <SponsorGrid sponsors={supportingSponsors} />
        </main>

        <Footer />
      </div>
    </Layout>
  )
}

export default Sponsors
