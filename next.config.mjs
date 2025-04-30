import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  compiler: {
    styledComponents: true
  },
  env: {
    TALLY: process.env.TALLY_ID
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com'
      }
    ]
  },
  rewrites: async () => [
    {
      source: '/.well-known/nostr.json',
      destination: '/api/nip05'
    },
    {
      source: '/.well-known/lnurlp/:name',
      destination: '/api/lud16/:name'
    }
  ]
}

export default withNextIntl(nextConfig)
