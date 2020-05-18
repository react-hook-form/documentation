import * as React from "react"
import Footer from "./Footer"
import { Animate } from "react-simple-animate"
import { useStateMachine } from "little-state-machine"
import nav from "../data/nav"
import generic from "../data/generic"
import data from "../data/resources"
import typographyStyles from "../styles/typography.module.css"
import containerStyle from "../styles/container.module.css"
import styles from "./ResourcePage.module.css"

export default function ResourcePage({ defaultLang }: { defaultLang: string }) {
  const {
    state: { language },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }

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
          {data.articles.map(({ url, title, author, authorUrl }, index) => (
            <Animate
              play
              easeType={"ease-in"}
              delay={(index + 1) * 0.01}
              start={{ transform: "translateY(50px)" }}
              render={({ style }) => (
                <li style={style}>
                  <article className={styles.article}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <h3>{title}</h3>
                    </a>

                    <p>
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
          ))}
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

        <h2 className={typographyStyles.title}>
          {generic.video[currentLanguage]}
        </h2>
        <ul className={styles.contentList}>
          <li>
            <article className={styles.article}>
              <a
                href="https://www.youtube.com/watch?v=-mFXqOaqgZk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>React Hook Form - custom hook for forms validation.</h3>
              </a>
              <p>
                <a
                  href="https://www.youtube.com/channel/UC9qgXurGpQzePCx928oyIZg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bill Luo
                </a>
              </p>
              <p>
                In this video tutorial, I am demonstrating how you can use
                react-hook-form to easily validate your forms.
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://www.youtube.com/watch?v=CeAkxVwsyMU"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  React Hook Form - persist multiple steps forms (Form Wizard).
                </h3>
              </a>
              <p>
                <a
                  href="https://www.youtube.com/channel/UC9qgXurGpQzePCx928oyIZg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bill Luo
                </a>
              </p>
              <p>Building persist multiple steps form with React Hook Form.</p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://www.youtube.com/watch?v=0nDGeQKLFjo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>React Hook Form - React Forms Episode II</h3>
              </a>
              <p>
                <a
                  href="https://www.youtube.com/user/jherr2006"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jack Herrington
                </a>
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://www.youtube.com/watch?v=bU_eq8qyjic&t=38s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>The best way to create forms in React</h3>
              </a>
              <p>
                <a
                  href="https://www.youtube.com/user/satansdeer1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maksim Ivanov
                </a>
              </p>
              <p>How to create forms in React.</p>
              <p>
                Right now the best way to create forms in React is to use React
                Form Hook library.
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://dev.to/bettercodingacademy/i-m-a-professional-react-developer-and-here-s-how-i-build-a-production-ready-react-node-js-app-using-typescript-and-graphql-ga8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Build a production-ready React/Node.js app using TypeScript
                  and GraphQL (React Hook Form).
                </h3>
              </a>
              <p>
                <a
                  href="https://dev.to/bettercodingacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lucas Chen
                </a>
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://www.youtube.com/watch?v=lHclVxcborY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Does this library make Redux Form obsolete? | React Hook Form
                  Tutorial | React Tutorials
                </h3>
              </a>
              <p>
                <a
                  href="https://www.youtube.com/channel/UCTD_PLq3KAUwkIIs9fk3pAA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Better Coding Academy
                </a>
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://www.youtube.com/watch?v=lHclVxcborY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>React Hook form tutorials</h3>
              </a>
              <p>
                <a
                  href="https://www.youtube.com/channel/UCbaiPi4-JPvIlzR4_7-kAfA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HicoTek
                </a>
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://www.youtube.com/watch?v=fpwnCGgc9A8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  React Hook Form Talk and Demo by its Author Bill Luo aka
                  @bluebill1049
                </h3>
              </a>
              <p>
                <a
                  href="https://www.youtube.com/channel/UCorlLn2oZfgOJ-FUcF2eZ1A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ReactEurope
                </a>
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://www.youtube.com/watch?v=5MsXpmh3Un8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Using React Hook Form with Ionic React Components</h3>
              </a>
              <p>
                <a
                  href="https://www.youtube.com/channel/UCMCcqbJpyL3LAv3PJeYz2bg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aaron Saunders
                </a>
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://www.youtube.com/watch?v=oXY_sSfjlSw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Easy Way of Form Validation with React Hook Form</h3>
              </a>
              <p>
                <a
                  href="https://www.youtube.com/channel/UCS3-MF_4ADqglU2OSly4vIw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  For Those Who Code
                </a>
              </p>
            </article>
          </li>
        </ul>

        <Footer currentLanguage={currentLanguage} />
      </main>
    </div>
  )
}
