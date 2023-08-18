import { StateMachineProvider, createStore } from "little-state-machine"
import { type AppProps } from "next/app"
import Head from "next/head"
import formData from "../state/formData"
import { ThemeProvider } from "next-themes"
import { useEffect } from "react"
import "../components/layout.css"

createStore(
  {
    formData,
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
        <StateMachineProvider>
          <Component {...pageProps} />
        </StateMachineProvider>
      </ThemeProvider>
    </>
  )
}

export default App
