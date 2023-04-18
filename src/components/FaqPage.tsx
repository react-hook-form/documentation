import { useRef, useEffect } from "react"
import SideMenu from "../components/SideMenu"
import Footer from "../components/Footer"
import StarRepo from "../components/StarRepo"
import faqEn from "../data/faq"
import * as typographyStyles from "../styles/typography.module.css"
import * as containerStyles from "../styles/container.module.css"
const REMOVE_QUESTIONS_FOR_LIST = 5

const enLinks = faqEn.questions

interface Props {
  faq: any
}

const Faq = ({ faq }: Props) => {
  const links = faq.questions.slice(
    0,
    faq.questions.length - REMOVE_QUESTIONS_FOR_LIST
  )

  const sectionsRef = useRef({
    question0: null,
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    question6: null,
    question7: null,
    question8: null,
    question9: null,
    question10: null,
    question11: null,
    question12: null,
    question13: null,
    question14: null,
    question15: null,
    question16: null,
    question17: null,
  })

  const goToSection = (name) => {
    const filterName = name.replace(/[^\w\s]| /g, "")
    const path = enLinks.findIndex(
      ({ title }) =>
        title.replace(/[^\w\s]| /g, "").toLowerCase() ===
        filterName.toLowerCase()
    )

    if (sectionsRef.current[`question${path + 1}`]) {
      sectionsRef.current[`question${path + 1}`].scrollIntoView({
        behavior: "smooth",
      })
    }

    const url = window.location.href
    const hashIndex = url.indexOf("#")

    if (hashIndex < 0) {
      history.pushState({}, null, `${url}#${filterName}`)
    } else {
      history.pushState({}, null, `${url.substr(0, hashIndex)}#${filterName}`)
    }

    if (path > -1) {
      sectionsRef.current[`question${path}`].scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    if (window.location.hash)
      setTimeout(() => goToSection(window.location.hash.substr(1)), 10)
  }, [])

  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        {faq.header.title}
      </h1>
      <p className={typographyStyles.subHeading}>{faq.header.description}</p>

      <div className={containerStyles.wrapper}>
        <SideMenu
          enLinks={enLinks}
          isStatic
          links={links}
          goToSection={goToSection}
        />

        <main>
          {links.map((question, index) => {
            const { title, description } = question
            return (
              <>
                <h2
                  className={typographyStyles.questionTitle}
                  ref={(ref) => (sectionsRef.current[`question${index}`] = ref)}
                  id={`question${index}`}
                >
                  {title}
                </h2>
                {description}
                <hr />
              </>
            )
          })}

          <StarRepo />

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Faq
