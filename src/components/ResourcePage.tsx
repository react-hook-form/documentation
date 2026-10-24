import Link from "next/link"
import Footer from "./Footer"
import ResourceList from "./ResourceList"
import type { ResourceKind } from "./ResourceList"
import StarRepo from "./StarRepo"
import resources from "../data/resources"
import cards from "../styles/cards.module.css"
import styles from "./ResourcePage.module.css"

export const RESOURCE_PAGES: Record<
  ResourceKind,
  { title: string; lead: string; href: string }
> = {
  article: {
    title: "Articles & Tutorials",
    lead: "Tutorials and deep dives written by the community.",
    href: "/resources/articles",
  },
  video: {
    title: "Videos",
    lead: "Video tutorials, courses and conference talks.",
    href: "/resources/videos",
  },
  newsletter: {
    title: "Newsletter Archive",
    lead: "Earlier newsletters and publications featuring React Hook Form. Browse the project’s history, or see release notes for current changes.",
    href: "/resources/newsletters",
  },
  binding: {
    title: "Community Integrations",
    lead: "Connect UI libraries with community packages and integration examples. Check each project’s documentation for supported versions.",
    href: "/resources/3rd-party-bindings",
  },
}

export default function ResourcePage({ kind }: { kind: ResourceKind }) {
  const { title, lead } = RESOURCE_PAGES[kind]

  return (
    <div className={cards.page}>
      <main>
        <ResourceList
          navigation={
            <nav
              className={styles.navigation}
              aria-label="Resource collections"
            >
              <Link href="/resources">Resources</Link>
              {(["article", "video", "binding", "newsletter"] as const).map(
                (resourceKind) => (
                  <Link
                    key={resourceKind}
                    href={RESOURCE_PAGES[resourceKind].href}
                    aria-current={kind === resourceKind ? "page" : undefined}
                  >
                    {RESOURCE_PAGES[resourceKind].title}
                  </Link>
                )
              )}
            </nav>
          }
          kind={kind}
          title={title}
          lead={lead}
          resources={resources[kind]}
        />
      </main>
      <StarRepo />
      <Footer />
    </div>
  )
}
