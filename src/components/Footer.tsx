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
        Designed and Built by{" "}
        <a
          href="https://twitter.com/bluebill1049"
          target="_blank"
          rel="noopener noreferrer"
          title="Bill Luo Twitter"
        >
          @Bill Luo
        </a>{" "}
        ={" "}
        <a
          href="https://github.com/bluebill1049/react-simple-animate"
          target="_blank"
          rel="noopener noreferrer"
          title="React Simple Animate Github"
        >
          React Simple Animate
        </a>{" "}
        ✚{" "}
        <a
          rel="noopener noreferrer"
          href="https://github.com/bluebill1049/little-state-machine"
          target="_blank"
          title="Little state machine"
        >
          Little State Machine
        </a>
      </p>
      {currentLanguage === "pt" && (
        <p>
          <a href="https://github.com/kevenleone">@kevenleone</a> and{" "}
          <a href="https://github.com/vitorboccio">@vitorboccio</a>
        </p>
      )}
      {currentLanguage === "kr" && (
        <p>
          <a href="https://github.com/jiyeonseo">@jiyeonseo</a>,{" "}
          <a href="https://github.com/iamchanii">@iamchanii</a>,{" "}
          <a href="https://github.com/purelledhand">@purelledhand</a>, 그리고{" "}
          <a href="https://github.com/adhrinae">@adhrinae</a>의 도움으로
          번역되었습니다.
        </p>
      )}
      {currentLanguage === "jp" && (
        <p>
          <a href="https://github.com/kotarella1110">@kotarella1110</a> と{" "}
          <a href="https://github.com/dowdiness">@dowdiness</a>{" "}
          によって翻訳されました。
        </p>
      )}
      <p>
        {generic.support[currentLanguage]}{" "}
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
