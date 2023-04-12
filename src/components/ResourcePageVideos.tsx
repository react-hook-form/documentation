import containerStyle from "../styles/container.module.css"
import styles from "./ResourcePage.module.css"
import Footer from "./Footer"
import generic from "../data/generic"
import ResourceList from "./ResourceList"
import resources from "../data/resources"
import StarRepo from "./StarRepo"
import { useRouter } from "next/router"

export default function ResourcePageVideos() {
  const router = useRouter()
  const currentLanguage = router.locale || "en"

  return (
    <div className={containerStyle.container}>
      <main className={styles.root}>
        <ResourceList
          title={generic.video[currentLanguage]}
          resources={resources.video}
        />
        <StarRepo />

        <Footer />
      </main>
    </div>
  )
}
