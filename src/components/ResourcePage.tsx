import Footer from "./Footer"
import ResourceList from "./ResourceList"
import type { ResourceKind } from "./ResourceList"
import StarRepo from "./StarRepo"
import resources from "../data/resources"
import cards from "../styles/cards.module.css"

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
    title: "Newsletters",
    lead: "Newsletters and publications that have featured React Hook Form.",
    href: "/resources/newsletters",
  },
  binding: {
    title: "Community Integrations",
    lead: "Community-built bindings for popular UI libraries.",
    href: "/resources/3rd-party-bindings",
  },
}

export default function ResourcePage({ kind }: { kind: ResourceKind }) {
  const { title, lead } = RESOURCE_PAGES[kind]

  return (
    <div className={cards.page}>
      <main>
        <ResourceList
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
