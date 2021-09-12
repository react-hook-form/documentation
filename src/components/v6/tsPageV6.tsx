import * as React from "react"
import SideMenu from "../SideMenu"
import { useStateMachine } from "little-state-machine"
import TS from "../../data/V6/ts"
import * as typographyStyles from "../../styles/typography.module.css"
import * as containerStyles from "../../styles/container.module.css"

const enLinks = [
  TS.nestedValue,
  TS.resolver,
  TS.submitHandler,
  TS.control,
  TS.useFormMethodsRef,
  TS.useFormOptions,
  TS.useFieldArrayMethods,
  TS.useFieldArrayOptions,
  TS.useControllerMethods,
  TS.useControllerOptions,
  TS.fieldError,
  TS.fieldErrors,
  TS.field,
  TS.fieldValues,
  TS.arrayField,
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
    UseFormMethodsRef: null,
    RegisterOptionsRef: null,
    UseFormOptionsRef: null,
    UseFieldArrayMethodsRef: null,
    UseFieldArrayOptionsRef: null,
    UseControllerMethodsRef: null,
    UseControllerOptionsRef: null,
    FieldErrorRef: null,
    FieldErrorsRef: null,
    FieldRef: null,
    FieldValuesRef: null,
    ArrayFieldRef: null,
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
          Typescript Support
        </h1>
        <p className={typographyStyles.subHeading}>
          List of exported Typescript Types.
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
            ref={(ref) => (tsSectionsRef.current.UseFormMethodsRef = ref)}
            id="UseFormMethodsRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.useFormMethodsRef.title}</h2>
            </code>
            {TS.useFormMethodsRef.description}
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
            ref={(ref) => (tsSectionsRef.current.UseFieldArrayMethodsRef = ref)}
            id="UseFieldArrayMethodsRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.useFieldArrayMethods.title}</h2>
            </code>
            {TS.useFieldArrayMethods.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.UseFieldArrayOptionsRef = ref)}
            id="UseFieldArrayOptionsRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.useFieldArrayOptions.title}</h2>
            </code>
            {TS.useFieldArrayOptions.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.UseControllerMethodsRef = ref)}
            id="UseControllerMethodsRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.useControllerMethods.title}</h2>
            </code>
            {TS.useControllerMethods.description}
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.UseControllerOptionsRef = ref)}
            id="UseControllerOptionsRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.useControllerOptions.title}</h2>
            </code>
            {TS.useControllerOptions.description}
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
            ref={(ref) => (tsSectionsRef.current.ArrayFieldRef = ref)}
            id="ArrayFieldRef"
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS.arrayField.title}</h2>
            </code>
            {TS.arrayField.description}
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
