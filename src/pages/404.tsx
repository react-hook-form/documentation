import Layout from "../components/layout"
import Seo from "../components/seo"
import styles from "./404.module.css"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className={styles.container}>
      <main className={styles.root}>
        <h1>NOT FOUND</h1>
        <p>You just found a route that doesn&#39;t exist... the sadness.</p>
      </main>
    </div>
  </Layout>
)

export default NotFoundPage
