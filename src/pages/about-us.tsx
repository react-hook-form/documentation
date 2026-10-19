import Seo from "../components/seo"
import Layout from "../components/layout"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import CtaCard from "../components/CtaCard"
import cards from "../styles/cards.module.css"
import styles from "./about-us.module.css"

interface AboutUsData {
  name: string
  imgUrl: string
  url: string
  twitterName: string
  bio: string
  interests: string[]
  active: boolean
}

const data: AboutUsData[] = [
  {
    name: "Beier(Bill) Luo",
    imgUrl:
      "https://avatars2.githubusercontent.com/u/10513364?s=460&u=a129aade5f9a7a92cf06172b47d67ccefc736933&v=4",
    url: "https://github.com/bluebill1049",
    twitterName: "bluebill1049",
    bio: "I started my career as a Designer/Developer, but I have been passionate about building/creating since I was little. Building open source projects has become my hobby, and helping thousands of developers around the world has become my passion. React-Hook-Form is a dream come true.",
    interests: ["🎮 games", "🚗 cars", "🐟 fish"],
    active: true,
  },
  {
    name: "kotarella",
    imgUrl:
      "https://avatars1.githubusercontent.com/u/12913947?s=460&u=949926ee4c1aa8b414d994e29665f7dc3c21bb7b&v=4",
    url: "https://github.com/kotarella1110",
    twitterName: "kotarella1110",
    bio: "I'm a software engineer who loves beer and TypeScript. Open source software that provides the best DX excites me. I want to provide developers all over the world the same excitement as me.",
    interests: ["🍺 beer", "💻 code", "♨️ onsen"],
    active: true,
  },
  {
    name: "Joris",
    imgUrl: "https://avatars1.githubusercontent.com/u/7545547?v=4",
    url: "https://github.com/jorisre",
    twitterName: "_jorisre",
    bio: "I'm a passionate front-end engineer who loves trying and learning new things all the time 🤓. I enjoy new challenges, contributing to open source projects and helping people.",
    interests: ["💻  Code", "⚛️  React", "🥑  Food"],
    active: true,
  },
  {
    name: "Barry May",
    imgUrl: "https://avatars.githubusercontent.com/u/5514034?v=4",
    url: "https://github.com/barrymay",
    bio: "I'm a software engineer/team leader with long-term UI/UX and DevOps experience.  I love to show devs the power of the modern web stack (TypeScript in particular 😀), and I'm thrilled to assist on great OSS projects like react-hook-form!",
    twitterName: "barry_a_may",
    interests: ["🎲 games", "💻 code", "🍕 food"],
    active: false,
  },
  {
    name: "Michael Stramel",
    imgUrl:
      "https://avatars0.githubusercontent.com/u/855184?s=460&u=b8094edc8d249d4c165cf0253dea3388623e24a9&v=4",
    url: "https://github.com/stramel",
    bio: "I'm a Software Engineer who enjoys contributing and improving the open source community in my spare time.",
    twitterName: "stramel89",
    interests: ["🏋🏻‍♂️ powerlifting", "🎮 games", "💻 code"],
    active: false,
  },
  {
    name: "Jerome De Leon",
    imgUrl: "https://avatars3.githubusercontent.com/u/32805276?s=460&v=4",
    url: "https://github.com/JeromeDeLeon",
    twitterName: "JeromeDL30",
    bio: "My curiosity of how computer works when I was little brings me into becoming a developer of who am I today and I never regret it. It excites me when something is happening that I do not know like my code that I do not understand. 🤪🤪",
    interests: ["🎮 games", "💻 code", "🍛 food"],
    active: false,
  },
  {
    name: "Phillip ED Maier",
    imgUrl:
      "https://avatars3.githubusercontent.com/u/35811186?s=460&u=011235951b44d56d753335ac4cac32046802b300&v=4",
    url: "https://github.com/pmaier983",
    twitterName: "pmaier983",
    bio: "A Software Engineer with a passion for helping others 😄.",
    interests: ["🚣 rowing", "🌳 grafting", "🎿 skiing"],
    active: false,
  },
  {
    name: "Keiya Sasaki",
    imgUrl:
      "https://avatars2.githubusercontent.com/u/34934510?s=460&u=4a9c50dd3ec691bf5d55a4c6c413e8f79ec2afef&v=4",
    url: "https://github.com/keiya01",
    twitterName: "keya_00001",
    bio: "I am a developer who loves Front-End. I want to deliver the best UX for users all over the world.",
    interests: ["📕 manga", "📺 anime", "♨️ onsen"],
    active: false,
  },
  {
    name: "Dohyung Ahn",
    imgUrl: "https://avatars0.githubusercontent.com/u/14539203?s=460&v=4",
    url: "https://github.com/adhrinae",
    twitterName: "adhrinae",
    bio: "I am a Software Engineer (mostly frontend) who loves open source and their community. I like translating documentation of open source projects and useful dev articles in Korean. I always try to grow as developer to build the best product that can make me satisfied.",
    interests: ["🎮 games", "💻 code", "🎹 piano"],
    active: false,
  },
  {
    name: "leapful",
    imgUrl: "https://avatars.githubusercontent.com/u/18494222?v=4",
    url: "https://github.com/leapful",
    twitterName: "leapful",
    bio: "I'm a software engineer who loves programing.",
    interests: ["⚛️ React", "💻 code", "❓ unknown"],
    active: false,
  },
  {
    name: "Oleg Butorov",
    imgUrl: "https://avatars.githubusercontent.com/u/16290753?v=4",
    url: "https://github.com/Moshyfawn",
    twitterName: "moshyfawn",
    bio: "I'm a software engineer with quirks. Give me all the new shiny tech and I'll have all the fuel needed to create any project!",
    interests: ["👨‍💻 Tech", "🎮 Games", "🍕 Food"],
    active: false,
  },
]

