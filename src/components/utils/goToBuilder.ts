export default function goToBuilder() {
  document.title = 'React hook form - Builder'
  window.history.pushState({ page: 'React hook form - Builder' }, 'React hook form - Builder', '/builder')
}
