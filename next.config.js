/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    topLevelAwait: true
  },
  images: {
    domains: [ "cdn.sanity.io"],

  }
  // images: {
    
  //   remotePatterns: [
  //     {
  //       protocol:'https',
  //       hostname: 'localhost:3333',
	// 	    port:'',
  //       pathname: '/desk/'
  //     },
  //     {
       
  //       protocol: 'https',
  //       hostname: 'drive.google.com',
  //       port: '',
  //       pathname: '/file/d/1dbCjQNZ2FBFC3G6F_YVqGyZSAf1ssgMq/view?usp=share_link',
  //     },
    
  //   ],
  // },
}

module.exports = nextConfig
