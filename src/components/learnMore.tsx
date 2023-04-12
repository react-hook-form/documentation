import { useRouter } from "next/router"
import generic from "../data/generic"
import containerStyles from "../styles/container.module.css"
import buttonStyles from "../styles/button.module.css"

export default function LearnMore() {
  const router = useRouter()
  const currentLanguage = router.locale || "en"

  return (
    <div className={containerStyles.centerContent} style={{ marginTop: 100 }}>
      <h1>{generic.learnMore[currentLanguage].title}</h1>
      <p>{generic.learnMore[currentLanguage].description}</p>

      <button
        className={buttonStyles.primaryButton}
        onClick={() => {
          router.push("/docs")
        }}
        style={{ margin: "40px auto" }}
      >
        {generic.learnMore[currentLanguage].buttonText}
      </button>
    </div>
  )
}
