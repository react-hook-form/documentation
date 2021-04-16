import * as React from "react"
import { createStore, StateMachineProvider } from "little-state-machine"
import formData from "./src/state/formData"
import language from "./src/state/language"
import setting from "./src/state/setting"

createStore({
  formData,
  language,
  setting,
})

export const wrapRootElement = ({ element }) => (
  <StateMachineProvider>{element}</StateMachineProvider>
)

export const onServiceWorkerUpdateReady = () => {
  window.location.reload()
}
