/** @type {import('next').NextConfig} */
const nextConfig = {
    // ESLint is not configured at the project level; don't fail Vercel builds
    // over it. Code is type-checked separately by `tsc`.
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
