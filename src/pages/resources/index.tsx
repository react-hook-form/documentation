import Link from "next/link"
import clsx from "clsx"
import Seo from "../../components/seo"
import Footer from "../../components/Footer"
import PageHeader from "../../components/PageHeader"
import { RESOURCE_ICONS } from "../../components/ResourceList"
import type { ResourceKind } from "../../components/ResourceList"
import { RESOURCE_PAGES } from "../../components/ResourcePage"
import resources from "../../data/resources"
import cards from "../../styles/cards.module.css"

const KINDS = Object.keys(RESOURCE_PAGES) as ResourceKind[]

const TOOLS = [
  {
    title: "Integration Guides",
    lead: "Use React Hook Form with Zod, Yup, Next.js, shadcn/ui and React 19.",
    href: "/integrations",
  },
  {
    title: "Form Builder",
    lead: "Generate a form and its validation code visually.",
    href: "/form-builder",
  },
  {
    title: "DevTools",
    lead: "Inspect form state and registered fields while you develop.",
    href: "/dev-tools",
  },
]

export default function ResourcesIndex() {
  return (
    <>
      <Seo
        title="React Hook Form Resources"
        description="Articles, videos, newsletters, bindings and tools for React Hook Form."
      />
      <div className={cards.page}>
        <PageHeader
          eyebrow="Resources"
          title="Learn and build"
          lead="Guides, talks and tools from the React Hook Form community."
        />
        <main>
          <ul className={clsx(cards.grid, cards.grid3)}>
            {KINDS.map((kind) => {
              const { title, lead, href } = RESOURCE_PAGES[kind]
              return (
                <li key={kind} className={cards.card}>
                  <Link href={href} className={cards.cardLink}>
                    <span className={cards.icon}>{RESOURCE_ICONS[kind]}</span>
                    <span className={cards.badge}>
                      {resources[kind].length}
                    </span>
                    <h2 className={cards.title}>{title}</h2>
                    <p className={cards.text}>{lead}</p>
                    <span className={cards.more} aria-hidden>
                      Browse →
                    </span>
                  </Link>
                </li>
              )
            })}
            {TOOLS.map(({ title, lead, href }) => (
              <li key={href} className={cards.card}>
                <Link href={href} className={cards.cardLink}>
                  <span className={cards.icon} aria-hidden>
                    {`</>`}
                  </span>
                  <h2 className={cards.title}>{title}</h2>
                  <p className={cards.text}>{lead}</p>
                  <span className={cards.more} aria-hidden>
                    Open →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </main>
        <Footer />
      </div>
    </>
  )
}
