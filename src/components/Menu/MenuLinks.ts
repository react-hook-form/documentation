import { Pages } from "../../types/types"

export const advancedLinks: Pages = [
  { name: "Editing saved data", pathname: "#EditingSavedData" },
  { name: "Handling server errors", pathname: "#HandlingServerErrors" },
  { name: "Conditional fields", pathname: "#ConditionalFields" },
  {
    name: "Isolating form subscriptions",
    pathname: "#IsolatingFormSubscriptions",
  },
  {
    name: "Accessibility (A11y)",
    pathname: "#AccessibilityA11y",
  },
  {
    name: "Wizard Form / Funnel",
    pathname: "#WizardFormFunnel",
  },
  {
    name: "Smart Form Component",
    pathname: "#SmartFormComponent",
  },
  {
    name: "Error Messages",
    pathname: "#ErrorMessages",
  },
  {
    name: "Connect Form",
    pathname: "#ConnectForm",
  },
  {
    name: "FormProvider Performance",
    pathname: "#FormProviderPerformance",
  },
  {
    name: "Controlled mixed with Uncontrolled Components",
    pathname: "#ControlledmixedwithUncontrolledComponents",
  },
  {
    name: "Custom Hook with Resolver",
    pathname: "#CustomHookwithResolver",
  },
  {
    name: "Working with virtualized lists",
    pathname: "#Workingwithvirtualizedlists",
  },
  {
    name: "Testing Form",
    pathname: "#TestingForm",
  },
  {
    name: "Transform and Parse",
    pathname: "#TransformandParse",
  },
  {
    name: "Server Actions / useActionState",
    pathname: "#ServerActionsuseActionState",
  },
  {
    name: "Registering Opaque Types",
    pathname: "#RegisteringOpaqueTypes",
  },
]

export const faqLinks: Pages = [
  {
    name: "Why is React Hook Form performant?",
    pathname: "#PerformanceofReactHookForm",
  },
  {
    name: "How do I make validation errors accessible?",
    pathname: "#Howtocreateanaccessibleinputerrorandmessage",
  },
  {
    name: "Does React Hook Form work with class components?",
    pathname: "#DoesitworkwithClassComponents",
  },
  {
    name: "Does it work with React's <Activity /> component?",
    pathname: "#DoesitworkwithReactsActivitycomponent",
  },
  {
    name: "How to reset the form?",
    pathname: "#Howtoresettheform",
  },
  {
    name: "Why are my validation errors not showing?",
    pathname: "#Whyaremyvalidationerrorsnotshowing",
  },
  {
    name: "Why is handleSubmit not calling my submit function?",
    pathname: "#WhyisHandleSubmitnotcallingmysubmitfunction",
  },
  {
    name: "How to initialize form values?",
    pathname: "#Howtoinitializeformvalues",
  },
  {
    name: "Should I use register or Controller?",
    pathname: "#ShouldIuseregisterorController",
  },
  {
    name: "How do I use a schema library?",
    pathname: "#HowdoIuseaschemavalidator",
  },
  {
    name: "Why is isDirty false or stuck on true?",
    pathname: "#WhyisisDirtyincorrect",
  },
  {
    name: "How to share ref usage?",
    pathname: "#Howtosharerefusage",
  },
  {
    name: "What if a custom input does not expose a ref?",
    pathname: "#Whatifyoudonthaveaccesstoref",
  },
  {
    name: "Why does a controlled input ignore the first keystroke?",
    pathname: "#Whyisthefirstkeystrokenotworking",
  },
  {
    name: "How does React Hook Form differ from Formik and Redux Form?",
    pathname: "#ReactHookFormFormikorReduxForm",
  },
  {
    name: "When should I use watch, useWatch, subscribe, or getValues?",
    pathname: "#watchvsgetValuesvsstate",
  },
  {
    name: "Why is default value not changing correctly with ternary operator?",
    pathname: "#Whyisdefaultvaluenotchangingcorrectlywithternaryoperator",
  },
  {
    name: "How to work with modal or tab forms?",
    pathname: "#Howtoworkwithmodalortabforms",
  },
  {
    name: "How do I show errors returned by a server?",
    pathname: "#HowdoIshowservererrors",
  },
  {
    name: "Why do tests show an act warning?",
    pathname: "#Whydoestestingshowanactwarning",
  },
]

