/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'pristine.dphexabells.com',
            port: '',
            pathname: '/image/**',
          },
        ],
      },
    rewrites: async function () {
        return [
            {
                source: "/api/:path*",
                destination: "https://pristine.dphexabells.com/api/:path*"
            },
            {
                source:"/basepath/:path*",
                destination:"https://pristine.dphexabells.com/image/:path*"
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
