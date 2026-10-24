import Link from "next/link"
import Seo from "../../components/seo"
import Footer from "../../components/Footer"
import PageHeader from "../../components/PageHeader"
import DirectoryCards, {
  type ResourceCard,
} from "../../components/DirectoryCards"
import { RESOURCE_ICONS } from "../../components/ResourceList"
import { RESOURCE_PAGES } from "../../components/ResourcePage"
import resources from "../../data/resources"
import cards from "../../styles/cards.module.css"
import styles from "../../components/ResourcePage.module.css"

const LEARN: ResourceCard[] = (["article", "video"] as const).map((kind) => ({
  ...RESOURCE_PAGES[kind],
  icon: RESOURCE_ICONS[kind],
  count: resources[kind].length,
}))

const TOOLS: ResourceCard[] = [
  {
    title: "DevTools",
    lead: "Inspect registered fields and form state while debugging your application.",
    href: "/dev-tools",
  },
  {
    title: "Form Builder",
    lead: "Create a form visually and generate a starting point for its validation code.",
    href: "/form-builder",
  },
  {
    ...RESOURCE_PAGES.binding,
    icon: RESOURCE_ICONS.binding,
    count: resources.binding.length,
  },
]

const COMMUNITY: ResourceCard[] = [
  {
    title: "GitHub Discussions",
    lead: "Search community answers, ask a question, or share a form pattern you have built.",
    href: "https://github.com/orgs/react-hook-form/discussions",
  },
  {
    title: "Discord",
    lead: "Talk through questions and exchange ideas with other React Hook Form developers.",
    href: "https://discord.gg/yYv7GZ8",
  },
  {
    title: "Contribute on GitHub",
    lead: "Explore the source, report a reproducible bug, or read the contribution guide.",
    href: "https://github.com/react-hook-form/react-hook-form",
  },
]

export default function ResourcesIndex() {
  return (
    <>
      <Seo
        title="React Hook Form Resources"
        description="Recommended community articles, videos, developer tools, UI integrations, and places to get help with React Hook Form."
      />
      <div className={cards.page}>
        <PageHeader
          eyebrow="Resources"
          title="From the community"
          lead="Discover tutorials, tools, and integrations built around React Hook Form."
        />
        <main>
          <p className={styles.intro}>
            Looking for a learning path? Start with the{" "}
            <Link href="/guides">Guides</Link> for official examples and
            practical form patterns.
          </p>
          <section className={styles.section} aria-labelledby="learn">
            <div className={styles.sectionHeading}>
              <h2 id="learn">Articles & videos</h2>
              <p>
                Explore community walkthroughs and real examples. Recommended
                picks appear first; check the library version covered by each
                tutorial.
              </p>
            </div>
            <DirectoryCards items={LEARN} columns={2} />
          </section>
          <section className={styles.section} aria-labelledby="tools">
            <div className={styles.sectionHeading}>
              <h2 id="tools">Tools & community integrations</h2>
              <p>
                Inspect your form, generate a starting point, or find a package
                for your UI library.
              </p>
            </div>
            <DirectoryCards items={TOOLS} />
          </section>
          <section className={styles.section} aria-labelledby="community">
            <div className={styles.sectionHeading}>
              <h2 id="community">Get help & get involved</h2>
              <p>
                Share a question, a reproducible example, or a contribution with
                other developers.
              </p>
            </div>
            <DirectoryCards items={COMMUNITY} />
          </section>
          <section className={styles.updates} aria-labelledby="updates">
            <h2 id="updates">Updates & archives</h2>
            <p>
              Follow releases for changes to the library, or browse earlier
              community coverage.
            </p>
            <ul className={styles.navigation}>
              <li>
                <a
                  href="https://github.com/react-hook-form/react-hook-form/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Release notes ↗
                </a>
              </li>
              <li>
                <Link href="/resources/newsletters">Newsletter archive</Link>
              </li>
              <li>
                <a
                  href="https://twitter.com/HookForm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X / Twitter ↗
                </a>
              </li>
            </ul>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
