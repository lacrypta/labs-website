'use client'

import { ThemeProvider } from 'styled-components'

import StyledComponentsRegistry from '@/lib/registry'

import theme from '@/style/theme'
import GlobalStyles from '@/style/GlobalStyles'
import { fontSecondary } from '@/style/fonts'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={fontSecondary.className}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
