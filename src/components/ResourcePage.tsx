import * as React from "react"
import Footer from "./Footer"
import { Animate } from "react-simple-animate"
import { useStateMachine } from "little-state-machine"
import nav from "../data/nav"
import generic from "../data/generic"
import data from "../data/resources"
import * as typographyStyles from "../styles/typography.module.css"
import * as containerStyle from "../styles/container.module.css"
import * as styles from "./ResourcePage.module.css"

const animationBase = 0.05

export default function ResourcePage({ defaultLang }: { defaultLang: string }) {
  const {
    state: { language },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }
  const [content, setContent] = React.useState(data)
  const [play, setPlay] = React.useState(false)

  const getPost = async () => {
    const result = await fetch(
      "https://hook-form-resources.vercel.app/api/list",
      {
        method: "GET",
      }
    )

    const documents = await result.json()

    documents.data.data.forEach(({ data }) => {
      if (data.type === "article") {
        content.articles = [{ ...data, version: "7" }, ...content.articles]
      } else if (data.type === "video") {
        content.videos = [{ ...data, version: "7" }, ...content.videos]
      }
    })

    setContent(content)
    setPlay(true)
  }

  React.useEffect(() => {
    getPost()
  }, [])

  return (
    <div className={containerStyle.container}>
      <main className={styles.root}>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          {nav[currentLanguage].resources}
        </h1>
        <p className={typographyStyles.subHeading}>
          {generic.blog[currentLanguage]}, {generic.video[currentLanguage]} &{" "}
          {generic.newsletter[currentLanguage]}
        </p>

        <h2 className={typographyStyles.title}>
          {generic.blog[currentLanguage]}
        </h2>

        <ul className={styles.contentList}>
          {content.articles.map(
            ({ url, title, author, authorUrl, version }, i) => {
              const index = i + 1
              let delay = 0

              if (index === 1) {
                delay = animationBase
              } else if (index % 3 === 0) {
                delay = animationBase * (Math.floor(index / 12) * 3 + 3)
              } else if (index % 3 === 1) {
                delay = animationBase * (Math.floor(index / 16) * 3 + 3)
              } else if (index % 3 === 2) {
                delay = animationBase * (Math.floor(index / 8) * 3 + 2)
              }

              return (
                <Animate
                  key={url + i}
                  play={play}
                  easeType="ease-in"
                  delay={delay}
                  start={{ transform: "translate(20px, 20px)", opacity: 0 }}
                  render={({ style }) => (
                    <li style={style}>
                      <div className={styles.tagWrapper}>
                        <p className={styles.tag}>v{version || "6"}</p>
                      </div>
                      <article className={styles.article}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={title}
                        >
                          <h3>{title}</h3>
                        </a>

                        <p className={styles.author}>
                          <a
                            href={authorUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {author}
                          </a>
                        </p>
                      </article>
                    </li>
                  )}
                />
              )
            }
          )}
        </ul>

        <h2 className={typographyStyles.title}>
          {generic.video[currentLanguage]}
        </h2>
        <ul className={styles.contentList}>
          {content.videos.map(
            ({ title, url, authorUrl, author, description, version }) => (
              <li key={title}>
                <div className={styles.tagWrapper}>
                  <p className={styles.tag}>v{version || "6"}</p>
                </div>
                <article className={styles.article}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={title}
                  >
                    <h3>{title}</h3>
                  </a>
                  <p className={styles.author}>
                    <a href={authorUrl} target="_blank" rel="noreferrer">
                      {author}
                    </a>
                  </p>
                  {typeof description === "string" ? (
                    <p>{description}</p>
                  ) : (
                    description
                  )}
                </article>
              </li>
            )
          )}
        </ul>

        <h2 className={typographyStyles.title}>
          {generic.newsletter[currentLanguage]}
        </h2>

        <ul className={styles.contentList}>
          <li>
            <article className={styles.article}>
              <a
                href="https://zerotomastery.io/blog/web-developer-monthly-october-2019/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Zero to Mastery</h3>
                <p>
                  Forms with React just got simpler with React Hook Form. Make
                  sure you scroll to the bottom to see code comparison with the
                  alternatives. Really neat!
                </p>
              </a>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://react.statuscode.com/issues/159"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>React Status #159</h3>
                <p>
                  It’s not just an interesting project, but it has one of the
                  best project homepages I’ve seen too, complete with code
                  comparisons with similar libraries. GitHub repo.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://javascriptweekly.com/issues/458"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>JavaScript Weekly</h3>
                <p>
                  Performant, flexible and extensible forms with easy to use for
                  validation.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="http://reactjsnewsletter.com/issues/179#start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>React.js Newsletter #179</h3>
                <p>
                  It’s not just an interesting project, but it has one of the
                  best project homepages I’ve seen too, complete with code
                  comparisons with similar libraries. GitHub repo.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://us15.campaign-archive.com/?u=b015626aa6028495fe77c75ea&id=df27ee2eff"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>FullStack Bulletin Newsletter</h3>
                <p>
                  A performant, flexible and extensible React (and React
                  Native!) forms library with easy to use for validation.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://syndicode.com/2019/10/30/monthly-most-popular-js-repositories-evolve-and-prosper/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Monthly most popular JavaScript repositories</h3>
                <p>
                  React Hook Form stands for React hooks for forms validation.
                  Performant, flexible and extensible forms with easy to use for
                  validation.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="http://ruanyifeng.com/blog/2019/11/weekly-issue-82.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>科技爱好者周刊：第 82 期</h3>
                <p>
                  这是一个 React 表单库，基于 React
                  Hooks，看上去代码相当简洁，star
                  也很高，也许以后可以摆脱那些笨重的表单组件了。
                </p>
              </a>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="http://reactjsnewsletter.com/issues/179#start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>React.js Newsletter #202</h3>
                <p>
                  Performant, flexible and extensible forms with easy-to-use
                  validation.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://react.statuscode.com/issues/178"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>React.js Newsletter #178</h3>
                <p>
                  There are a lot of great reviews for this library, plus it has
                  a great homepage too. Certainly worth a look if you’re
                  building or refactoring forms. GitHub repo.
                </p>
              </a>
            </article>
          </li>
        </ul>

        <Footer currentLanguage={currentLanguage} />
      </main>
    </div>
  )
}
