import { useStateMachine } from "little-state-machine"
import * as containerStyle from "../styles/container.module.css"
import * as styles from "./ResourcePage.module.css"
import Footer from "./Footer"
import generic from "../data/generic"
import ResourceList from "./ResourceList"
import resources from "../data/resources"
import StarRepo from "./StarRepo"

export default function ResourcePageCondensed({
  defaultLang,
}: {
  defaultLang: string
}) {
  const {
    state: { language },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }

  return (
    <div className={containerStyle.container}>
      <main className={styles.root}>
        <ResourceList
          title={generic.blog[currentLanguage]}
          resources={resources.article}
        />
        <StarRepo currentLanguage="en" />

        <Footer currentLanguage={currentLanguage} />
      </main>
    </div>
  )
}
