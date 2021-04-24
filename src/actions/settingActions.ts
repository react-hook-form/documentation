import { GlobalState } from "little-state-machine"

export function updateSetting(
  state: GlobalState,
  payload: Partial<GlobalState["setting"]>
) {
  return {
    ...state,
    setting: {
      ...state.setting,
      ...payload,
    },
  }
}
