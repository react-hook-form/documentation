import * as React from 'react';
import { createStore, StateMachineProvider } from 'little-state-machine'
import formData from './src/components/constants/formData'

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
createStore({
  formData,
})

export const wrapRootElement = ({ element }) => <StateMachineProvider>{element}</StateMachineProvider>
