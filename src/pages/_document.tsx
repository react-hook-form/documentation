import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
        />
        <Script
          strategy="afterInteractive"
          src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
        />
        <Script async strategy="afterInteractive" src="https://cdn.carbonads.com/carbon.js?serve=CW7DTKQ7&placement=react-hook-formcom&format=cover" id="_carbonads_js" />
        <link
          rel="shortcut icon"
          href="/images/logo/react-hook-form-logo-only.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
