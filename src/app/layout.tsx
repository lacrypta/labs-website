'use client'

import Script from 'next/script'
import { ThemeProvider } from 'styled-components'

import StyledComponentsRegistry from '@/lib/registry'

import theme from '@/style/theme'
import GlobalStyles from '@/style/GlobalStyles'
import { fontSecondary } from '@/style/fonts'
import { GOOGLE_TAG_ID } from '@/constants/config'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={fontSecondary.className}>
      <head>
        <title>La Crypta | Conoce con nosotros sobre Bitcoin.</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" type="img/png" href="img/favicon.png" />

        {/*  */}
        <meta name="author" content="La Crypta" />
        <meta
          name="description"
          content="Somos una comunidad dedicada a la educación y difusión del ecosistema Bitcoin."
        />
        <meta name="robots" content="index,follow" />

        {/* Facebook */}
        <meta property="og:title" content="La Crypta" />
        <meta
          property="og:description"
          content="Somos una comunidad dedicada a la educación y difusión del ecosistema Bitcoin."
        />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/social/facebook-1200x630.jpg" />
        <meta property="og:url" content="https://lacrypta.ar/" />

        {/* Twitter */}
        <meta name="twitter:title" content="La Crypta" />
        <meta
          name="twitter:description"
          content="Somos una comunidad dedicada a la educación y difusión del ecosistema Bitcoin."
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
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
