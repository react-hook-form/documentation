import { useState, useEffect, useRef, type CSSProperties } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import clsx from "clsx"
import nav from "../data/nav"
import Toggle from "./Toggle"
import CommandSearch, { openCommandSearch } from "./CommandSearch"
import VersionSwitcher from "./VersionSwitcher"
import GitHubStars from "./GitHubStars"
import { useTheme } from "next-themes"
import styles from "./Nav.module.css"

const PRIMARY = [
  { href: "/get-started", label: nav.getStarted },
  { href: "/docs", label: "API", match: ["/docs"] },
  {
    href: "/guides",
    label: nav.guides,
    match: ["/guides", "/integrations", "/ts", "/faqs", "/migrate-v7-to-v8"],
  },
  { href: "/advanced-usage", label: nav.advanced },
]

const RESOURCES = [
  {
    heading: "Explore",
    links: [
      { href: "/resources", label: "Resource directory" },
      { href: "/resources/articles", label: "Articles & Tutorials" },
      { href: "/resources/videos", label: "Videos" },
      { href: "/resources/newsletters", label: "Newsletter archive" },
    ],
  },
  {
    heading: "Tools & community",
    links: [
      { href: "/form-builder", label: nav.tools.formBuilder },
      { href: "/dev-tools", label: nav.tools.devTools },
      {
        href: "/resources/3rd-party-bindings",
        label: "Community Integrations",
      },
      { href: "https://discord.gg/yYv7GZ8", label: "Discord ↗" },
      {
        href: "https://github.com/react-hook-form/react-hook-form",
        label: "GitHub ↗",
      },
    ],
  },
]

// Keep the same resource hierarchy on desktop and mobile.
const MOBILE_GROUPS = RESOURCES

const RELEASES_URL =
  "https://github.com/react-hook-form/react-hook-form/releases"

const isExternal = (href: string) => href.startsWith("http")

// Matches the page background so mobile Safari tints its chrome to blend in.
const THEME_COLORS = { dark: "#081229", light: "#ffffff" }

const TAB_ICONS = {
  home: (
    <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
  ),
  start: <path d="M5 4l14 8-14 8z" />,
  api: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
}

const TABS = [
  { href: "/", label: nav.home, icon: TAB_ICONS.home },
  { href: "/get-started", label: "Start", icon: TAB_ICONS.start },
  { href: "/docs", label: "API", icon: TAB_ICONS.api, match: ["/docs"] },
] as const

