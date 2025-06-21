// middleware.ts

import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Una lista de todos los idiomas que soporta la aplicación
  locales: ['en', 'es'],

  // El idioma por defecto a usar cuando no hay coincidencia
  defaultLocale: 'es',
});

export const config = {
  // No ejecutar el middleware en rutas que probablemente no necesiten i18n
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};