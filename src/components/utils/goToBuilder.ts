export default function goToBuilder() {
  document.title = 'React hook form - Builder'
  window.history.pushState({ page: 'React hook form - Form Builder' }, 'React hook form - Form Builder', '/form-builder')
}
