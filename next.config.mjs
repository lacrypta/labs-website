import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  env: {
    FORMBRICKS_ID: process.env.FORMBRICKS_ENVIRONMENT_ID
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com'
      }
    ]
  }
}

export default withNextIntl(nextConfig)
