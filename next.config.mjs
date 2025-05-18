/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export your site as fully static HTML/CSS/JS
  output: 'export',

  // (Optional) Add a trailing slash to all URLs if you prefer
  // trailingSlash: true,

  eslint: {
    // Skip ESLint errors during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Skip TypeScript errors during build
    ignoreBuildErrors: true,
  },
  images: {
    // Serve unoptimized images (good for static export)
    unoptimized: true,
  },
};

export default nextConfig;
