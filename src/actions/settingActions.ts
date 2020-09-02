export function updateSetting(state, payload) {
  return {
    ...state,
    setting: {
      ...state.setting,
      ...payload,
    },
  }
}
