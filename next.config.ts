import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'drive.gianhangvn.com',
      },
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
      },
      {
        protocol: 'https',
        hostname: 'kenhxehyundai.vn',
      },
      {
        protocol: 'https',
        hostname: 'd1hv7ee95zft1i.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'vcdn1-vnexpress.vnecdn.net',
      },
      {
        protocol: 'https',
        hostname: 'img1.oto.com.vn',
      },
      {
        protocol: 'https',
        hostname: 'www.usnews.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Để hiển thị avatar Google sau khi đăng nhập
      },
    ],
  },
};

export default nextConfig;