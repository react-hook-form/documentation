export default function goToBuilder(toggle = true) {
  const title = " | React hook form - Simple React form validation"

  if (toggle) {
    document.title = `Form Builder${title}`
    window.history.pushState(
      { page: `Form Builder${title}` },
      `Form Builder${title}`,
      `/form-builder`
    )
  } else {
    document.title = `Home${title}`
    window.history.pushState({ page: `Home${title}` }, `Home${title}`, `/`)
  }
}
