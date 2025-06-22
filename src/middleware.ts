// middleware.ts

import createMiddleware from 'next-intl/middleware'
import { locales, localePrefix } from './navigation'
import { defaultLocale } from './translations/config'

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en)/:path*']
}
