/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiUrl: 'https://api.imgur.com/3/gallery',
    clientID: '5dcf6ce451305cd'
  }
}

module.exports = nextConfig
