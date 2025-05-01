import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: false,
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
    },
    {
      source: '/api/nonce/:nonce',
      destination: '/api/nonces/:nonce'
    }
  ],
  headers: async () => {
    return [
      {
        // matching all API routes
        source: '/(.*)',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, DELETE, PATCH, POST, PUT, OPTIONS'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
          }
        ]
      }
    ]
  }
}

export default withNextIntl(nextConfig)
