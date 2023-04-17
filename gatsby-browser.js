import { useEffect } from "react";
import withLittleStateMachine from "./with-little-state-machine"
import { useStateMachine } from "little-state-machine"

export const wrapRootElement = withLittleStateMachine

export const onServiceWorkerUpdateReady = () => {
  window.location.reload()
}

const forceUpdate = (state, payload) => {
  return {
    ...state,
    setting: {
      ...state.setting,
      ...payload,
    },
  }
}

export const wrapPageElement = ({ element }) => {
  const { actions, state } = useStateMachine({ forceUpdate })
  useEffect(() => {
    if (!state?.setting?.lightMode) {
      return
    }

    const lightMode = !state?.setting?.lightMode

    // NOTE: Global state on SSR and CSR cannot be synced when using
    // storage type window.localStorage of little-state-machine.
    // If light mode is applied on browser, SSR still renders dark mode when opening new tab,
    // enable dark mode to sync with SSR HTML response then re-apply light mode after first rendering

    actions.forceUpdate({ lightMode })
    // Restore selected state of light mode
    setTimeout(() => {
      actions.forceUpdate({ lightMode: !lightMode })
    }, 200)
  }, [])

  return <>{element}</>
}
