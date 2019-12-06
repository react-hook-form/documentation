import * as React from "react"
import styled from "styled-components"
import { HeadingWithTopMargin, SubHeading, Title } from "../styles/typography"
import Footer from "./Footer"
import { Container } from "../styles/containers"
import breakpoints from "../styles/breakpoints"
import colors from "../styles/colors"
import { useStateMachine } from "little-state-machine"
import nav from "../data/nav"
import generic from "../data/generic"

const Root = styled.div`
  margin: 0 20px 40px;
  padding-bottom: 40px;
`

const ContentList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;

  @media ${breakpoints.fromLargeScreen} {
    display: grid;
    max-width: 1280px;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    margin: 0 auto;
  }
`

const Article = styled.article`
  margin-bottom: 30px;

  & img {
    object-fit: contain;
    height: 100px;
    width: 100%;
    border: 1px solid ${colors.lightBlue};
    border-radius: 4px;
  }

  & > a {
    text-decoration: none;
    color: white;
  }

  h3 {
    margin: 5px 0;
    font-size: 18px;
  }

  p {
    margin: 5px 0;
  }
`

export default function ResourcePage({ defaultLang }: { defaultLang: string }) {
  const {
    state: { language },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }

  return (
    <Container>
      <Root>
        <HeadingWithTopMargin id="main">
          {nav[currentLanguage].resources}
        </HeadingWithTopMargin>
        <SubHeading>
          {generic.blog[currentLanguage]}, {generic.video[currentLanguage]} &{" "}
          {generic.newsletter[currentLanguage]}
        </SubHeading>

        <Title>{generic.blog[currentLanguage]}</Title>

        <ContentList>
          <li>
            <Article>
              <a
                href="https://blog.logrocket.com/react-hook-form-vs-formik-a-technical-and-performance-comparison/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  React Hook Form vs. Formik: A technical and performance
                  comparison
                </h3>
              </a>

              <p>
                <a
                  href="https://blog.logrocket.com/author/siegfriedgrimbeek/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Siegfried Grimbeek
                </a>
              </p>
            </Article>
          </li>
          <li>
            <Article>
              <a
                href="https://medium.com/better-programming/build-the-next-generation-of-forms-with-react-hooks-forms-b4f2039e51c1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Build the Next Generation of Forms With React Hooks Forms
                </h3>
              </a>

              <p>
                <a
                  href="https://medium.com/@riccardogiorato"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Riccardo Giorato
                </a>
              </p>
            </Article>
          </li>
          <li>
            <Article>
              <a
                href="https://nordschool.com/react-hook-form/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Pain-Free Forms with React Hook Form</h3>
              </a>

              <p>
                <a
                  href="https://mansour.blog/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ahmed Mansour
                </a>
              </p>
            </Article>
          </li>
          <li>
            <Article>
              <a
                href="https://cloud.tencent.com/developer/article/1520536"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>React Hook form 表单校验</h3>
              </a>

              <p>
                <a
                  href="https://cloud.tencent.com/developer/user/5206638"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  我已经洗完澡了
                </a>
              </p>
            </Article>
          </li>
          <li>
            <Article>
              <a
                href="https://velog.io/@iamchanii/react-hooks-form-%EC%9D%84-%EC%86%8C%EA%B0%9C%ED%95%A9%EB%8B%88%EB%8B%A4-54k0rrj6m7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>라이브러리 추천: react-hook-form</h3>
              </a>

              <p>
                <a
                  href="https://velog.io/@iamchanii"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  이찬희
                </a>
              </p>
            </Article>
          </li>
          <li>
            <Article>
              <a
                href="https://blog.logrocket.com/popular-react-hook-libraries/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Popular React Hook libraries</h3>
              </a>

              <p>
                <a
                  href="https://blog.logrocket.com/author/raphaelugwu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Raphael Ugwu
                </a>
              </p>
            </Article>
          </li>
          <li>
            <Article>
              <a
                href="https://dev.to/bluebill1049/form-validation-with-hook-in-3kb-3d0l"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>React form validation with Hook in 5kB</h3>
              </a>

              <p>
                <a
                  href="https://dev.to/bluebill1049"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bill Luo
                </a>
              </p>
            </Article>
          </li>
          <li>
            <Article>
              <a
                href="https://dev.to/bluebill1049/uncontrolled-form-for-react-2b3n"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>⛓ Uncontrolled form validation with React</h3>
              </a>

              <p>
                <a
                  href="https://dev.to/bluebill1049"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bill Luo
                </a>
              </p>
            </Article>
          </li>
        </ContentList>

        <Title>{generic.newsletter[currentLanguage]}</Title>

        <ContentList>
          <li>
            <Article>
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
            </Article>
          </li>
          <li>
            <Article>
              <a
                href="https://react.statuscode.com/issues/159"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>React Status</h3>
                <p>
                  It’s not just an interesting project, but it has one of the
                  best project homepages I’ve seen too, complete with code
                  comparisons with similar libraries. GitHub repo.
                </p>
              </a>
            </Article>
          </li>
          <li>
            <Article>
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
            </Article>
          </li>
          <li>
            <Article>
              <a
                href="http://reactjsnewsletter.com/issues/179#start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>React.js Newsletter</h3>
                <p>
                  It’s not just an interesting project, but it has one of the
                  best project homepages I’ve seen too, complete with code
                  comparisons with similar libraries. GitHub repo.
                </p>
              </a>
            </Article>
          </li>
          <li>
            <Article>
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
            </Article>
          </li>
          <li>
            <Article>
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
            </Article>
          </li>
          <li>
            <Article>
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
            </Article>
          </li>
        </ContentList>

        <Title>{generic.video[currentLanguage]}</Title>
        <ContentList>
          <li>
            <Article>
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
            </Article>
          </li>
          <li>
            <Article>
              <a
                href="https://www.youtube.com/watch?v=bU_eq8qyjic&t=38s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  The best way to create forms in React
                </h3>
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
            </Article>
          </li>
        </ContentList>

        <Footer currentLanguage={currentLanguage} />
      </Root>
    </Container>
  )
}
