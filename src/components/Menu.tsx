import * as React from "react"
import { Link } from "gatsby"
import colors from "../styles/colors"
import styles from "./SideMenu.module.css"
import typographyStyles from "../styles/typography.module.css"

function Menu({ lightMode }) {
  return (
    <aside className={`${styles.menu} ${lightMode ? styles.lightMenu : ""}`}>
      <div>
        <div className={styles.titleList}>
          <h2
            className={typographyStyles.title}
            style={{
              fontSize: 16,
              color: colors.lightBlue,
            }}
          >
            Menu
          </h2>
        </div>

        <ul className="scrollArea">
          <li className={styles.menuItem}>
            <code aria-hidden className={styles.code}>{`</>`}</code>
            <Link to={"/api/useform"}>useForm</Link>

            <ul>
              <li>
                <code aria-hidden className={styles.code}>{`</>`}</code>{" "}
                <Link to={"/api/useform/register"}>register</Link>
              </li>
              <li>
                <code aria-hidden className={styles.code}>{`</>`}</code>{" "}
                <Link to={"/api/useform/unregister"}>unregister</Link>
              </li>
              <li>
                <code aria-hidden className={styles.code}>{`</>`}</code>{" "}
                <Link to={"/api/useform/watch"}>watch</Link>
              </li>
              <li>
                <code aria-hidden className={styles.code}>{`</>`}</code>{" "}
                <Link to={"/api/useform/handlesubmit"}>handleSubmit</Link>
              </li>
              <li>
                <code aria-hidden className={styles.code}>{`</>`}</code>{" "}
                <Link to={"/api/useform/reset"}>reset</Link>
              </li>
              <li>
                <code aria-hidden className={styles.code}>{`</>`}</code>{" "}
                <Link to={"/api/useform/seterror"}>setError</Link>
              </li>
              <li>
                <code aria-hidden className={styles.code}>{`</>`}</code>{" "}
                <Link to={"/api/useform/clearerrors"}>clearErrors</Link>
              </li>
              <li>
                <code aria-hidden className={styles.code}>{`</>`}</code>{" "}
                <Link to={"/api/useform/setvalues"}>setValues</Link>
              </li>
              <li>
                <code aria-hidden className={styles.code}>{`</>`}</code>{" "}
                <Link to={"/api/useform/getvalues"}>getValues</Link>
              </li>
              <li>
                <code aria-hidden className={styles.code}>{`</>`}</code>{" "}
                <Link to={"/api/useform/trigger"}>trigger</Link>
              </li>
              <li>
                <code aria-hidden className={styles.code}>{`</>`}</code>{" "}
                <Link to={"/api/useform/control"}>control</Link>
              </li>
              <li>
                <code aria-hidden className={styles.code}>{`</>`}</code>{" "}
                <Link to={"/api/useform/formstate"}>formState</Link>
              </li>
            </ul>
          </li>
          <li className={styles.menuItem}>
            <code aria-hidden className={styles.code}>{`</>`}</code>
            <Link to={"/api/usecontroller"}>useController</Link>
            <ul>
              <li>
                <code aria-hidden className={styles.code}>{`</>`}</code>{" "}
                <Link to={"/api/usecontroller/controller"}>Controller</Link>
              </li>
            </ul>
          </li>
          <li className={styles.menuItem}>
            <code aria-hidden className={styles.code}>{`</>`}</code>
            <Link to={"/api/useformcontext"}>useFormContext</Link>
          </li>
          <li className={styles.menuItem}>
            <code aria-hidden className={styles.code}>{`</>`}</code>
            <Link to={"/api/usewatch"}>useWatch</Link>
          </li>
          <li className={styles.menuItem}>
            <code aria-hidden className={styles.code}>{`</>`}</code>
            <Link to={"/api/useformstate"}>useFormState</Link>
          </li>
          <li className={styles.menuItem}>
            <code aria-hidden className={styles.code}>{`</>`}</code>
            <Link to={"/api/usefieldarray"}>useFieldArray</Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export { Menu }
