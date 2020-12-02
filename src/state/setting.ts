export default {
  lightMode:
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches,
  isFocusOnSearch: false,
}
