import * as containerStyle from "../styles/container.module.css"
import * as styles from "./ResourcePage.module.css"
import Footer from "./Footer"
import generic from "../data/generic"
import ResourceList from "./ResourceList"
import resources from "../data/resources"
import StarRepo from "./StarRepo"

export default function ResourcePageVideos() {
  return (
    <div className={containerStyle.container}>
      <main className={styles.root}>
        <ResourceList title={generic.video} resources={resources.video} />
        <StarRepo />

        <Footer />
      </main>
    </div>
  )
}
