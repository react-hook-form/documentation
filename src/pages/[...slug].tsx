import { useMemo } from "react"
import * as runtime from "react/jsx-runtime"
import { runSync } from "@mdx-js/mdx"
import { GetStaticPaths, InferGetStaticPropsType } from "next"
import { MDXComponents } from "@/components/mdx/mdx"
import Seo, { SITE_URL } from "@/components/seo"
import Footer from "@/components/Footer"
import StarRepo from "@/components/StarRepo"
import Menu from "@/components/Menu/Menu"
import DocsToc from "@/components/DocsToc"
import V8Notice from "@/components/V8Notice"
import DocPageActions from "@/components/DocPageActions"
import { SelectNav } from "@/components/selectNav"
import Link from "next/link"
import styles from "@/components/DocsPage.module.css"
import * as sidebar from "@/components/Menu/MenuLinks"
import { Breadcrumb, Doc, getAllDocs, getBreadcrumbs } from "@/lib/docs"
import { compileMdx } from "@/lib/mdx"
import type { Sidebar } from "../../qino/schemas"
import formState from "@/components/codeExamples/formState"
import formStateTs from "@/components/codeExamples/formStateTs"
import formStateUseEffect from "@/components/codeExamples/formStateUseEffect"
import formStateUseEffectTs from "@/components/codeExamples/formStateUseEffectTs"

// Code strings that MDX reads as `props.codeExamples.*`.
const codeExamples = {
  formState,
  formStateTs,
  formStateUseEffect,
  formStateUseEffectTs,
}

const SIDEBAR_TITLES: Record<Sidebar, string> = {
  apiLinks: "API Reference",
  advancedLinks: "Advanced",
  tsLinks: "TypeScript",
  faqLinks: "FAQs",
  getStartedLinks: "Get Started",
  integrationLinks: "Integrations",
  migrateV7ToV8Links: "Migrate to v8",
}

function getBreadcrumbSchema(doc: Doc, breadcrumbs: Array<Breadcrumb>) {
  const items = [...breadcrumbs, { href: doc.slug, name: doc.title }].map(
    (crumb, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: crumb.name,
      item: `${SITE_URL}${crumb.href}`,
    })
  )

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
  const url = `${SITE_URL}${doc.slug}`

  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: doc.title,
    description: doc.metaDescription ?? doc.description,
    url,
    image: `${SITE_URL}/images/react-hook-form-og.png`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Organization",
      name: "React Hook Form",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "React Hook Form",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo/react-hook-form-logo.png`,
      },
    },
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", url: SITE_URL, name: "React Hook Form" },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Get a list of valid doc paths.
  const paths = (await getAllDocs()).map((doc) => ({
    params: { slug: doc.slug.slice(1).split("/") },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({
  params,
}: {
  params?: { slug?: string[] }
}) => {
  // Find the doc for the current page.
  const doc = (await getAllDocs()).find(
    (doc) => doc.slug == `/${params?.slug?.join("/") ?? ""}`
  )

  // Return notFound if the doc does not exist.
  if (!doc) {
    return { notFound: true }
  }

  const breadcrumbs = await getBreadcrumbs(doc)

  // Pass only what the page renders. Breadcrumbs and JSON-LD are resolved
  // here so the other docs stay out of the client bundle.
  return {
    props: {
      doc: {
        title: doc.title,
        seoTitle: doc.seoTitle ?? doc.title,
        description: doc.description,
        metaDescription: doc.metaDescription ?? doc.description,
        slug: doc.slug,
        code: await compileMdx(doc.markdown),
        pages: sidebar[doc.sidebar],
        sidebarTitle: SIDEBAR_TITLES[doc.sidebar],
        breadcrumbs,
        jsonLd: [getBreadcrumbSchema(doc, breadcrumbs), getArticleSchema(doc)],
      },
    },
  }
}

export default function Page({
  doc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // Evaluate the MDX compiled in getStaticProps.
  const MDXContent = useMemo(
    () => runSync(doc.code, { ...runtime, baseUrl: import.meta.url }).default,
    [doc.code]
  )

  return (
    <>
      <Seo
        title={doc.seoTitle}
        description={doc.metaDescription}
        jsonLd={doc.jsonLd}
        type="article"
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
            <SelectNav pages={doc.pages} basePath={doc.slug} />
          </header>

          <V8Notice slug={doc.slug} />

          <div id="docs-content">
            <MDXContent
              components={MDXComponents}
              codeExamples={codeExamples}
            />
          </div>

          <StarRepo />

          <Footer />
        </main>

        <DocsToc />
      </div>
    </>
  )
}
