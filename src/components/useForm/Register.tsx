import Footer from "../Footer"
import { Menu } from "../Menu"
import api from "../../data/api"
import ApiRefTable from "../ApiRefTable"
import * as typographyStyles from "../../styles/typography.module.css"
import * as containerStyles from "../../styles/container.module.css"
import StarRepo from "../StarRepo"

const Register = () => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        register
      </h1>
      <p className={typographyStyles.subHeading}>
        Register uncontrolled/controlled inputs
      </p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section id="registerRef">
            <code className={typographyStyles.codeHeading}>
              <h2>
                register:{" "}
                <span
                  className={typographyStyles.typeText}
                >{`(name: string, RegisterOptions?) => ({ onChange, onBlur, name, ref })`}</span>
              </h2>
            </code>

            <ApiRefTable api={api} />

            <StarRepo />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Register