const GitHubIcon = (
  <svg viewBox="0 0 16 16" aria-hidden>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
)

const XIcon = (
  <svg viewBox="0 0 24 24" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const CodeIcon = (
  <svg viewBox="0 0 16 16">
    <path d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z" />
  </svg>
)

const CONTRIBUTING_URL =
  "https://github.com/react-hook-form/react-hook-form/blob/master/CONTRIBUTING.md"

const MaintainerCard = ({
  name,
  imgUrl,
  url,
  twitterName,
  bio,
  interests,
}: AboutUsData) => (
  <li className={styles.profile}>
    <div className={styles.identity}>
      <img className={styles.avatar} src={imgUrl} alt="" loading="lazy" />
      <div>
        <h3>{name}</h3>
        <p className={styles.handle}>@{twitterName}</p>
      </div>
    </div>

    <p className={styles.bio}>{bio}</p>

    <ul className={styles.interests} aria-label="Interests">
      {interests.map((interest) => (
        <li key={interest}>{interest}</li>
      ))}
    </ul>

    <div className={styles.links}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
        aria-label={`${name} on GitHub`}
      >
        {GitHubIcon}GitHub
      </a>
      <a
        href={`https://x.com/${twitterName}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
        aria-label={`${name} on X`}
      >
        {XIcon}X
      </a>
    </div>
  </li>
)

const AlumniCard = ({ name, imgUrl, url }: AboutUsData) => (
  <li>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.alumniCard}
    >
      <img src={imgUrl} alt="" loading="lazy" />
      <span className={styles.alumniName}>{name}</span>
      <span className={styles.handle}>{url.replace(/^https?:\/\//, "")}</span>
    </a>
  </li>
)

const AboutUs = () => {
  const maintainers = data.filter(({ active }) => active)
  const alumni = data.filter(({ active }) => !active)

  return (
    <Layout>
      <Seo
        title="About us"
        description="Meet the team behind React Hook Form."
      />
      <div className={cards.page}>
        <PageHeader
          eyebrow="About us"
          title="The people behind the forms"
          lead="Passionate engineers who want to contribute to the community and help developers around the world."
        />

        <main>
          <section aria-labelledby="maintainers" className={styles.section}>
            <h2 id="maintainers" className={styles.sectionLabel}>
              Maintainers
            </h2>
            <ul className={styles.maintainers}>
              {maintainers.map((person) => (
                <MaintainerCard key={person.name} {...person} />
              ))}
            </ul>
          </section>

          <section aria-labelledby="alumni" className={styles.section}>
            <h2 id="alumni" className={styles.sectionLabel}>
              Past maintainers
            </h2>
            <ul className={styles.alumni}>
              {alumni.map((person) => (
                <AlumniCard key={person.name} {...person} />
              ))}
            </ul>
          </section>

          <CtaCard
            icon={CodeIcon}
            title="Become a contributor"
            description="React Hook Form is built in the open. Bug fixes, docs, translations and ideas are all welcome."
            href={CONTRIBUTING_URL}
            label="Read the guide"
          />
        </main>

        <Footer />
      </div>
    </Layout>
  )
}

export default AboutUs
