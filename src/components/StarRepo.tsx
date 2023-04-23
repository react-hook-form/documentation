import generic from "../data/generic"
import * as buttonStyles from "../styles/button.module.css"
import * as containerStyles from "../styles/container.module.css"

export default function StarRepo() {
  return (
    <div
      className={containerStyles.centerContent}
      style={{ marginTop: 100, maxWidth: 600 }}
    >
      <h1>{generic.needYourSupport.title}</h1>
      <p>{generic.needYourSupport.description}</p>
      <button
        className={buttonStyles.primaryButton}
        onClick={() => {
          window.open(
            "https://github.com/react-hook-form/react-hook-form/stargazers"
          )
        }}
        style={{ margin: "40px auto" }}
      >
        {generic.needYourSupport.buttonText}
      </button>
    </div>
  )
}
