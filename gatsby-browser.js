import * as React from 'react';
import { createStore, StateMachineProvider } from 'little-state-machine'
import formData from './src/state/formData'
import language from "./src/state/language"

createStore({
  formData,
  language,
})

export const wrapRootElement = ({ element }) => <StateMachineProvider>{element}</StateMachineProvider>
