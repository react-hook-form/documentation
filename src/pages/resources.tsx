import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "../styles/containers"
import { HeadingWithTopMargin, SubHeading, Title } from "../styles/typography"
import colors from "../styles/colors"
import breakpoints from "../styles/breakpoints"
import Footer from "../components/Footer"
import { useStateMachine } from "little-state-machine"

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

const Resources = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => {
  const {
    state: { language },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage ? language : { currentLanguage: "en" }

  return (
    <Layout location={location} defaultLang="zh">
      <Seo title="Resources" location={location} />

      <Container>
        <Root>
          <HeadingWithTopMargin id="main">Resources</HeadingWithTopMargin>
          <SubHeading>
            Relevant articles/blog and newsletter mentions
          </SubHeading>

          <Title>Articles/Blog</Title>

          <ContentList>
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
                  <a href="https://medium.com/@riccardogiorato">
                    Riccardo Giorato
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
                  <a href="https://cloud.tencent.com/developer/user/5206638">
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
                  <a href="https://velog.io/@iamchanii">이찬희</a>
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
                  <a href="https://blog.logrocket.com/author/raphaelugwu/">
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
                  <a href="https://dev.to/bluebill1049">Bill Luo</a>
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
                  <a href="https://dev.to/bluebill1049">Bill Luo</a>
                </p>
              </Article>
            </li>
          </ContentList>

          <Title>Newsletter</Title>

          <ContentList>
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
                    Performant, flexible and extensible forms with easy to use
                    for validation.
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
          </ContentList>

          <Footer currentLanguage={currentLanguage} />
        </Root>
      </Container>
    </Layout>
  )
}
export default Resources
