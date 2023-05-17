import generic from "../data/generic"
import * as containerStyles from "../styles/container.module.css"
import * as buttonStyles from "../styles/button.module.css"
import { useRouter } from "next/router"

export default function LearnMore() {
  const router = useRouter()
  return (
    <div className={containerStyles.centerContent} style={{ marginTop: 100 }}>
      <h1>{generic.learnMore.title}</h1>
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
