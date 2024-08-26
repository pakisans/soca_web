/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.soca.rs",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
