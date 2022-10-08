import * as React from "react"
import { createStore, StateMachineProvider } from "little-state-machine"
import formData from "./src/state/formData"
import setting from "./src/state/setting"

createStore({
  formData,
  setting,
})

export default ({ element }) => (
  <StateMachineProvider>{element}</StateMachineProvider>
)
