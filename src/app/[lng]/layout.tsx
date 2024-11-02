import Script from 'next/script'

import { GOOGLE_TAG_ID } from '@/constants/config'
import AppProvider from '@/context/AppProvider'
import { fontSecondary } from '@/style/fonts'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

import '../../globals.css'

export default function RootLayout({
  children,
  params: { lng }
}: {
  children: React.ReactNode
  params: { lng: string }
}) {
  unstable_setRequestLocale('en')
  const messages = useMessages()

  return (
    <html lang={'en'} className={fontSecondary.className}>
      <head>
        <title>La Crypta | Learn with us about Bitcoin and Nostr.</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" type="img/png" href="img/schema-logo.png" />

        {/*  */}
        <meta name="author" content="La Crypta" />
        <meta
          name="description"
          content="We are a community dedicated to the education and dissemination of the Bitcoin ecosystem in Argentina."
        />
        <meta name="robots" content="index,follow" />

        {/* Facebook */}
        <meta property="og:title" content="La Crypta" />
        <meta
          property="og:description"
          content="La Crypta is an Argentine organization dedicated to the development, education, and sharing of knowledge within the Bitcoin and Nostr ecosystems."
        />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/social/facebook-1200x630.jpg" />
        <meta property="og:url" content="https://lacrypta.ar/" />

        {/* Twitter */}
        <meta name="twitter:title" content="La Crypta" />
        <meta
          name="twitter:description"
          content="La Crypta is an Argentine organization dedicated to the development, education, and sharing of knowledge within the Bitcoin and Nostr ecosystems."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/img/social/twitter-600x330.jpg" />
        <meta name="twitter:url" content="https://lacrypta.ar/" />

        {/* Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${GOOGLE_TAG_ID}');
        `}
        </Script>

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
      </head>
      <body>
        <NextIntlClientProvider locale={'en'} messages={messages}>
          <AppProvider>{children}</AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
