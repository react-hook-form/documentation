export default {
  lightMode:
    window.matchMedia &&
    !window.matchMedia("(prefers-color-scheme: dark)").matches,
  isFocusOnSearch: false,
}
