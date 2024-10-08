/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, 
    domains: [
      "10clove.wordpress.com",
      "pepperdine-graphic.com",
      "www.uab.edu",
      "static.vecteezy.com",
      "encrypted-tbn0.gstatic.com",
      "img.freepik.com",
    ],
  },
  output: 'export',
};

export default nextConfig;
