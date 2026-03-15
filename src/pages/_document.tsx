import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta
          name="google-site-verification"
          content="Br98Vw63VGn49LlO3gRbW25bIEJymXH9JY_W6AjK6HA"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
        />
        <Script
          strategy="afterInteractive"
          src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
        />
        <link
          rel="shortcut icon"
          href="/images/logo/react-hook-form-logo-only.png"
        />
      </Head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "React Ko Form",
              alternateName: "React Hook Form 한국어 문서",
              url: "https://react-ko-form.netlify.app",
              inLanguage: "ko",
              description:
                "React Hook Form의 한국어 번역 문서입니다. 성능이 좋고, 유연하며 확장 가능한 폼에 사용하기 쉬운 유효성 검사 기능이 포함되어 있어요.",
            }),
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