export default function Nav() {
  const { asPath } = useRouter()
  const pathname = asPath.split(/[?#]/)[0]
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const resourcesRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const color = THEME_COLORS[resolvedTheme === "light" ? "light" : "dark"]
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", color)
  }, [resolvedTheme])

  const isActive = (href: string, match?: string[]) =>
    pathname === href || !!match?.some((m) => pathname.startsWith(m))
  const resourcesActive =
    pathname === "/resources" ||
    pathname.startsWith("/resources/") ||
    RESOURCES.some((group) =>
      group.links.some((link) => pathname === link.href)
    )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setResourcesOpen(false)
    setMobileOpen(false)
  }, [asPath])

  useEffect(() => {
    if (!resourcesOpen) return
    const onClick = (e: MouseEvent) => {
      if (!resourcesRef.current?.contains(e.target as Node))
        setResourcesOpen(false)
    }
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setResourcesOpen(false)
    document.addEventListener("mousedown", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [resourcesOpen])

  // Lock the root, not <body>: `overflow: hidden` on body makes it a scroll
  // container, which detaches the sticky header from the viewport.
  useEffect(() => {
    const root = document.documentElement
    root.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      root.style.overflow = ""
    }
  }, [mobileOpen])

  const routeTab = TABS.findIndex((tab) =>
    "match" in tab
      ? tab.match.some((m) => pathname.startsWith(m))
      : pathname === tab.href
  )
  // Search (3) never holds the indicator; Menu (4) does while open.
  const activeTab = mobileOpen ? 4 : routeTab

  const renderLink = (
    link: { href: string; label: string },
    className?: string
  ) =>
    isExternal(link.href) ? (
      <a
        key={link.href}
        href={link.href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label}
      </a>
    ) : (
      <Link
        key={link.href}
        href={link.href}
        className={clsx(className, isActive(link.href) && styles.current)}
        aria-current={isActive(link.href) ? "page" : undefined}
      >
        {link.label}
      </Link>
    )

  return (
    <>
      <header className={clsx(styles.header, scrolled && styles.scrolled)}>
        <div className={styles.inner}>
          <Link
            href="/"
            className={styles.brand}
            aria-label="React Hook Form home"
          >
            <img
              className={styles.logo}
              src="/images/Logo.svg"
              alt=""
              width={30}
              height={30}
            />
            <span>React Hook Form</span>
          </Link>

          <nav className={styles.primary} aria-label="Main">
            {PRIMARY.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  styles.navLink,
                  isActive(link.href, link.match) && styles.navLinkActive
                )}
                aria-current={
                  isActive(link.href, link.match) ? "page" : undefined
                }
              >
                {link.label}
              </Link>
            ))}

            <div className={styles.dropdown} ref={resourcesRef}>
              <button
                type="button"
                className={clsx(
                  styles.navLink,
                  resourcesActive && styles.navLinkActive
                )}
                aria-expanded={resourcesOpen}
                aria-haspopup="true"
                onClick={() => setResourcesOpen((v) => !v)}
              >
                {nav.resources}
                <svg viewBox="0 0 12 12" aria-hidden>
                  <path d="M3 4.5 6 7.5 9 4.5" />
                </svg>
              </button>
              {resourcesOpen && (
                <div className={styles.panel}>
                  {RESOURCES.map((group) => (
                    <div key={group.heading} className={styles.panelGroup}>
                      <p>{group.heading}</p>
                      {group.links.map((link) =>
                        renderLink(link, styles.panelLink)
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a
              href={RELEASES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              {nav.releases}
            </a>
          </nav>

          <div className={styles.controls}>
            <CommandSearch />
            <span className={styles.desktopControl}>
              <VersionSwitcher />
            </span>
            <Toggle />
            <span className={clsx(styles.desktopControl, styles.github)}>
              <GitHubStars />
            </span>
          </div>
        </div>
      </header>
      {mobileOpen && (
        <nav className={styles.mobilePanel} aria-label="Mobile">
          <div className={styles.mobileGroup}>
            <Link
              href="/"
              className={clsx(
                styles.panelLink,
                pathname === "/" && styles.current
              )}
            >
              {nav.home}
            </Link>
            {PRIMARY.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  styles.panelLink,
                  isActive(link.href, link.match) && styles.current
                )}
              >
                {link.label}
              </Link>
            ))}
            {renderLink(
              { href: RELEASES_URL, label: `${nav.releases} ↗` },
              styles.panelLink
            )}
          </div>
          {MOBILE_GROUPS.map((group) => (
            <div key={group.heading} className={styles.mobileGroup}>
              <p>{group.heading}</p>
              {group.links.map((link) => renderLink(link, styles.panelLink))}
            </div>
          ))}
          <div className={styles.mobileFooter}>
            <VersionSwitcher />
            <GitHubStars />
          </div>
        </nav>
      )}

      <nav
        className={styles.tabBar}
        aria-label="Quick navigation"
        style={{ "--tab-index": activeTab } as CSSProperties}
      >
        <span
          className={clsx(
            styles.tabIndicator,
            activeTab < 0 && styles.tabIndicatorHidden
          )}
          aria-hidden
        />
        {TABS.map((tab, i) => {
          const active = i === activeTab
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={clsx(styles.tab, active && styles.tabActive)}
              aria-current={active ? "page" : undefined}
            >
              <svg viewBox="0 0 24 24" aria-hidden>
                {tab.icon}
              </svg>
              <span>{tab.label}</span>
            </Link>
          )
        })}
        <button
          type="button"
          className={styles.tab}
          onClick={() => {
            setMobileOpen(false)
            openCommandSearch()
          }}
        >
          <svg viewBox="0 0 24 24" aria-hidden>
            {TAB_ICONS.search}
          </svg>
          <span>Search</span>
        </button>
        <button
          type="button"
          className={clsx(styles.tab, mobileOpen && styles.tabActive)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" aria-hidden>
            {mobileOpen ? TAB_ICONS.close : TAB_ICONS.menu}
          </svg>
          <span>{mobileOpen ? "Close" : "Menu"}</span>
        </button>
      </nav>
    </>
  )
}
