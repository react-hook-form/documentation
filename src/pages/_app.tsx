import { StateMachineProvider, createStore } from "little-state-machine"
import { type AppProps } from "next/app"
import Head from "next/head"
import formData from "../state/formData"
import { ThemeProvider } from "next-themes"
import { useEffect } from "react"
import Layout from "../components/layout"
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
      if ("serviceWorker" in window.navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          if (Array.isArray(registrations)) {
            for (const registration of registrations) {
              ;(registration as ServiceWorkerRegistration).unregister()
            }
          }
        })
      }
    } catch {}
  }, [])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, viewport-fit=cover"
        />
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableColorScheme={false}
      >
        <StateMachineProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StateMachineProvider>
      </ThemeProvider>
    </>
  )
}

export default App
