import { allDocs } from "contentlayer/generated"
import { GetStaticPaths, InferGetStaticPropsType } from "next"
import { useMDXComponent } from "next-contentlayer/hooks"
import Layout from "@/components/layout"
import { MDXComponents } from "@/components/mdx/mdx"
import Seo from "@/components/seo"
import Footer from "@/components/Footer"
import StarRepo from "@/components/StarRepo"
import containerStyles from "@/styles/container.module.css"
import typographyStyles from "@/styles/typography.module.css"
import { Menu, links } from "@/components/Menu"

export const getStaticPaths: GetStaticPaths = async () => {
  // Get a list of valid doc paths.
  const paths = allDocs.map((doc) => ({
    params: { slug: doc.segment },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = ({ params }) => {
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
      <Seo title={doc.title} description={doc.description} />

      <div className={containerStyles.container}>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          {doc.title}
        </h1>
        <p className={typographyStyles.subHeading}>{doc.description}</p>

        <div className={containerStyles.wrapper}>
          <Menu pages={links[doc.sidebar]} />

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
