export function updateSetting(state, payload) {
  return {
    ...state,
    setting: {
      ...payload,
    },
  }
}
