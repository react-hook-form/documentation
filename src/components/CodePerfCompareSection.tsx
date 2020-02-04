import * as React from "react"
import { SimpleImg } from "react-simple-img"
import { AnimateGroup, Animate } from "react-simple-animate"
// @ts-ignore
import formik from "../images/formik.min.png"
// @ts-ignore
import hookFrom from "../images/hookform.min.png"
// @ts-ignore
import reduxForm from "../images/reduxform.min.png"
// @ts-ignore
import reactHookFormVideo from "../images/react-hook-form-test.min.mp4"
// @ts-ignore
import formikVideo from "../images/formik-test.min.mp4"
// @ts-ignore
import reduxFormVideo from "../images/redux-form-test.min.mp4"
import home from "../data/home"
import containerStyles from "../styles/container.module.css"
import typographyStyles from "../styles/typography.module.css"
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
      <div className={containerStyles.centerContent}>
        <h1 className={typographyStyles.h1} id="rendering">
          {home.rendering[currentLanguage].title}
        </h1>

        <p>{home.rendering[currentLanguage].description}</p>
      </div>

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
                {home.rendering[currentLanguage].totalReRender}{" "}
                <b className={typographyStyles.note}>30+</b>
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
                {home.rendering[currentLanguage].totalReRender}{" "}
                <b className={typographyStyles.note}>3</b>
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
                {home.rendering[currentLanguage].totalReRender}{" "}
                <b className={typographyStyles.note}>30+</b>
              </p>
            </section>
          )}
        />
      </section>

      <div className={containerStyles.centerContent}>
        <h1 className={typographyStyles.h1}>
          {home.mount[currentLanguage].title}
        </h1>

        {home.mount[currentLanguage].description}
      </div>

      <h2
        className={typographyStyles.title}
        style={{
          marginTop: 40,
        }}
      >
        React Hook Form
      </h2>
      <div className={styles.imgSection}>
        <ul>
          <li>{home.mount[currentLanguage].totalMount}: 1</li>
          <li>{home.mount[currentLanguage].totalChange}: 1</li>
          <li>
            {home.mount[currentLanguage].totalTime}:{" "}
            <b className={typographyStyles.note}>1800ms</b>
          </li>
        </ul>
        <SimpleImg
          src={hookFrom}
          placeholder={false}
          height={163}
          alt="React Hook Form performance"
        />
      </div>

      <h2 className={typographyStyles.title}>Formik</h2>
      <div className={styles.imgSection}>
        <ul>
          <li>{home.mount[currentLanguage].totalMount}: 6</li>
          <li>{home.mount[currentLanguage].totalChange}: 1</li>
          <li>
            {home.mount[currentLanguage].totalTime}:{" "}
            <b className={typographyStyles.note}>2070ms</b>
          </li>
        </ul>
        <SimpleImg
          height={230}
          src={formik}
          placeholder={false}
          alt="Formik performance"
        />
      </div>

      <h2 className={typographyStyles.title}>Redux Form</h2>
      <div className={styles.imgSection}>
        <ul>
          <li>{home.mount[currentLanguage].totalMount}: 17</li>
          <li>{home.mount[currentLanguage].totalChange}: 2</li>
          <li>
            {home.mount[currentLanguage].totalTime}:{" "}
            <b className={typographyStyles.note}>2380ms</b>
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
