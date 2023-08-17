/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = () => {
    const rewrites = () => {
      return [
        {
          source: "/resident-sign-up/:path*",
          destination: "http://localhost:5000/resident-sign-up/:path*",
        },
      ];
    };
    return {
      rewrites,
    };
  };

module.exports = nextConfig
