import { useTranslation } from "next-i18next"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from "next"

const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo title="404: Not found" />
      <h1>{t("notFound", "NOT FOUND")}</h1>
      <p>You just found a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}
