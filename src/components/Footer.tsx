import Link from "next/link"
import nav from "../data/nav"
import styles from "./Footer.module.css"
import { useRouter } from "next/router"

const Footer = () => {
  const router = useRouter()

  const locale = router.locale || "en"

  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <li>
          <Link href="/">{nav[locale].home}</Link>
        </li>
        <li>
          <Link href="/get-started">{nav[locale].getStarted}</Link>
        </li>
        <li>
          <Link href="/docs">API</Link>
        </li>
        <li>
          <Link href="/ts">TS</Link>
        </li>
        <li>
          <Link href="/advanced-usage">{nav[locale].advanced}</Link>
        </li>
        <li>
          <Link href="/faqs">{nav[locale].faqs}</Link>
        </li>
        <li>
          <Link href="/form-builder">{nav[locale].builder}</Link>
        </li>
        <li>
          <Link href="/dev-tools">DevTools</Link>
        </li>
        <li>
          <Link href="/resources">{nav[locale].resources}</Link>
        </li>
        <li>
          <Link href="/about-us">About us</Link>
        </li>
        <li>
          <Link href="/media">Media</Link>
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
          Hosted and powered by ▲ <b>Vercel</b>
        </a>
      </p>
    </footer>
  )
}

export default Footer
