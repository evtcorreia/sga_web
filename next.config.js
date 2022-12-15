/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    URL_PRODUCAO:"https://sga-api.connectasoft.com.br/",
    //URL_PRODUCAO:"http://localhost:3050/"
 },
}

module.exports = nextConfig







