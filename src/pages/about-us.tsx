import Seo from "../components/seo"
import Layout from "../components/layout"
import Footer from "../components/Footer"
import containerStyle from "../styles/container.module.css"
import typographyStyles from "../styles/typography.module.css"
import styles from "../components/ResourcePage.module.css"

const Twitter = ({ twitterName }) => (
  <a
    href={`https://twitter.com/${twitterName}`}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.twitter}
  >
    <svg
      width="15"
      height="15"
      viewBox="0 -2 24 24"
      fill="white"
      style={{
        marginRight: 8,
        top: 2,
      }}
    >
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
    </svg>
  </a>
)

const data = [
  {
    name: "BEEKAI",
    imgUrl: "https://www.beekai.com/marketing/logo/logo.svg",
    url: "https://www.beekai.com",
    twitterName: "beekai_app",
    bio: "Build the next-generation forms with modern technology and best in class user experience and accessibility.",
    interests: ["💻  Code", "⚛️  React", "📋 Form"],
    active: true,
  },
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
    name: "Oleg Butorov",
    imgUrl: "https://avatars.githubusercontent.com/u/16290753?v=4",
    url: "https://github.com/Moshyfawn",
    twitterName: "moshyfawn",
    bio: "I'm a software engineer with quirks. Give me all the new shiny tech and I'll have all the fuel needed to create any project!",
    interests: ["👨‍💻 Tech", "🎮 Games", "🍕 Food"],
    active: true,
  },
  {
    name: "Joris",
    imgUrl: "https://avatars1.githubusercontent.com/u/7545547?v=4",
    url: "https://twitter.com/_jorisre",
    twitterName: "_jorisre",
    bio: "I'm a passionate front-end engineer who loves trying and learning new things all the time 🤓. I enjoy new challenges, contributing to open source projects and helping people.",
    interests: ["💻  Code", "⚛️  React", "🥑  Food"],
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
    name: "Barry May",
    imgUrl: "https://avatars.githubusercontent.com/u/5514034?v=4",
    url: "https://github.com/barrymay",
    bio: "I'm a software engineer/team leader with long-term UI/UX and DevOps experience.  I love to show devs the power of the modern web stack (TypeScript in particular 😀), and I'm thrilled to assist on great OSS projects like react-hook-form!",
    twitterName: "barry_a_may",
    interests: ["🎲 games", "💻 code", "🍕 food"],
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
    name: "Jerome De Leon",
    imgUrl: "https://avatars3.githubusercontent.com/u/32805276?s=460&v=4",
    url: "https://github.com/JeromeDeLeon",
    twitterName: "JeromeDL30",
    bio: "My curiosity of how computer works when I was little brings me into becoming a developer of who am I today and I never regret it. It excites me when something is happening that I do not know like my code that I do not understand. 🤪🤪",
    interests: ["🎮 games", "💻 code", "🍛 food"],
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
    name: "Michael Stramel",
    imgUrl:
      "https://avatars0.githubusercontent.com/u/855184?s=460&u=b8094edc8d249d4c165cf0253dea3388623e24a9&v=4",
    url: "https://github.com/stramel",
    bio: "I'm a Software Engineer who enjoys contributing and improving the open source community in my spare time.",
    twitterName: "stramel89",
    interests: ["🏋🏻‍♂️ powerlifting", "🎮 games", "💻 code"],
    active: false,
  },
]

const AboutUs = () => {
  return (
    <Layout>
      <Seo title="About us" />
      <div className={containerStyle.container}>
        <main className={styles.root}>
          <h1 className={typographyStyles.headingWithTopMargin} id="main">
            About Us
          </h1>
          <p className={typographyStyles.subHeading}>
            Passionate engineers who want to contribute to the community and
            help developers around the world.
          </p>

          <ul
            className={styles.contentList}
            style={{
              marginTop: 50,
            }}
          >
            {data.map(
              ({ url, imgUrl, name, bio, interests, twitterName }, i) => (
                <li key={imgUrl}>
                  <section>
                    <div>
                      <a
                        href={url}
                        title="Github profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          position: "relative",
                          display: "block",
                        }}
                      >
                        <img src={imgUrl} alt="avatar" />
                      </a>
                      <p className={styles.name}>
                        <Twitter twitterName={twitterName} />
                        {name}
                      </p>

                      <section className={styles.interests}>
                        <ul>
                          {interests.map((interest) => (
                            <li key={interest}>{interest}</li>
                          ))}
                        </ul>
                      </section>

                      <p>{bio}</p>
                    </div>
                  </section>
                </li>
              )
            )}
          </ul>
        </main>

        <Footer />
      </div>
    </Layout>
  )
}

export default AboutUs
