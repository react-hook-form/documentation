import { StateMachineProvider, createStore } from "little-state-machine"
import { type AppProps } from "next/app"
import Head from "next/head"
import formData from "../state/formData"
import { ThemeProvider } from "next-themes"
import { useEffect } from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXComponents } from "../components/mdx/mdx"
import "../components/layout.css"

const setting = {
  isFocusOnSearch: false,
  version: 7,
}

createStore(
  {
    formData,
    setting,
  },
  {
    storageType:
      typeof window !== "undefined" ? window.localStorage : undefined,
  }
)

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    try {
      if (window.navigator && navigator.serviceWorker) {
        navigator.serviceWorker
          .getRegistrations()
          .then(function (registrations) {
            if (Array.isArray(registrations)) {
              for (const registration of registrations) {
                registration.unregister()
              }
            }
          })
      }
    } catch {}
  }, [])

  return (
    <>
      <Head>
        <title>React Hook Form - Simple React forms validation</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableColorScheme={false}
      >
        <MDXProvider components={MDXComponents}>
          <StateMachineProvider>
            <Component {...pageProps} />
          </StateMachineProvider>
        </MDXProvider>
      </ThemeProvider>
    </>
  )
}

export default App
