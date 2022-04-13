/** @type {import('next').NextConfig} */

require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    ACCESSTOKEN: process.env.ACCESSTOKEN,
  },
}

module.exports = nextConfig
