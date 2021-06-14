import * as React from "react"
import SideMenu from "./SideMenu"
import { useStateMachine } from "little-state-machine"
import TS from "../data/ts"
import * as typographyStyles from "../styles/typography.module.css"
import * as containerStyles from "../styles/container.module.css"

const enLinks = [
  TS.nestedValue,
  TS.resolver,
  TS.submitHandler,
  TS.control,
  TS.UseFormReturnRef,
  TS.useFormOptions,
  TS.UseFieldArrayReturn,
  TS.UseFieldArrayProps,
  TS.UseControllerReturn,
  TS.UseControllerProps,
  TS.fieldError,
  TS.fieldErrors,
  TS.field,
  TS.fieldPath,
  TS.fieldValues,
  TS.fieldArray,
  TS.mode,
  TS.validationRules,
  TS.formStateProxy,
]

export default ({ defaultLang }: { defaultLang: string }) => {
  const {
    state: { language },
  } = useStateMachine()
  const tsSectionsRef = React.useRef({
    NestedValueRef: null,
    ResolverRef: null,
    SubmitHandlerRef: null,
    ControlRef: null,
    UseFormReturnRef: null,
    RegisterOptionsRef: null,
    UseFormOptionsRef: null,
    UseFieldArrayReturnRef: null,
    UseFieldArrayPropsRef: null,
    UseControllerReturnRef: null,
    UseControllerPropsRef: null,
    FieldErrorRef: null,
    FieldErrorsRef: null,
    FieldRef: null,
    FieldPathRef: null,
    FieldValuesRef: null,
    FieldArrayRef: null,
    ModeRef: null,
    FormStateProxyRef: null,
  })
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }

  React.useEffect(() => {
    if (location.hash) {
      setTimeout(() => goToSection(location.hash.substr(1)), 10)
    }
  }, [])

  const goToSection = (name) => {
    const url = window.location.href
    const hashIndex = url.indexOf("#")
    const filterName = name.replace(/ |-/g, "")

    history.pushState(
      {},
      null,
      hashIndex < 0
        ? `${url}#${filterName}`
        : `${url.substr(0, hashIndex)}#${filterName}`
    )

    const refName = `${filterName}Ref`

    if (tsSectionsRef.current[refName]) {
      tsSectionsRef.current[refName].scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={containerStyles.container}>
      <section>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          TS Support
        </h1>
        <p className={typographyStyles.subHeading}>
          List of exported TS Types.
        </p>
      </section>

      <div className={containerStyles.wrapper}>
        <SideMenu
          isStatic
          version={6}
          links={enLinks}
          enLinks={enLinks}
          goToSection={goToSection}
          currentLanguage={currentLanguage}
        />

        <main>
          <section
            ref={(ref) => (tsSectionsRef.current.NestedValueRef = ref)}
            id="NestedValueRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.nestedValue.title}</h2>
            </code>

            {TS.nestedValue.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.ResolverRef = ref)}
            id="ResolverRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.resolver.title}</h2>
            </code>

            {TS.resolver.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.SubmitHandlerRef = ref)}
            id="SubmitHandlerRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.submitHandler.title}</h2>
            </code>
            {TS.submitHandler.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.ControlRef = ref)}
            id="ControlRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.control.title}</h2>
            </code>
            {TS.control.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.UseFormReturnRef = ref)}
            id="UseFormReturnRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.UseFormReturnRef.title}</h2>
            </code>
            {TS.UseFormReturnRef.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.UseFormOptionsRef = ref)}
            id="UseFormOptionsRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.useFormOptions.title}</h2>
            </code>
            {TS.useFormOptions.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.UseFieldArrayReturnRef = ref)}
            id="UseFieldArrayReturnRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.UseFieldArrayReturn.title}</h2>
            </code>
            {TS.UseFieldArrayReturn.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.UseFieldArrayPropsRef = ref)}
            id="UseFieldArrayPropsRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.UseFieldArrayProps.title}</h2>
            </code>
            {TS.UseFieldArrayProps.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.UseControllerReturnRef = ref)}
            id="UseControllerReturnRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.UseControllerReturn.title}</h2>
            </code>
            {TS.UseControllerReturn.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.UseControllerPropsRef = ref)}
            id="UseControllerPropsRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.UseControllerProps.title}</h2>
            </code>
            {TS.UseControllerProps.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.FieldErrorRef = ref)}
            id="FieldErrorRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.fieldError.title}</h2>
            </code>
            {TS.fieldError.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.FieldErrorsRef = ref)}
            id="FieldErrorsRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.fieldErrors.title}</h2>
            </code>
            {TS.fieldErrors.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.FieldRef = ref)}
            id="FieldRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.field.title}</h2>
            </code>
            {TS.field.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.FieldPathRef = ref)}
            id="FieldPathRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.fieldPath.title}</h2>
            </code>
            {TS.fieldPath.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.FieldValuesRef = ref)}
            id="FieldValuesRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.fieldValues.title}</h2>
            </code>
            {TS.fieldValues.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.FieldArrayRef = ref)}
            id="FieldArrayRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.fieldArray.title}</h2>
            </code>
            {TS.fieldArray.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.ModeRef = ref)}
            id="ModeRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.mode.title}</h2>
            </code>
            {TS.mode.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.RegisterOptionsRef = ref)}
            id="ValidationRulesRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.validationRules.title}</h2>
            </code>
            {TS.validationRules.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.FormStateProxyRef = ref)}
            id="FormStateProxyRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.formStateProxy.title}</h2>
            </code>
            {TS.formStateProxy.description}
          </section>
        </main>
      </div>
    </div>
  )
}
