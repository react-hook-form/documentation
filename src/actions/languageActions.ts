export function updateCurrentLanguage(state, payload) {
  return {
    ...state,
    language: {
      currentLanguage: payload,
    },
  }
}
