/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images:{
    // domain: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: 'image-cdn.hypb.st',
        port: '',
        pathname: '/**',
        
      }]
  }
}

module.exports = nextConfig
