/* eslint-disable @typescript-eslint/no-var-requires */
const isProd = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  swcMinify: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
