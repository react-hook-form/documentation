import * as React from "react"
import { Link } from "gatsby"
import nav from "../data/nav"
import generic from "../data/generic"
import translateLink from "./logic/translateLink"
import { useStateMachine } from "little-state-machine"
import * as styles from "./Footer.module.css"

export default ({ currentLanguage }: { currentLanguage: string }) => {
  const { state } = useStateMachine()
  const lightMode = state?.setting?.lightMode

  return (
    <footer
      className={`${styles.footer} ${lightMode ? styles.lightFooter : {}}`}
    >
      <ul className={styles.links}>
        <li>
          <Link to={translateLink("/", currentLanguage)}>
            {nav[currentLanguage].home}
          </Link>
        </li>
        <li>
          <Link to={translateLink("/get-started", currentLanguage)}>
            {nav[currentLanguage].getStarted}
          </Link>
        </li>
        <li>
          <Link to={translateLink("/api", currentLanguage)}>API</Link>
        </li>
        <li>
          <Link to={translateLink("/ts", currentLanguage)}>TS</Link>
        </li>
        <li>
          <Link to={translateLink("/advanced-usage", currentLanguage)}>
            {nav[currentLanguage].advanced}
          </Link>
        </li>
        <li>
          <Link to={translateLink("/faqs", currentLanguage)}>
            {nav[currentLanguage].faqs}
          </Link>
        </li>
        <li>
          <Link to={translateLink("/form-builder", currentLanguage)}>
            {nav[currentLanguage].builder}
          </Link>
        </li>
        <li>
          <Link to={translateLink("/dev-tools", currentLanguage)}>
            DevTools
          </Link>
        </li>
        <li>
          <Link to={translateLink("/resources", currentLanguage)}>
            {nav[currentLanguage].resources}
          </Link>
        </li>
        <li>
          <Link to="/about-us">About us</Link>
        </li>
        <li>
          <Link to="/media">Media</Link>
        </li>
      </ul>
      <p>
        A project by{" "}
        <a
          href="https://www.beekai.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="BEEKAI Form builder"
        >
          <b>BEEKAI</b>
        </a>{" "}
        | Please support us by leaving a ★{" "}
        <a
          href="https://github.com/react-hook-form/react-hook-form"
          target="_blank"
          rel="noreferrer noopener"
        >
          @github
        </a>{" "}
        |{" "}
        <a
          href="https://openbase.io/js/react-hook-form"
          target="_blank"
          rel="noreferrer noopener"
        >
          Feedback
        </a>
      </p>
      <p
        style={{
          display: "inline-block",
          background: "white",
          color: "black",
          padding: "6px 20px",
          borderRadius: 4,
        }}
      >
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          Hosted on ▲ Vercel Now
        </a>
      </p>
    </footer>
  )
}
