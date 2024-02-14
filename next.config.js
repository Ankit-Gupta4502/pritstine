/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'pristine.amazonpro.in',
            port: '',
            pathname: '/image/**',
          },
        ],
      },
    rewrites: async function () {
        return [
            {
                source: "/api/:path*",
                destination: "https://pristine.amazonpro.in/api/:path*"
            },
            {
                source:"/basepath/:path*",
                destination:"https://pristine.amazonpro.in/image/:path*"
            }
        ]
    },
    compiler:{
      // removeConsole:{
      //   exclude:['error']
      // }
    }
}

module.exports = nextConfig
