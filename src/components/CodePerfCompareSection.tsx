import { memo } from "react"
import { SimpleImg } from "react-simple-img"
import { AnimateGroup } from "react-simple-animate"
import home from "../data/home"
import containerStyles from "../styles/container.module.css"
import typographyStyles from "../styles/typography.module.css"
import styles from "./CodePerfCompareSection.module.css"

function CodePerfCompareSection({ isPlayRender }: { isPlayRender: boolean }) {
  return (
    <AnimateGroup play={isPlayRender}>
      <div className={containerStyles.centerContent}>
        <h1 className={typographyStyles.h1}>{home.mount.title}</h1>

        {home.mount.description}
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
          <li>{home.mount.totalMount}: 1</li>
          <li>{home.mount.totalChange}: 1</li>
          <li>
            {home.mount.totalTime}:{" "}
            <b className={typographyStyles.note}>1800ms</b>
          </li>
        </ul>
        <SimpleImg
          src="/images/hookform.min.png"
          placeholder={false}
          height={163}
          alt="React Hook Form performance"
        />
      </div>

      <h2 className={typographyStyles.title}>Others</h2>
      <div className={styles.imgSection}>
        <ul>
          <li>{home.mount.totalMount}: 6</li>
          <li>{home.mount.totalChange}: 1</li>
          <li>
            {home.mount.totalTime}:{" "}
            <b className={typographyStyles.note}>2070ms</b>
          </li>
        </ul>
        <SimpleImg
          height={230}
          src="/images/formik.min.png"
          placeholder={false}
          alt="Formik performance"
        />
      </div>

      <div className={styles.imgSection}>
        <ul>
          <li>{home.mount.totalMount}: 17</li>
          <li>{home.mount.totalChange}: 2</li>
          <li>
            {home.mount.totalTime}:{" "}
            <b className={typographyStyles.note}>2380ms</b>
          </li>
        </ul>
        <SimpleImg
          height={365}
          src="/images/reduxform.min.png"
          placeholder={false}
          alt="Redux Form performance"
        />
      </div>
    </AnimateGroup>
  )
}

export default memo(CodePerfCompareSection)
