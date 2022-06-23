const isDev = process.env.NODE_ENV === 'development';

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' ${(isDev && "'unsafe-eval'") || ''};
  script-src-elem 'self' https://www.googletagmanager.com 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  style-src-elem 'self' 'unsafe-inline';
  img-src 'self' data:;
  object-src 'none';
  connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com;
  frame-ancestors 'none';
  base-uri 'none';
  form-action 'none';
`;

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Permissions-Policy',
    value:
      'camera=(), microphone=(), geolocation=(), midi=(), sync-xhr=(), usb=(), fullscreen=(),' +
      ' payment=(), accelerometer=(), autoplay=(), encrypted-media=(),' +
      ' gyroscope=(), magnetometer=()',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
];

module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  swcMinify: true,
};
