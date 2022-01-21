import * as React from "react"
import { useStateMachine } from "little-state-machine"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import colors from "../styles/colors"
import * as styles from "./SideMenu.module.css"
import * as typographyStyles from "../styles/typography.module.css"
import { updateCurrentLanguage } from "../actions/languageActions"

const pages = [
  {
    pathname: "/api/useform",
    name: "useForm",
    pages: [
      { pathname: "/api/useform/register", name: "register" },
      { pathname: "/api/useform/unregister", name: "unregister" },
      { pathname: "/api/useform/formstate", name: "formState" },
      { pathname: "/api/useform/watch", name: "watch" },
      { pathname: "/api/useform/handlesubmit", name: "handleSubmit" },
      { pathname: "/api/useform/reset", name: "reset" },
      { pathname: "/api/useform/resetfield", name: "resetField" },
      { pathname: "/api/useform/seterror", name: "setError" },
      { pathname: "/api/useform/clearerrors", name: "clearErrors" },
      { pathname: "/api/useform/setvalue", name: "setValue" },
      { pathname: "/api/useform/setfocus", name: "setFocus" },
      { pathname: "/api/useform/getvalues", name: "getValues" },
      { pathname: "/api/useform/getfieldstate", name: "getFieldState" },
      { pathname: "/api/useform/trigger", name: "trigger" },
      { pathname: "/api/useform/control", name: "control" },
    ],
  },
  {
    pathname: "/api/usecontroller",
    name: "useController",
    pages: [
      {
        pathname: "/api/usecontroller/controller",
        name: "Controller",
      },
    ],
  },
  {
    pathname: "/api/useformcontext",
    name: "useFormContext",
  },
  {
    pathname: "/api/usewatch",
    name: "useWatch",
  },
  {
    pathname: "/api/useformstate",
    name: "useFormState",
    pages: [
      {
        pathname: "/api/useformstate/errormessage",
        name: "ErrorMessage",
      },
    ],
  },
  {
    pathname: "/api/usefieldarray",
    name: "useFieldArray",
  },
]

function Menu() {
  const { state } = useStateMachine({ updateCurrentLanguage })
  const lightMode = state?.setting?.lightMode
  const { pathname } = useLocation()

  console.log("pathname", pathname)

  return (
    <aside className={`${styles.menu} ${lightMode ? styles.lightMenu : ""}`}>
      <div>
        <div className={styles.titleList}>
          <h4
            className={typographyStyles.title}
            style={{
              fontSize: 16,
              color: colors.lightBlue,
            }}
          >
            Menu
          </h4>
        </div>

        <ul
          className="scrollArea"
          style={{
            paddingBottom: 40,
          }}
        >
          {pages.map((page) => {
            const isActive = pathname === page.pathname

            return (
              <li key={page.pathname} className={styles.menuItem}>
                <code aria-hidden className={styles.code}>{`</>`}</code>
                <Link
                  className={isActive ? styles.isActive : ""}
                  to={page.pathname}
                >
                  {page.name}
                </Link>

                {page.pages && (
                  <ul>
                    {page.pages.map((page) => {
                      const isActive = pathname === page.pathname

                      return (
                        <li key={page.pathname} className={styles.menuItem}>
                          <code
                            aria-hidden
                            className={styles.code}
                          >{`</>`}</code>{" "}
                          <Link
                            className={isActive ? styles.isActive : ""}
                            to={page.pathname}
                          >
                            {page.name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export { Menu }