export const apiLinks: Pages = [
  {
    pathname: "/docs/useform",
    name: "useForm",
    pages: [
      { pathname: "/docs/useform/register", name: "register" },
      { pathname: "/docs/useform/unregister", name: "unregister" },
      { pathname: "/docs/useform/formstate", name: "formState" },
      { pathname: "/docs/useform/watch", name: "watch" },
      { pathname: "/docs/useform/subscribe", name: "subscribe" },
      { pathname: "/docs/useform/handlesubmit", name: "handleSubmit" },
      { pathname: "/docs/useform/reset", name: "reset" },
      { pathname: "/docs/useform/resetfield", name: "resetField" },
      {
        pathname: "/docs/useform/resetdefaultvalues",
        name: "resetDefaultValues",
      },
      { pathname: "/docs/useform/seterror", name: "setError" },
      { pathname: "/docs/useform/clearerrors", name: "clearErrors" },
      { pathname: "/docs/useform/setvalue", name: "setValue" },
      { pathname: "/docs/useform/setvalues", name: "setValues" },
      { pathname: "/docs/useform/setfocus", name: "setFocus" },
      { pathname: "/docs/useform/getvalues", name: "getValues" },
      { pathname: "/docs/useform/geterrors", name: "getErrors" },
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
    pages: [
      {
        pathname: "/docs/usewatch/watch",
        name: "Watch",
      },
    ],
  },
  {
    pathname: "/docs/useformstate",
    name: "useFormState",
    pages: [
      {
        pathname: "/docs/useformstate/errormessage",
        name: "ErrorMessage",
      },
      {
        pathname: "/docs/useformstate/formstate",
        name: "FormState",
      },
    ],
  },
  {
    pathname: "/docs/usefieldarray",
    name: "useFieldArray",
    pages: [
      {
        pathname: "/docs/usefieldarray/fieldarray",
        name: "FieldArray",
      },
    ],
  },
  {
    pathname: "/docs/uselens",
    name: "useLens",
  },
  {
    pathname: "/docs/createFormControl",
    name: "createFormControl",
  },
]

export const tsLinks: Pages = [
  {
    name: "Resolver",
    pathname: "#Resolver",
  },
  {
    name: "SubmitHandler",
    pathname: "#SubmitHandler",
  },
  {
    name: "SubmitErrorHandler",
    pathname: "#SubmitErrorHandler",
  },
  {
    name: "FormSubmitHandler",
    pathname: "#FormSubmitHandler",
  },
  {
    name: "Control",
    pathname: "#Control",
  },
  {
    name: "UseFormReturn",
    pathname: "#UseFormReturn",
  },
  {
    name: "UseFormProps",
    pathname: "#UseFormProps",
  },
  {
    name: "ValidateForm",
    pathname: "#ValidateForm",
  },
  {
    name: "UseFormRegister",
    pathname: "#UseFormRegister",
  },
  {
    name: "UseFormRegisterReturn",
    pathname: "#UseFormRegisterReturn",
  },
  {
    name: "UseFormUnregister",
    pathname: "#UseFormUnregister",
  },
  {
    name: "UseFormWatch",
    pathname: "#UseFormWatch",
  },
  {
    name: "UseFormSubscribe",
    pathname: "#UseFormSubscribe",
  },
  {
    name: "UseFormHandleSubmit",
    pathname: "#UseFormHandleSubmit",
  },
  {
    name: "UseFormReset",
    pathname: "#UseFormReset",
  },
  {
    name: "UseFormResetField",
    pathname: "#UseFormResetField",
  },
  {
    name: "UseFormResetDefaultValues",
    pathname: "#UseFormResetDefaultValues",
  },
  {
    name: "UseFormSetError",
    pathname: "#UseFormSetError",
  },
  {
    name: "UseFormClearErrors",
    pathname: "#UseFormClearErrors",
  },
  {
    name: "UseFormSetValue",
    pathname: "#UseFormSetValue",
  },
  {
    name: "UseFormSetValues",
    pathname: "#UseFormSetValues",
  },
  {
    name: "UseFormSetFocus",
    pathname: "#UseFormSetFocus",
  },
  {
    name: "UseFormGetValues",
    pathname: "#UseFormGetValues",
  },
  {
    name: "UseFormGetErrors",
    pathname: "#UseFormGetErrors",
  },
  {
    name: "UseFormGetFieldState",
    pathname: "#UseFormGetFieldState",
  },
  {
    name: "UseFormTrigger",
    pathname: "#UseFormTrigger",
  },
  {
    name: "UseWatchProps",
    pathname: "#UseWatchProps",
  },
  {
    name: "WatchProps",
    pathname: "#WatchProps",
  },
  {
    name: "UseFormStateProps",
    pathname: "#UseFormStateProps",
  },
  {
    name: "FormStateProps",
    pathname: "#FormStateProps",
  },
  {
    name: "FormProviderProps",
    pathname: "#FormProviderProps",
  },
  {
    name: "FormProps",
    pathname: "#FormProps",
  },
  {
    name: "UseFieldArrayReturn",
    pathname: "#UseFieldArrayReturn",
  },
  {
    name: "FieldArrayMethodProps",
    pathname: "#FieldArrayMethodProps",
  },
  {
    name: "UseFieldArrayProps",
    pathname: "#UseFieldArrayProps",
  },
  {
    name: "FieldArrayProps",
    pathname: "#FieldArrayProps",
  },
  {
    name: "ControllerRenderProps",
    pathname: "#ControllerRenderProps",
  },
  {
    name: "ControllerFieldState",
    pathname: "#ControllerFieldState",
  },
  {
    name: "UseControllerReturn",
    pathname: "#UseControllerReturn",
  },
  {
    name: "UseControllerProps",
    pathname: "#UseControllerProps",
  },
  {
    name: "ControllerProps",
    pathname: "#ControllerProps",
  },
  {
    name: "FieldError",
    pathname: "#FieldError",
  },
  {
    name: "FieldErrors",
    pathname: "#FieldErrors",
  },
  {
    name: "ErrorOption",
    pathname: "#ErrorOption",
  },
  {
    name: "Field",
    pathname: "#Field",
  },
  {
    name: "FieldPath",
    pathname: "#FieldPath",
  },
  {
    name: "FieldPathByValue",
    pathname: "#FieldPathByValue",
  },
  {
    name: "FieldValues",
    pathname: "#FieldValues",
  },
  {
    name: "FieldArrayWithId",
    pathname: "#FieldArrayWithId",
  },
  {
    name: "Mode",
    pathname: "#Mode",
  },
  {
    name: "RegisterOptions",
    pathname: "#RegisterOptions",
  },
  {
    name: "FormState",
    pathname: "#FormState",
  },
  {
    name: "KeepStateOptions",
    pathname: "#KeepStateOptions",
  },
  {
    name: "FormStateProxy",
    pathname: "#FormStateProxy",
  },
  {
    name: "OpaqueTypes",
    pathname: "#OpaqueTypes",
  },
  {
    name: "NestedValue",
    pathname: "#NestedValue",
  },
]

export const migrateV7ToV8Links: Pages = [
  {
    name: "Installation",
    pathname: "#Installation",
  },
  {
    name: "React Compiler",
    pathname: "#ReactCompiler",
  },
  {
    name: "Flat Field Array",
    pathname: "#FlatFieldArray",
  },
  {
    name: "Breaking Changes",
    pathname: "#BreakingChanges",
  },
  {
    name: "Method References",
    pathname: "#MethodReferences",
  },
  {
    name: "unknown Types",
    pathname: "#UnknownTypes",
  },
  {
    name: "Input Ref",
    pathname: "#InputRef",
  },
  {
    name: "useFieldArray",
    pathname: "#useFieldArray",
  },
  {
    name: "Watch Component",
    pathname: "#WatchComponent",
  },
  {
    name: "watch Callback",
    pathname: "#watchCallback",
  },
  {
    name: "valueAsDate",
    pathname: "#valueAsDate",
  },
  {
    name: "setValue",
    pathname: "#setValue",
  },
]

export const getStartedLinks: Pages = [
  {
    name: "Quick start",
    pathname: "#Quickstart",
  },
  {
    name: "React Web Video Tutorial",
    pathname: "#ReactWebVideoTutorial",
  },
  {
    name: "Register fields",
    pathname: "#Registerfields",
  },
  {
    name: "Apply validation",
    pathname: "#Applyvalidation",
  },
  {
    name: "Integrating an existing form",
    pathname: "#Integratinganexistingform",
  },
  {
    name: "Integrating with UI libraries",
    pathname: "#IntegratingwithUIlibraries",
  },
  {
    name: "Integrating Controlled Inputs",
    pathname: "#IntegratingControlledInputs",
  },
  {
    name: "Integrating with global state",
    pathname: "#Integratingwithglobalstate",
  },
  {
    name: "Handle errors",
    pathname: "#Handleerrors",
  },
  {
    name: "Integrating with services",
    pathname: "#Integratingwithservices",
  },
  {
    name: "Schema Validation",
    pathname: "#SchemaValidation",
  },
  {
    name: "React Native",
    pathname: "#ReactNative",
  },
  {
    name: "TypeScript",
    pathname: "#TypeScript",
  },
  {
    name: "Design and philosophy",
    pathname: "#Designandphilosophy",
  },
]

export const integrationLinks: Pages = [
  { name: "Overview", pathname: "/integrations" },
  { name: "Schema Resolvers", pathname: "/integrations/resolvers" },
  { name: "Zod", pathname: "/integrations/zod" },
  { name: "Yup", pathname: "/integrations/yup" },
  { name: "Next.js", pathname: "/integrations/nextjs" },
  { name: "shadcn/ui", pathname: "/integrations/shadcn-ui" },
  { name: "React 19", pathname: "/integrations/react-19" },
]
