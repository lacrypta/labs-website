'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '@/style/theme'

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  )
}

export default AppProvider
