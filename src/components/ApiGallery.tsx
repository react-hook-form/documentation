import { useEffect } from "react"
import Link from "next/link"
import clsx from "clsx"
import { useRouter } from "next/router"
import Footer from "./Footer"
import { apiLinks } from "./Menu/MenuLinks"
import PageHeader from "./PageHeader"
import cards from "../styles/cards.module.css"

const DESCRIPTIONS: Record<string, string> = {
  "/docs/useform":
    "A powerful custom hook to validate your form with minimal re-renders.",
  "/docs/usecontroller":
    "For controlled components: interface with the useForm methods and isolate its re-render.",
  "/docs/useformcontext":
    "Access your useForm methods and properties from nested components. Great for building larger forms and shared components.",
  "/docs/usewatch":
    "Subscribe to individual form input changes without impacting the root component's render.",
  "/docs/useformstate":
    "Subscribe to individual form state updates and isolate re-renders at the hook level.",
  "/docs/usefieldarray":
    "Manage dynamically generated fields on the fly: shuffle, remove and append fields. Ideal for complex CRUD data entry.",
  "/docs/uselens":
    "Type-safe lenses for building reusable and shareable form components with precise focus on form fields.",
  "/docs/createFormControl":
    "Create a form control object and subscribe to form state outside of React components, accessing methods without context.",
}

const MAX_CHILDREN = 8

// Old /docs#name links from the v6 era redirect to the matching page.
const USEFORM_HASHES = [
  "register",
  "unregister",
  "watch",
  "handlesubmit",
  "reset",
  "seterror",
  "clearerrors",
  "setvalues",
  "getvalues",
  "trigger",
  "control",
  "formstate",
]

export default function ApiGallery() {
  const router = useRouter()

  useEffect(() => {
    const name = window.location.hash.toLowerCase().slice(1)

    if (name === "controller") {
      router.push(`/docs/usecontroller/${name}`)
    } else if (USEFORM_HASHES.includes(name)) {
      router.push(`/docs/useform/${name}`)
    } else if (["useformcontext", "usefieldarray"].includes(name)) {
      router.push(`/docs/${name}`)
    }
  }, [router])

  return (
    <div className={cards.page}>
      <PageHeader
        eyebrow="API Reference"
        title="API"
        lead="Hooks, components and utilities for building forms with React Hook Form."
      />

      <main>
        <ul className={cards.grid}>
          {apiLinks.map((api) => {
            const children = api.pages ?? []
            const hidden = children.length - MAX_CHILDREN

            return (
              <li key={api.pathname} className={cards.card}>
                <Link href={api.pathname} className={cards.cardLink}>
                  <span className={cards.icon} aria-hidden>
                    {`</>`}
                  </span>
                  <h2 className={clsx(cards.title, cards.mono)}>{api.name}</h2>
                  <p className={cards.text}>{DESCRIPTIONS[api.pathname]}</p>
                  <span className={cards.more} aria-hidden>
                    Read more →
                  </span>
                </Link>

                {children.length > 0 && (
                  <ul
                    className={cards.footer}
                    aria-label={`${api.name} methods and components`}
                  >
                    {children.slice(0, MAX_CHILDREN).map((child) => (
                      <li key={child.pathname}>
                        <Link href={child.pathname} className={cards.chip}>
                          {child.name}
                        </Link>
                      </li>
                    ))}
                    {hidden > 0 && (
                      <li>
                        <Link
                          href={api.pathname}
                          className={clsx(cards.chip, cards.chipMuted)}
                        >
                          +{hidden} more
                        </Link>
                      </li>
                    )}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </main>

      <Footer />
    </div>
  )
}
