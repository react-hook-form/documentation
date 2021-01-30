import * as React from "react"
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
            <code className={styles.code}>{`</>`}</code>
            <a href="#">♆ useForm</a>

            <ul>
              <li>
                <code className={styles.code}>{`</>`}</code>{" "}
                <a href="#">register</a>
              </li>
              <li>
                <code className={styles.code}>{`</>`}</code>{" "}
                <a href="#">unregister</a>
              </li>
              <li>
                <code className={styles.code}>{`</>`}</code>{" "}
                <a href="#">watch</a>
              </li>
              <li>
                <code className={styles.code}>{`</>`}</code>{" "}
                <a href="#">handleSubmit</a>
              </li>
              <li>
                <code className={styles.code}>{`</>`}</code>{" "}
                <a href="#">reset</a>
              </li>
              <li>
                <code className={styles.code}>{`</>`}</code>{" "}
                <a href="#">setError</a>
              </li>
              <li>
                <code className={styles.code}>{`</>`}</code>{" "}
                <a href="#">clearErrors</a>
              </li>
              <li>
                <code className={styles.code}>{`</>`}</code>{" "}
                <a href="#">setValues</a>
              </li>
              <li>
                <code className={styles.code}>{`</>`}</code>{" "}
                <a href="#">getValues</a>
              </li>
              <li>
                <code className={styles.code}>{`</>`}</code>{" "}
                <a href="#">trigger</a>
              </li>
              <li>
                <code className={styles.code}>{`</>`}</code>{" "}
                <a href="#">control</a>
              </li>
              <li>
                <code className={styles.code}>{`</>`}</code>{" "}
                <a href="#">formState</a>
              </li>
            </ul>
          </li>
          <li className={styles.menuItem}>
            <code className={styles.code}>{`</>`}</code>
            <a href="#">♆ useController</a>
            <ul>
              <li>
                <code className={styles.code}>{`</>`}</code>{" "}
                <a href="#">❒ Controller</a>
              </li>
            </ul>
          </li>
          <li className={styles.menuItem}>
            <code className={styles.code}>{`</>`}</code>
            <a href="#">♆ useFormContext</a>
          </li>
          <li className={styles.menuItem}>
            <code className={styles.code}>{`</>`}</code>
            <a href="#">♆ useWatch</a>
          </li>
          <li className={styles.menuItem}>
            <code className={styles.code}>{`</>`}</code>
            <a href="#">♆ useFormState</a>
          </li>
          <li className={styles.menuItem}>
            <code className={styles.code}>{`</>`}</code>
            <a href="#">♆ useFieldArray</a>
          </li>
          <li className={styles.menuItem}>
            <code className={styles.code}>{`</>`}</code>
            <a href="#">❒ ErrorMessage</a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export { Menu }
