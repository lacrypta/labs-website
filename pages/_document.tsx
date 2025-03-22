import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Schema */}
        <Script
          strategy="beforeInteractive"
          id="ldjson-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "name": "La Crypta",
                "alternateName": "LaCrypta",
                "url": "https://lacrypta.ar/",
                "logo": "https://lacrypta.ar/img/schema-logo.png",
                "sameAs": [
                  "https://twitter.com/LaCryptaOk",
                  "https://www.instagram.com/lacryptaok/",
                  "https://www.linkedin.com/company/lacryptaok/",
                  "https://github.com/lacrypta",
                  "https://lacrypta.ar/"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Villanueva 1367",
                  "addressLocality": "Belgrano",
                  "postalCode": "C1426",
                  "addressCountry": "AR",
                  "addressRegion": "CABA, Buenos Aires"
                }
              }
            `
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
