/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // GitHub Pages needs to know the base path when deployed to username.github.io/repo-name
  // If deploying to a custom domain or directly to username.github.io, you can remove this line
  // basePath: '/your-repo-name', // Uncomment and replace with your repo name if needed
};

export default nextConfig;
