import { useEffect, useState } from "react"
import type React from "react"
import { useForm } from "react-hook-form"
import clsx from "clsx"
import dynamic from "next/dynamic"
import type { DevtoolUIProps } from "@hookform/devtools/dist/devToolUI"
import Form from "./Form"
import Footer from "./Footer"
import PageHeader from "./PageHeader"
import { PrismSyntaxHighlight } from "./mdx/code"
import code from "./codeExamples/devTool"
import copyClipBoard from "./utils/copyClipBoard"
import content from "../data/devtools"
import cards from "../styles/cards.module.css"
import styles from "./DevTools.module.css"

const DevTool = dynamic<DevtoolUIProps>(
  () =>
    // @ts-expect-error no types are available
    import("@hookform/devtools/dist/index.cjs.development").then(
      (mod) => (mod as { DevTool: React.ElementType<DevtoolUIProps> }).DevTool
    ),
  {
    ssr: false,
  }
)

const FEATURE_ICONS = [
  <svg key="react" viewBox="0 0 24 24" aria-hidden>
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.2" />
  </svg>,
  <svg key="debug" viewBox="0 0 24 24" aria-hidden>
    <rect x="7" y="7" width="10" height="13" rx="5" />
    <path d="M12 11v9M7 12H3M21 12h-4M7 17l-3 2M17 17l3 2M8 8 5 5M16 8l3-3M9.5 7a2.5 2.5 0 0 1 5 0" />
  </svg>,
  <svg key="oss" viewBox="0 0 24 24" aria-hidden>
    <circle cx="6" cy="6" r="2" />
    <circle cx="18" cy="6" r="2" />
    <circle cx="6" cy="18" r="2" />
    <path d="M6 8v8M18 8v1a4 4 0 0 1-4 4H8" />
  </svg>,
]

function useCopied() {
  const [copied, setCopied] = useState<string | null>(null)
  useEffect(() => {
    if (!copied) return
    const id = setTimeout(() => setCopied(null), 2000)
    return () => clearTimeout(id)
  }, [copied])
  return [
    copied,
    (key: string, text: string) =>
      void copyClipBoard(text).then(() => setCopied(key)),
  ] as const
}

export default function DevTools() {
  const methods = useForm({
    mode: "onChange",
  })
  const [showDevTool, setShowDevTool] = useState(false)
  const [copied, copy] = useCopied()

  return (
    <div className={cards.page}>
      <PageHeader
        eyebrow="Tools"
        title={content.title}
        lead={content.description}
      />

      <main>
        <div className={styles.heroActions}>
          <button
            type="button"
            className={styles.install}
            onClick={() => copy("hero", content.install)}
            aria-label="Copy install command"
          >
            <span className={styles.prompt}>$</span>
            <code>{content.install}</code>
            <span className={styles.copyHint}>
              {copied === "hero" ? "Copied" : "Copy"}
            </span>
          </button>
          <a
            className={styles.ghost}
            href="https://github.com/react-hook-form/react-hook-form-devtools"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repo ↗
          </a>
        </div>

        <figure className={styles.shot}>
          <div className={styles.shotBar} aria-hidden>
            <i />
            <i />
            <i />
          </div>
          <img
            src="/images/dev-tool.png"
            alt="React Hook Form DevTools panel"
          />
        </figure>

        <ul className={clsx(cards.grid, cards.grid3, styles.features)}>
          {content.features.map((feature, index) => (
            <li key={feature.title} className={cards.card}>
              <div className={cards.cardLink}>
                <span className={cards.icon}>{FEATURE_ICONS[index]}</span>
                <h2 className={cards.title}>{feature.title}</h2>
                <p className={cards.text}>{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <section className={styles.section} aria-labelledby="devtools-install">
          <p className={styles.eyebrow}>Get started</p>
          <h2 id="devtools-install">Installation</h2>

          <ol className={styles.steps}>
            <li className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepBody}>
                <h3>{content.steps[0].title}</h3>
                <p>{content.steps[0].description}</p>
                <div className={styles.editor}>
                  <div className={styles.editorBar}>
                    <span>Terminal</span>
                    <button
                      type="button"
                      className={styles.copy}
                      onClick={() => copy("install", content.install)}
                    >
                      {copied === "install" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <PrismSyntaxHighlight className="language-bash">
                    {content.install}
                  </PrismSyntaxHighlight>
                </div>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepBody}>
                <h3>{content.steps[1].title}</h3>
                <p>{content.steps[1].description}</p>
                <div className={styles.editor}>
                  <div className={styles.editorBar}>
                    <span>App.jsx</span>
                    <button
                      type="button"
                      className={styles.copy}
                      onClick={() => copy("code", code)}
                    >
                      {copied === "code" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <PrismSyntaxHighlight className="language-jsx">
                    {code}
                  </PrismSyntaxHighlight>
                </div>
              </div>
            </li>
          </ol>
        </section>

        <section className={styles.section} aria-labelledby="devtools-demo">
          <p className={styles.eyebrow}>Try it</p>
          <h2 id="devtools-demo">Live demo</h2>
          <p className={styles.lead}>{content.demoDescription}</p>

          <div className={styles.demo}>
            <div className={styles.demoForm}>
              <Form
                onSubmit={(data) => console.log(data)}
                submitData={{}}
                toggleBuilder={() => {}}
                methods={methods}
                formUpdated
                devTool
              />
            </div>

            <aside className={styles.demoSide}>
              <button
                type="button"
                className={clsx(styles.toggle, showDevTool && styles.toggleOn)}
                aria-pressed={showDevTool}
                onClick={() => setShowDevTool((v) => !v)}
              >
                <span className={styles.switch} aria-hidden />
                {showDevTool ? "DevTool on" : "Turn on DevTool"}
              </button>
              <p className={styles.toggleHint}>
                {showDevTool
                  ? "Open the panel with the pink button in the top-right corner."
                  : "Adds the DevTool panel to this page."}
              </p>

              <h3>What you can do</h3>
              <ul className={styles.checklist}>
                {content.functionality.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {showDevTool && (
          <div className={styles.devTool}>
            <DevTool control={methods.control} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
