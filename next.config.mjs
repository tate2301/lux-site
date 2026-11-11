/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/privacy.html',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/terms.html',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/delete-account.html',
        destination: '/delete-account',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
