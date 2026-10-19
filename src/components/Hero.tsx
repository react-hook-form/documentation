import { useEffect, useState } from "react"
import Link from "next/link"
import home from "../data/home"
import FormPlayground from "./FormPlayground"
import copyClipBoard from "./utils/copyClipBoard"
import styles from "./Hero.module.css"

const INSTALL = "npm install react-hook-form"

export default function Hero() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const id = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(id)
  }, [copied])

  return (
    <>
      <section className={styles.hero} id="main">
        <h1 className={styles.headline}>
          Build forms <span>without the friction.</span>
        </h1>
        <p className={styles.slogan}>{home.slogan}</p>

        <div className={styles.actions}>
          <Link href="/get-started" className={styles.primary}>
            {home.getStarted}
          </Link>
          <Link href="/docs" className={styles.secondary}>
            API Documentation
          </Link>
        </div>

        <button
          type="button"
          className={styles.install}
          onClick={() =>
            void copyClipBoard(INSTALL).then(() => setCopied(true))
          }
          aria-label="Copy install command"
        >
          <span className={styles.prompt}>$</span>
          <code>{INSTALL}</code>
          <span className={styles.copyHint}>{copied ? "Copied" : "Copy"}</span>
        </button>
      </section>

      <section className={styles.quickStart} aria-labelledby="quick-start">
        <p className={styles.eyebrow} id="quick-start">
          Quick start · try it
        </p>
        <FormPlayground />
      </section>
    </>
  )
}
