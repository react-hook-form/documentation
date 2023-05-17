import { StateMachineProvider, createStore } from "little-state-machine"
import { type AppProps } from "next/app"
import Head from "next/head"

import "../components/layout.css"
import formData from "../state/formData"
import setting from "../state/setting"
import { ThemeProvider } from "next-themes"

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Hook Form - Simple React forms validation</title>
        <link rel="shortcut icon" href="/favicon.svg" />
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

export default MyApp
