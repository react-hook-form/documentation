import { allDocs, Doc } from "contentlayer/generated"
import { GetStaticPaths, InferGetStaticPropsType } from "next"
import { useMDXComponent } from "next-contentlayer2/hooks"
import { MDXComponents } from "@/components/mdx/mdx"
import Seo, { SITE_URL } from "@/components/seo"
import Footer from "@/components/Footer"
import StarRepo from "@/components/StarRepo"
import Menu from "@/components/Menu/Menu"
import DocsToc from "@/components/DocsToc"
import V8Notice from "@/components/V8Notice"
import DocPageActions from "@/components/DocPageActions"
import Link from "next/link"
import styles from "@/components/DocsPage.module.css"
import { Pages } from "@/types/types"

// Segments that are real, navigable pages but not their own contentlayer doc.
const SEGMENT_LABEL_OVERRIDES: Record<string, string> = { docs: "API" }

const SIDEBAR_TITLES: Record<Doc["sidebar"], string> = {
  apiLinks: "API Reference",
  advancedLinks: "Advanced Usage",
  tsLinks: "TypeScript",
  faqLinks: "FAQs",
  getStartedLinks: "Get Started",
  migrateV7ToV8Links: "Migrate to v8",
}

function getBreadcrumbs(doc: Doc) {
  let cumulativePath = ""
  return doc.segment.slice(0, -1).map((segment) => {
    cumulativePath += `/${segment}`
    return {
      href: cumulativePath,
      name:
        allDocs.find((d) => d.slug === cumulativePath)?.title ??
        SEGMENT_LABEL_OVERRIDES[segment] ??
        segment,
    }
  })
}

function getBreadcrumbSchema(doc: Doc) {
  let cumulativePath = ""
  const items = doc.segment.map((segment, index) => {
    cumulativePath += `/${segment}`
    const isLast = index === doc.segment.length - 1
    const name = isLast
      ? doc.title
      : (allDocs.find((d) => d.slug === cumulativePath)?.title ??
        SEGMENT_LABEL_OVERRIDES[segment] ??
        segment)

    return {
      "@type": "ListItem",
      position: index + 2,
      name,
      item: `${SITE_URL}${cumulativePath}`,
    }
  })

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...items,
    ],
  }
}

function getArticleSchema(doc: Doc) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: doc.title,
    description: doc.metaDescription ?? doc.description,
    url: `${SITE_URL}${doc.slug}`,
    isPartOf: { "@type": "WebSite", url: SITE_URL, name: "React Hook Form" },
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  // Get a list of valid doc paths.
  const paths = allDocs.map((doc) => ({
    params: { slug: doc.segment },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = ({
  params,
}: {
  params?: { slug?: string[] }
}) => {
  // Find the doc for the current page.
  const doc = allDocs.find(
    (doc) => doc._raw.flattenedPath === params?.slug?.join("/")
  )

  // Return notFound if the doc does not exist.
  if (!doc) {
    return { notFound: true }
  }

  // Pass only what the page renders. Breadcrumbs and JSON-LD are resolved
  // here so `allDocs` (every doc's compiled MDX) stays out of the client bundle.
  return {
    props: {
      doc: {
        title: doc.title,
        description: doc.description,
        metaDescription: doc.metaDescription ?? doc.description,
        slug: doc.slug,
        code: doc.body.code,
        pages: doc.pages as Pages,
        sidebarTitle: SIDEBAR_TITLES[doc.sidebar],
        breadcrumbs: doc.segment.length > 1 ? getBreadcrumbs(doc) : [],
        jsonLd: [getBreadcrumbSchema(doc), getArticleSchema(doc)],
      },
    },
  }
}

export default function Page({
  doc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(doc.code)

  return (
    <>
      <Seo
        title={doc.title}
        description={doc.metaDescription}
        jsonLd={doc.jsonLd}
      />

      <div className={styles.layout}>
        <Menu pages={doc.pages} title={doc.sidebarTitle} />

        <main className={styles.main}>
          <header className={styles.header}>
            {doc.breadcrumbs.length > 0 && (
              <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
                {doc.breadcrumbs.map((crumb) => (
                  <span key={crumb.href}>
                    <Link href={crumb.href}>{crumb.name}</Link>
                    <span aria-hidden>/</span>
                  </span>
                ))}
              </nav>
            )}
            <h1 className={styles.title} id="main">
              {doc.title}
            </h1>
            <p className={styles.description}>{doc.description}</p>
            <DocPageActions slug={doc.slug} />
          </header>

          <V8Notice slug={doc.slug} />

          <div id="docs-content">
            <MDXContent components={MDXComponents} />
          </div>

          <StarRepo />

          <Footer />
        </main>

        <DocsToc />
      </div>
    </>
  )
}
