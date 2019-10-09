import * as React from "react"
import styled from "styled-components"
import { H1, Title, Note } from "../styles/typography"
import Link from "../styles/link"
import { SimpleImg } from "react-simple-img"
import colors from "../styles/colors"
import track from "./utils/track"
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
    margin: 40px auto 0;
    overflow-y: hidden;
    text-align: center;

    & > section {
      & video {
        height: 400px;
        border-radius: 10px;

        @media ${breakpoints.fromLargeScreen} {
          height: 450px;
        }
      }

      & strong {
        color: ${colors.lightPink};
      }
    }
  }
`

const MobileText = styled.p`
  display: block;
  font-size: 12px;
  margin-top: 20px !important;

  @media ${breakpoints.fromMediumScreen} {
    display: none !important;
  }
`

const props = {
  start: { transform: "translateY(100px)" },
  end: { transform: "translateY(0)" },
  easeType: "ease-in",
}

export default function CodePerfCompareSection({
  isPlayRender,
}: {
  isPlayRender: boolean
}) {
  return (
    <AnimateGroup play={isPlayRender}>
      <CenterContent>
        <H1 id="rendering">Reduce Rendering</H1>

        <p>
          Do you ever wonder how many component re-renders have been triggered
          by the user? React Hook Form embraces uncontrolled form validation to
          reduce unnecessary performance impact.
        </p>

        <MobileText>
          <Note>Note: </Note> You can swipe through the following videos to see
          how they work.
        </MobileText>
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
                Total re-renders: <strong>30+</strong>
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
                Total re-renders: <strong>3</strong>
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
                Total re-renders: <strong>30+</strong>
              </p>
            </section>
          )}
        />
      </VideoWrapper>

      <CenterContent>
        <H1>Faster Mounting</H1>

        <p>
          The following results demonstrate: how long it took to render the
          components. Results are captured under 6x CPU slow down on App start
          with Chrome dev tools' performance tab, and code is from the section
          above <a href="#codeComparison">Library Code Comparison</a>.
        </p>
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
          <li>No. of mount(s): 1</li>
          <li>No. of committing change(s): 1</li>
          <li>
            Total time: <strong>1800ms</strong>
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
          <li>No. of mount(s): 6</li>
          <li>No. of committing change(s): 1</li>
          <li>
            Total time: <strong>2070ms</strong>
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
          <li>No. of mount(s): 17</li>
          <li>No. of committing change(s): 2</li>
          <li>No. of update(s): 2</li>
          <li>
            Total time: <strong>2380ms</strong>
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
    </AnimateGroup>
  )
}
