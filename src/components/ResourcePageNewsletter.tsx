import containerStyle from "../styles/container.module.css"
import styles from "./ResourcePage.module.css"
import Footer from "./Footer"
import generic from "../data/generic"
import ResourceList from "./ResourceList"
import resources from "../data/resources"
import StarRepo from "./StarRepo"

export default function ResourcePageNewsletter() {
  return (
    <div className={containerStyle.container}>
      <main className={styles.root}>
        <ResourceList
          title={generic.newsletter}
          resources={resources.newsletter}
        />
        <StarRepo />

        <Footer />
      </main>
    </div>
  )
}
