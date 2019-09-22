import * as React from "react"
import styled from "styled-components"
import { H1, Title } from "../styles/typography"
import Link from "../styles/link"
import { SimpleImg } from "react-simple-img"
import colors from "../styles/colors"
import track from "./utils/track"
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

const Wrapper = styled.section`
  text-align: center;

  & > p {
    max-width: 1024px;
    display: block;
    margin: 0 auto;
  }

  & > img {
    max-width: 100%;
    border-radius: 4px;

    @media (min-width: 768px) {
      border-radius: 10px;
    }
  }

  & > h2 {
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
  }
`

const ImgSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 1440px;
    margin: 0 auto;
  }

  & > img {
    align-self: center;
    border-radius: 4px;
    max-width: 100%;
    margin: 20px 0;

    @media (min-width: 768px) {
      max-width: 80%;
      margin: 0;
      margin-bottom: 40px;
    }
  }

  & ul {
    max-width: 100%;
    list-style: none;
    min-width: 250px;
    padding-left: 0;
    margin: 0 15px 0 0;

    & > li {
      text-align: left;
      padding: 2px 0;
      font-size: 16px;

      & > strong {
        color: ${colors.lightPink};
      }
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
    display: grid;
    transition: 1s all;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-column-gap: 40px;
    height: 450px;
    max-width: 1100px;
    margin-left: auto;
    margin-top: 40px;
    margin-right: auto;
    overflow-y: hidden;

    & > section {
      & > video {
        height: 400px;
        border-radius: 10px;
      }

      & > p {
        margin: 10px 0;

        & > strong {
          color: ${colors.lightPink};
        }
      }
    }
  }
`

const MobileText = styled.p`
  display: block;

  @media ${breakpoints.fromMediumScreen} {
    display: none !important;
  }
`

export default function CodePerfCompareSection() {
  return (
    <Wrapper>
      <H1>Performance Comparison</H1>

      <p>
        Do you ever wonder how many component re-renders have been triggered by
        the user?
      </p>

      <MobileText>
        You can swipe through the following videos to see how they work.
      </MobileText>

      <VideoWrapper>
        <section>
          <video controls autoPlay playsInline muted loop>
            <source src={formikVideo} type="video/mp4" />
          </video>
          <p>
            Total re-renders: <strong>30+</strong>
          </p>
        </section>
        <section>
          <video controls autoPlay playsInline muted loop>
            <source src={reactHookFormVideo} type="video/mp4" />
          </video>
          <p>
            Total re-renders: <strong>3</strong>
          </p>
        </section>
        <section>
          <video controls autoPlay playsInline muted loop>
            <source src={reduxFormVideo} type="video/mp4" />
          </video>
          <p>
            Total re-renders: <strong>30+</strong>
          </p>
        </section>
      </VideoWrapper>

      <p>
        The following results demonstrate: how long it took to render the
        components. Results are captured under 6x CPU slow down on App start
        with Chrome dev tools' performance tab, and code is from the section
        above 'Library Code Comparison'.
      </p>
      <Title
        style={{
          marginTop: 50,
        }}
      >
        React Hook Form
      </Title>
      <ImgSection>
        <ul>
          <li>No. of mount(s): 1</li>
          <li>No. of committing change(s): 1</li>
          <li>
            Total time: <strong>1800ms</strong>
          </li>
        </ul>
        <SimpleImg
          src={hookFrom}
          placeholder={false}
          alt="React Hook Form performance"
        />
      </ImgSection>
      <Title>Formik</Title>
      <ImgSection>
        <ul>
          <li>No. of mount(s): 6</li>
          <li>No. of committing change(s): 1</li>
          <li>
            Total time: <strong>2070ms</strong>
          </li>
        </ul>
        <SimpleImg src={formik} placeholder={false} alt="Formik performance" />
      </ImgSection>
      <Title>Redux Form</Title>
      <ImgSection>
        <ul>
          <li>No. of mount(s): 17</li>
          <li>No. of committing change(s): 2</li>
          <li>No. of update(s): 2</li>
          <li>
            Total time: <strong>2380ms</strong>
          </li>
        </ul>
        <SimpleImg
          src={reduxForm}
          placeholder={false}
          alt="Redux Form performance"
        />
      </ImgSection>

      <p style={{ marginBottom: 40 }}>
        <span style={{ fontSize: 20 }}>⚠</span> Want to see more intense
        performance tests?{" "}
        <Link
          href="https://github.com/bluebill1049/react-hook-form-performance-compare"
          rel="noopener noreferrer"
          onClick={() => {
            track({
              category: "Link",
              label: "Check out the result for 1000 fields within a form here",
              action: "Click - View Performance Test Repo",
            })
          }}
        >
          Check out the result of 1000 fields within a form here
        </Link>
        .
      </p>
    </Wrapper>
  )
}
