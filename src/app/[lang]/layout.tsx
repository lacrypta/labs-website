// src/app/[lang]/layout.tsx

import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

import { GOOGLE_TAG_ID } from '@/constants/config';
import AppProvider from '@/context/AppProvider';
import { fontSecondary } from '@/style/fonts';

import '../globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export default async function RootLayout({
  children,
  params: { lang },
}: RootLayoutProps) {
  unstable_setRequestLocale(lang);

  const messages = await getMessages();

  return (
    <html lang={lang} className={fontSecondary.className}>
      <head>
        <title>La Crypta | Learn with us about Bitcoin and Nostr.</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" type="image/png" href="/img/schema-logo.png" />
        <meta name="author" content="La Crypta" />
        <meta
          name="description"
          content="We are a community dedicated to the education and dissemination of the Bitcoin ecosystem in Argentina."
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="La Crypta" />
        <meta
          property="og:description"
          content="La Crypta is an Argentine organization dedicated to the development, education, and sharing of knowledge within the Bitcoin and Nostr ecosystems."
        />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/social/facebook-1200x630.jpg" />
        <meta property="og:url" content="https://lacrypta.ar/" />
        <meta name="twitter:title" content="La Crypta" />
        <meta
          name="twitter:description"
          content="La Crypta is an Argentine organization dedicated to the development, education, and sharing of knowledge within the Bitcoin and Nostr ecosystems."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/img/social/twitter-600x330.jpg" />
        <meta name="twitter:url" content="https://lacrypta.ar/" />
        <script async src="https://tally.so/widgets/embed.js"></script>
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
        <NextIntlClientProvider locale={lang} messages={messages}>
          <AppProvider>{children}</AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}