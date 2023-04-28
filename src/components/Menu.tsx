import Link from "next/link"
import colors from "../styles/colors"
import * as styles from "./SideMenu.module.css"
import * as typographyStyles from "../styles/typography.module.css"
import { useRouter } from "next/router"

export const pages = [
  {
    pathname: "/docs/useform",
    name: "useForm",
    pages: [
      { pathname: "/docs/useform/register", name: "register" },
      { pathname: "/docs/useform/unregister", name: "unregister" },
      { pathname: "/docs/useform/formstate", name: "formState" },
      { pathname: "/docs/useform/watch", name: "watch" },
      { pathname: "/docs/useform/handlesubmit", name: "handleSubmit" },
      { pathname: "/docs/useform/reset", name: "reset" },
      { pathname: "/docs/useform/resetfield", name: "resetField" },
      { pathname: "/docs/useform/seterror", name: "setError" },
      { pathname: "/docs/useform/clearerrors", name: "clearErrors" },
      { pathname: "/docs/useform/setvalue", name: "setValue" },
      { pathname: "/docs/useform/setfocus", name: "setFocus" },
      { pathname: "/docs/useform/getvalues", name: "getValues" },
      { pathname: "/docs/useform/getfieldstate", name: "getFieldState" },
      { pathname: "/docs/useform/trigger", name: "trigger" },
      { pathname: "/docs/useform/control", name: "control" },
      { pathname: "/docs/useform/form", name: "Form" },
    ],
  },
  {
    pathname: "/docs/usecontroller",
    name: "useController",
    pages: [
      {
        pathname: "/docs/usecontroller/controller",
        name: "Controller",
      },
    ],
  },
  {
    pathname: "/docs/useformcontext",
    name: "useFormContext",
    pages: [
      {
        pathname: "/docs/formprovider",
        name: "FormProvider",
      },
    ],
  },
  {
    pathname: "/docs/usewatch",
    name: "useWatch",
  },
  {
    pathname: "/docs/useformstate",
    name: "useFormState",
    pages: [
      {
        pathname: "/docs/useformstate/errormessage",
        name: "ErrorMessage",
      },
    ],
  },
  {
    pathname: "/docs/usefieldarray",
    name: "useFieldArray",
  },
]

function Menu() {
  const router = useRouter()
  const { pathname } = router

  return (
    <aside className={styles.menu}>
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
                  href={page.pathname}
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
                            href={page.pathname}
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
