/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // app env
    NEXT_PUBLIC_APP_NAME: process.env.APP_NAME,
  },
  publicRuntimeConfig: {
    // will be available only on both client-side and server-side
    APP_NAME: process.env.APP_NAME,
  },
  serverRuntimeConfig: {
    // will be available only on server-side
    APP_NAME: process.env.APP_NAME,
  },
}

module.exports = nextConfig
