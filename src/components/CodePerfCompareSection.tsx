import * as React from "react"
import { SimpleImg } from "react-simple-img"
import { AnimateGroup, Animate } from "react-simple-animate"
import formik from "../images/formik.min.png"
import hookFrom from "../images/hookform.min.png"
import reduxForm from "../images/reduxform.min.png"
import reactHookFormVideo from "../images/react-hook-form-test.min.mp4"
import formikVideo from "../images/formik-test.min.mp4"
import home from "../data/home"
import * as containerStyles from "../styles/container.module.css"
import * as typographyStyles from "../styles/typography.module.css"
import * as styles from "./CodePerfCompareSection.module.css"

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Barbell</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M48 256h416"
          />
          <rect
            x="384"
            y="128"
            width="32"
            height="256"
            rx="16"
            ry="16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <rect
            x="96"
            y="128"
            width="32"
            height="256"
            rx="16"
            ry="16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <rect
            x="32"
            y="192"
            width="16"
            height="128"
            rx="8"
            ry="8"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <rect
            x="464"
            y="192"
            width="16"
            height="128"
            rx="8"
            ry="8"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>
        <h1 className={typographyStyles.h1} id="rendering">
          {home.rendering[currentLanguage].title}
        </h1>

        {home.rendering[currentLanguage].description}
      </div>

      <section className={styles.videoWrapper}>
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
      </section>

      <div className={containerStyles.centerContent}>
        <svg viewBox="0 0 512 512">
          <path
            d="M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 002.33 2.77h0a2.36 2.36 0 001.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 00-2.44-2.75h0a2.42 2.42 0 00-1.95 1z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>

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

      <h2 className={typographyStyles.title}>Others</h2>
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
    </AnimateGroup>
  )
}

export default React.memo(CodePerfCompareSection)
