import generic from "../data/generic"
import containerStyles from "../styles/container.module.css"
import buttonStyles from "../styles/button.module.css"
import typographyStyles from "../styles/typography.module.css"
import { useRouter } from "next/router"

export default function LearnMore() {
  const router = useRouter()
  return (
    <div className={containerStyles.centerContent} style={{ marginTop: 100 }}>
      <h2 className={typographyStyles.ctaHeading}>{generic.learnMore.title}</h2>
      <p>{generic.learnMore.description}</p>

      <button
        className={buttonStyles.primaryButton}
        onClick={() => {
          router.push("/docs")
        }}
        style={{ margin: "40px auto" }}
      >
        {generic.learnMore.buttonText}
      </button>
    </div>
  )
}
