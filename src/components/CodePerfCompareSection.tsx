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
import styles from "./CodePerfCompareSection.module.css"

const props = {
  start: { transform: "translateY(100px)" },
  end: { transform: "translateY(0)" },
  easeType: "ease-in",
}

function CodePerfCompareSection({
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

      <section className={styles.videoWrapper}>
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
      </section>

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
      <div className={styles.imgSection}>
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
      </div>

      <Title>Formik</Title>
      <div className={styles.imgSection}>
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
      </div>

      <Title>Redux Form</Title>
      <div className={styles.imgSection}>
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
      </div>

      <p style={{ marginBottom: 40, textAlign: "center" }}>
        {home.mount[currentLanguage].performanceTests}
      </p>
    </AnimateGroup>
  )
}

export default React.memo(CodePerfCompareSection)
