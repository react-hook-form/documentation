export default function copyToClipboard(text: string) {
  return new Promise((resolve, reject) => {
    if (navigator?.clipboard) {
      const cb = navigator.clipboard
      cb.writeText(text).then(resolve).catch(reject)
    } else {
      try {
        const body = document.querySelector("body")

        const textarea = document.createElement("textarea")
        body?.appendChild(textarea)

        textarea.value = text
        textarea.select()
        document.execCommand("copy")

        body?.removeChild(textarea)

        resolve(0)
      } catch (e) {
        reject(e)
      }
    }
  })
}
