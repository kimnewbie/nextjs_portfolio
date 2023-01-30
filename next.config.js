/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    /* 이미지 도메인 넣어줘야해 */
    domains: [
      'www.notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com'
    ],
    format: ['image/png', 'image/webp', 'image/jpeg']
  }
}

module.exports = nextConfig