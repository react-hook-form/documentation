import Link from "next/link"
import Seo from "../components/seo"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import DirectoryCards, { type ResourceCard } from "../components/DirectoryCards"
import cards from "../styles/cards.module.css"
import styles from "../components/ResourcePage.module.css"
import journey from "../components/GuideJourney.module.css"

const STEPS = [
  { href: "#start", title: "Start here", description: "Learn the foundations" },
  {
    href: "#patterns",
    title: "Build a form",
    description: "Solve everyday problems",
  },
  {
    href: "#integrations",
    title: "Integrate your stack",
    description: "Connect schemas & UI",
  },
  {
    href: "#advanced",
    title: "Go deeper",
    description: "Explore advanced patterns",
  },
]

const FOUNDATIONS: ResourceCard[] = [
  {
    title: "Get Started",
    lead: "Register inputs, add validation, and handle your first submission.",
    href: "/get-started",
  },
  {
    title: "Validation",
    lead: "Choose built-in rules or a schema resolver and present useful error messages.",
    href: "/get-started#SchemaValidation",
  },
  {
    title: "TypeScript",
    lead: "Work with typed form values, field paths, and reusable components.",
    href: "/ts",
  },
]

const PATTERNS: ResourceCard[] = [
  {
    title: "Edit saved data",
    lead: "Load an existing record, reset the form, and preserve user changes during refetches.",
    href: "/advanced-usage#EditingSavedData",
  },
  {
    title: "Handle server errors",
    lead: "Map API errors to fields, show submission feedback, and let users retry.",
    href: "/advanced-usage#HandlingServerErrors",
  },
  {
    title: "Show conditional fields",
    lead: "React to another input and decide whether hidden fields should retain their values.",
    href: "/advanced-usage#ConditionalFields",
  },
  {
    title: "Build accessible forms",
    lead: "Connect labels, hints, errors, and focus so more people can use your form.",
    href: "/advanced-usage#AccessibilityA11y",
  },
  {
    title: "Create a multi-step form",
    lead: "Validate each step and keep draft values as users move between pages.",
    href: "/advanced-usage#WizardFormFunnel",
  },
  {
    title: "Test validation & submission",
    lead: "Use realistic interactions and wait for asynchronous form feedback in tests.",
    href: "/advanced-usage#TestingForm",
  },
]

const INTEGRATIONS: ResourceCard[] = [
  {
    title: "Schema validation",
    lead: "Use Zod, Yup, or another resolver with TypeScript and schema-driven validation.",
    href: "/integrations/resolvers",
  },
  {
    title: "Next.js & React 19",
    lead: "Connect Client Components, Server Actions, and server-side validation.",
    href: "/integrations/nextjs",
  },
  {
    title: "shadcn/ui",
    lead: "Wire controlled UI components into your form with accessible field errors.",
    href: "/integrations/shadcn-ui",
  },
]

const ADVANCED: ResourceCard[] = [
  {
    title: "Advanced",
    lead: "Explore performance, reusable forms, custom resolvers, virtualized lists, and complex patterns.",
    href: "/advanced-usage",
  },
  {
    title: "Migrate to v8",
    lead: "Review the beta migration guide and adapt your existing application to the API changes.",
    href: "/migrate-v7-to-v8",
  },
  {
    title: "Community tutorials",
    lead: "Explore recommended articles and videos, or find tools and integrations for your next form.",
    href: "/resources",
  },
]

export default function Guides() {
  return (
    <>
      <Seo
        title="React Hook Form Guides"
        description="Learn React Hook Form with a practical path from form fundamentals to validation, server errors, integrations, testing, and advanced patterns."
      />
      <div className={cards.page}>
        <PageHeader
          eyebrow="Guides"
          title="Build better forms"
          lead="Follow a learning path or jump to the problem you need to solve. Start with the foundations, then explore integrations and advanced patterns."
        />
        <main>
          <nav className={journey.journey} aria-label="Explore guides">
            <ol className={journey.steps}>
              {STEPS.map((step, index) => (
                <li key={step.href}>
                  <a href={step.href} className={journey.step}>
                    <span className={journey.number} aria-hidden>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={journey.stepText}>
                      <strong>{step.title}</strong>
                      <span>{step.description}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <section className={styles.section} aria-labelledby="start">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Recommended starting points</p>
              <h2 id="start">Start with the foundations</h2>
              <p>
                New to React Hook Form? Start here. For function signatures and
                options, keep the <Link href="/docs">API reference</Link> handy.
              </p>
            </div>
            <DirectoryCards items={FOUNDATIONS} />
          </section>
          <section className={styles.section} aria-labelledby="patterns">
            <div className={styles.sectionHeading}>
              <h2 id="patterns">Solve a form problem</h2>
              <p>
                Put the APIs together with practical examples for common
                workflows. For quick answers about form behavior, check the{" "}
                <Link href="/faqs">FAQs</Link>.
              </p>
            </div>
            <DirectoryCards items={PATTERNS} />
          </section>
          <section className={styles.section} aria-labelledby="integrations">
            <div className={styles.sectionHeading}>
              <h2 id="integrations">Integrate your stack</h2>
              <p>
                Connect validation libraries, frameworks, and UI components.
                Browse <Link href="/integrations">all integration guides</Link>{" "}
                for more examples.
              </p>
            </div>
            <DirectoryCards items={INTEGRATIONS} />
          </section>
          <section className={styles.section} aria-labelledby="advanced">
            <div className={styles.sectionHeading}>
              <h2 id="advanced">Go deeper</h2>
              <p>
                Ready for larger forms or a library upgrade? Continue with
                advanced patterns, migration guidance, and community examples.
              </p>
            </div>
            <DirectoryCards items={ADVANCED} />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
