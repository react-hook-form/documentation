import { useEffect } from "react"
import Link from "next/link"
import home from "../data/home"
import styles from "./Footer.module.css"

const COLUMNS = [
  {
    heading: "Docs",
    links: [
      { href: "/get-started", label: "Get Started" },
      { href: "/integrations", label: "Integrations" },
      { href: "/docs", label: "API" },
      { href: "/ts", label: "TypeScript" },
      { href: "/advanced-usage", label: "Guides" },
      { href: "/migrate-v7-to-v8", label: "Migrate to v8 (beta)" },
      { href: "/faqs", label: "FAQs" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "/resources", label: "All resources" },
      { href: "/resources/articles", label: "Articles" },
      { href: "/resources/videos", label: "Videos" },
      { href: "/resources/newsletters", label: "Newsletters" },
      {
        href: "/resources/3rd-party-bindings",
        label: "Community Integrations",
      },
    ],
  },
  {
    heading: "Tools",
    links: [
      { href: "/form-builder", label: "Form Builder" },
      { href: "/dev-tools", label: "DevTools" },
      {
        href: "https://github.com/react-hook-form/react-hook-form/releases",
        label: "Releases",
      },
    ],
  },
  {
    heading: "Community",
    links: [
      { href: "/about-us", label: "About us" },
      { href: "/media", label: "Media" },
      { href: "/sponsors", label: "Sponsors" },
      {
        href: "https://opencollective.com/react-hook-form",
        label: "Open Collective",
      },
    ],
  },
]

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/react-hook-form/react-hook-form",
    viewBox: "0 0 16 16",
    path: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
  },
  {
    label: "Discord",
    href: "https://discord.gg/yYv7GZ8",
    viewBox: "0 0 127.14 96.36",
    path: "M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z",
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com/HookForm",
    viewBox: "0 0 1200 1227",
    path: "M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z",
  },
]

const isExternal = (href: string) => href.startsWith("http")

const OLD_DESIGN =
  "https://react-hook-form-website-git-old-design-hook-form.vercel.app/"

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
]

// Easter egg: the Konami code opens the old website design
function useKonamiCode(onMatch: () => void) {
  useEffect(() => {
    let position = 0
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      if (
        target.isContentEditable ||
        /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)
      )
        return

      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key
      position =
        key === KONAMI[position] ? position + 1 : key === KONAMI[0] ? 1 : 0
      if (position === KONAMI.length) {
        position = 0
        onMatch()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [onMatch])
}

const openOldDesign = () =>
  window.open(OLD_DESIGN, "_blank", "noopener,noreferrer")

export default function Footer() {
  useKonamiCode(openOldDesign)

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <img src="/images/Logo.svg" alt="" width={28} height={28} />
            <span>React Hook Form</span>
          </Link>
          <p>{home.slogan}</p>
          <ul className={styles.socials}>
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  <svg viewBox={social.viewBox} aria-hidden>
                    <path d={social.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className={styles.columns} aria-label="Footer">
          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <h2>{column.heading}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href}>
                    {isExternal(link.href) ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label} ↗
                      </a>
                    ) : (
                      <Link href={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={styles.bottom}>
        <p>
          Released under the MIT License.
          <a
            href={OLD_DESIGN}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.oldDesign}
            title="Miss the old look?"
          >
            <span aria-hidden>🕹️</span>
            <span className={styles.oldDesignLabel}>Miss the old look?</span>
          </a>
        </p>
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.vercel}
        >
          Powered by <span aria-hidden>▲</span> <b>Vercel</b>
        </a>
      </div>
    </footer>
  )
}
