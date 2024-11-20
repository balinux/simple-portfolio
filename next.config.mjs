/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "minimal-nextjs-portfolio-website.vercel.app",
      },
    ],
  },
};

export default nextConfig;
