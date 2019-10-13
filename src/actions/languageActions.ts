export function updateCurrentLanguage(state, payload) {
  console.log(payload)
  return {
    ...state,
    language: {
      currentLanguage: payload,
    },
  }
}
