import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://rentahandwindsor.ca';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Block API routes
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
