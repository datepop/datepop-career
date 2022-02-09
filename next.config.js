// You can choose which headers to add to the list
// after learning more below.
const securityHeaders = [
    {
      key: 'X-XSS-Protection',
      value: '1; mode=block',
    },
  ];
  
  module.exports = {
    distDir: 'build',
    reactStrictMode: true,
    poweredByHeader: false,
    async headers() {
      return [
        {
          // Apply these headers to all routes in your application.
          source: '/(.*)',
          headers: securityHeaders,
        },
      ];
    },
  };
  