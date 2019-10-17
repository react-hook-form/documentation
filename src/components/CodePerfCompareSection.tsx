import * as React from "react"
import styled from "styled-components"
import { H1, Note, Title } from "../styles/typography"
import { SimpleImg } from "react-simple-img"
import { AnimateGroup, Animate } from "react-simple-animate"
import breakpoints from "../styles/breakpoints"
// @ts-ignore
import formik from "../images/formik.png"
// @ts-ignore
import hookFrom from "../images/hookForm.png"
// @ts-ignore
import reduxForm from "../images/reduxForm.png"
// @ts-ignore
import reactHookFormVideo from "../images/react-hook-form-test.mp4"
// @ts-ignore
import formikVideo from "../images/formik-test.mp4"
// @ts-ignore
import reduxFormVideo from "../images/redux-form-test.mp4"
import { CenterContent } from "../styles/containers"
import home from "../data/home"

const ImgSection = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.fromMediumScreen} {
    flex-direction: row;
    max-width: 1440px;
    margin: 0 auto;
  }

  & > img {
    border-radius: 4px;
    max-width: 100%;
    margin: 20px 0;
    box-shadow: 0 0 8px #000000;
    object-fit: cover;

    @media ${breakpoints.fromMediumScreen} {
      max-width: 80%;
      margin: 0 0 40px;
    }
  }

  & ul {
    min-width: 250px;
    padding-left: 0;
    margin: 0 15px 0 0;

    & > li {
      padding: 2px 0;
      font-size: 16px;
    }
  }
`

const VideoWrapper = styled.section`
  width: 100%;
  height: 450px;
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  margin: 20px 0 40px;

  & > section:first-child {
    order: 1;

    @media ${breakpoints.fromLargeScreen} {
      order: 0;
    }
  }

  & > section {
    width: 100%;
    height: 100%;
    scroll-snap-align: start;
    flex-shrink: 0;
    overflow-y: hidden;

    & > video {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }

  @media ${breakpoints.fromMediumScreen} {
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-column-gap: 40px;
    max-width: 1100px;
    margin: 40px auto;
    overflow-y: hidden;

    & > section > video {
      height: 400px;
      border-radius: 10px;

      @media ${breakpoints.fromLargeScreen} {
        height: 450px;
      }
    }
  }
`

const props = {
  start: { transform: "translateY(100px)" },
  end: { transform: "translateY(0)" },
  easeType: "ease-in",
}

export default function CodePerfCompareSection({
  isPlayRender,
  currentLanguage,
}: {
  isPlayRender: boolean
  currentLanguage: string
}) {
  return (
    <AnimateGroup play={isPlayRender}>
      <CenterContent>
        <H1 id="rendering">{home.rendering[currentLanguage].title}</H1>

        <p>{home.rendering[currentLanguage].description}</p>
      </CenterContent>

      <VideoWrapper>
        <Animate
          {...props}
          sequenceIndex={0}
          render={({ style }) => (
            <section style={style}>
              <video controls autoPlay playsInline muted loop>
                <source src={formikVideo} type="video/mp4" />
              </video>
              <p>
                {home.rendering[currentLanguage].totalReRender} <Note>30+</Note>
              </p>
            </section>
          )}
        />

        <Animate
          {...props}
          sequenceIndex={1}
          render={({ style }) => (
            <section style={style}>
              <video controls autoPlay playsInline muted loop>
                <source src={reactHookFormVideo} type="video/mp4" />
              </video>
              <p>
                {home.rendering[currentLanguage].totalReRender} <Note>3</Note>
              </p>
            </section>
          )}
        />

        <Animate
          {...props}
          sequenceIndex={2}
          render={({ style }) => (
            <section style={style}>
              <video controls autoPlay playsInline muted loop>
                <source src={reduxFormVideo} type="video/mp4" />
              </video>
              <p>
                {home.rendering[currentLanguage].totalReRender} <Note>30+</Note>
              </p>
            </section>
          )}
        />
      </VideoWrapper>

      <CenterContent>
        <H1>{home.mount[currentLanguage].title}</H1>

        {home.mount[currentLanguage].description}
      </CenterContent>

      <Title
        style={{
          marginTop: 40,
        }}
      >
        React Hook Form
      </Title>
      <ImgSection>
        <ul>
          <li>{home.mount[currentLanguage].totalMount}: 1</li>
          <li>{home.mount[currentLanguage].totalChange}: 1</li>
          <li>
            {home.mount[currentLanguage].totalTime}: <Note>1800ms</Note>
          </li>
        </ul>
        <SimpleImg
          src={hookFrom}
          placeholder={false}
          height={163}
          alt="React Hook Form performance"
        />
      </ImgSection>

      <Title>Formik</Title>
      <ImgSection>
        <ul>
          <li>{home.mount[currentLanguage].totalMount}: 6</li>
          <li>{home.mount[currentLanguage].totalChange}: 1</li>
          <li>
            {home.mount[currentLanguage].totalTime}: <Note>2070ms</Note>
          </li>
        </ul>
        <SimpleImg
          height={230}
          src={formik}
          placeholder={false}
          alt="Formik performance"
        />
      </ImgSection>

      <Title>Redux Form</Title>
      <ImgSection>
        <ul>
          <li>{home.mount[currentLanguage].totalMount}: 17</li>
          <li>{home.mount[currentLanguage].totalChange}: 2</li>
          <li>
            {home.mount[currentLanguage].totalTime}: <Note>2380ms</Note>
          </li>
        </ul>
        <SimpleImg
          height={365}
          src={reduxForm}
          placeholder={false}
          alt="Redux Form performance"
        />
      </ImgSection>

      <p style={{ marginBottom: 40, textAlign: "center" }}>
        {home.mount[currentLanguage].performanceTests}
      </p>
    </AnimateGroup>
  )
}
