'use client'
import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyles from '@/style/GlobalStyles'
import theme from '@/style/theme'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  )
}

export default AppProvider
