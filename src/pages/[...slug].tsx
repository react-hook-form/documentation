import { allDocs, Doc } from "contentlayer/generated"
import { GetStaticPaths, InferGetStaticPropsType } from "next"
import { useMDXComponent } from "next-contentlayer/hooks"
import Layout from "@/components/layout"
import { MDXComponents } from "@/components/mdx/mdx"
import Seo, { SITE_URL } from "@/components/seo"
import Footer from "@/components/Footer"
import StarRepo from "@/components/StarRepo"
import containerStyles from "@/styles/container.module.css"
import typographyStyles from "@/styles/typography.module.css"
import Menu from "@/components/Menu/Menu"
import { Pages } from "@/types/types"

// Segments that are real, navigable pages but not their own contentlayer doc.
const SEGMENT_LABEL_OVERRIDES: Record<string, string> = { docs: "API" }

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

  // Return the doc as page props.
  return { props: { doc } }
}

export default function Page({
  doc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(doc.body.code)

  return (
    <Layout>
      <Seo
        title={doc.title}
        description={doc.metaDescription ?? doc.description}
        jsonLd={[getBreadcrumbSchema(doc), getArticleSchema(doc)]}
      />

      <div className={containerStyles.container}>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          {doc.title}
        </h1>
        <p className={typographyStyles.subHeading}>{doc.description}</p>

        <div className={containerStyles.wrapper}>
          <Menu pages={doc.pages as Pages} />

          <main>
            <MDXContent components={MDXComponents} />

            <StarRepo />

            <Footer />
          </main>
        </div>
      </div>
    </Layout>
  )
}
