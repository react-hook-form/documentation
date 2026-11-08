import { useEffect } from "react"
import { useRouter } from "next/router"

// Advanced Usage used to be one page with an anchor per section. Old links
// such as /advanced-usage#TestingForm now point to /advanced-usage/testing.
// The hash never reaches the server, so this has to run in the browser.
const LEGACY_ANCHORS: Record<string, string> = {
  EditingSavedData: "/advanced-usage/editing-saved-data",
  HandlingServerErrors: "/advanced-usage/server-errors",
  ConditionalFields: "/advanced-usage/conditional-fields",
  IsolatingFormSubscriptions: "/advanced-usage/isolating-subscriptions",
  AccessibilityA11y: "/advanced-usage/accessibility",
  WizardFormFunnel: "/advanced-usage/multi-step-forms",
  SmartFormComponent: "/advanced-usage/smart-form-component",
  ErrorMessages: "/advanced-usage/error-messages",
  ConnectForm: "/advanced-usage/connect-form",
  FormProviderPerformance: "/advanced-usage/formprovider-performance",
  ControlledmixedwithUncontrolledComponents:
    "/advanced-usage/controlled-and-uncontrolled",
  CustomHookwithResolver: "/advanced-usage/custom-hook-with-resolver",
  Workingwithvirtualizedlists: "/advanced-usage/virtualized-lists",
  TestingForm: "/advanced-usage/testing",
  TransformandParse: "/advanced-usage/transform-and-parse",
  ServerActionsuseActionState: "/advanced-usage/server-actions",
  RegisteringOpaqueTypes: "/advanced-usage/opaque-types",
  WizardFormFunnelResolver:
    "/advanced-usage/multi-step-forms#WizardFormFunnelResolver",
  WizardFormFunnelBuiltIn:
    "/advanced-usage/multi-step-forms#WizardFormFunnelBuiltIn",
  Resolvingactwarningduringtest: "/advanced-usage/testing",
}

export function LegacyAnchorRedirect() {
  const router = useRouter()

  useEffect(() => {
    const target = LEGACY_ANCHORS[window.location.hash.slice(1)]
    if (target) router.replace(target)
  }, [router])

  return null
}
