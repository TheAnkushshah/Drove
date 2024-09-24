/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Use protocol if necessary
        hostname: "fast-pelican-196.convex.cloud",
        port: "", // Specify port if needed
        pathname: "/**", // Use this if you want to allow all paths
      },
    ],
    // Uncomment below if you want to disable optimization for specific cases
    // unoptimized: false,
  },
  // Uncomment if you're using a base path
  // basePath: '/your-base-path',
};

export default nextConfig;