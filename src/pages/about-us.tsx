import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import containerStyle from "../styles/container.module.css"
import typographyStyles from "../styles/typography.module.css"
import styles from "../components/ResourcePage.module.css"
import Footer from "../components/Footer"

const data = [
  {
    name: "Kotaro Sugawara",
    imgUrl:
      "https://avatars1.githubusercontent.com/u/12913947?s=460&u=949926ee4c1aa8b414d994e29665f7dc3c21bb7b&v=4",
    url: "https://github.com/kotarella1110",
    bio: "xxx",
    interests: [],
  },
  {
    name: "Keiya Sasaki",
    imgUrl:
      "https://avatars2.githubusercontent.com/u/34934510?s=460&u=4a9c50dd3ec691bf5d55a4c6c413e8f79ec2afef&v=4",
    url: "https://github.com/keiya01",
    bio: "xxx",
    interests: [],
  },
  {
    name: "Phillip ED Maier",
    imgUrl:
      "https://avatars3.githubusercontent.com/u/35811186?s=460&u=011235951b44d56d753335ac4cac32046802b300&v=4",
	url: "https://phillip-maier.com/",
    bio: "A Software Engineer with a passion for helping others 😄.",
    interests: ["🚣 rowing", "🌳 growing trees", "🎿 skiing"],
  },
  {
    name: "Jerome De Leon",
    imgUrl: "https://avatars3.githubusercontent.com/u/32805276?s=460&v=4",
    url: "https://github.com/JeromeDeLeon",
    bio:
      "My curiosity of how computer works when I was little brings me into becoming a developer of who am I today and I never regret it. It excites me when something is happening that I do not know like my code that I do not understand. 🤪🤪",
    interests: ["🎮 games", "💻 source codes", "🍛 foods"],
  },
  {
    name: "Beier(Bill) Luo",
    imgUrl:
      "https://avatars2.githubusercontent.com/u/10513364?s=460&u=a129aade5f9a7a92cf06172b47d67ccefc736933&v=4",
    url: "https://github.com/bluebill1049",
	bio: "I started my career as a Designer/Developer, but I have been passionate about building/creating since I was little. Building open source projects has become my hobby, and helping thousands of developers around the world has become my passion. React-Hook-Form is a dream come true.",
    interests: ["🎮 games", "🚗 cars"],
  },
]

export default ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="About us" location={location} />
      <div className={containerStyle.container}>
        <main className={styles.root}>
          <h1 className={typographyStyles.headingWithTopMargin} id="main">
            Who we are?
          </h1>
          <p className={typographyStyles.subHeading}>
Passionate engineers who want to contribute to the community and help others.
          </p>

          <ul
            className={styles.contentList}
            style={{
              marginTop: 50,
            }}
          >
            {data.map(({ url, imgUrl, name, bio }) => (
              <li>
                <section>
                  <a
                    href={url}
                    style={{
                      position: "relative",
                      display: "block",
                    }}
                  >
                    <img src={imgUrl} />
                  </a>
                  <p className={styles.name}>{name}</p>
                  <p>{bio}</p>
                </section>
              </li>
            ))}
          </ul>
        </main>

        <Footer currentLanguage="en" />
      </div>
    </Layout>
  )
}
