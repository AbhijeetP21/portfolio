import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-portfolio-domain.com';
  
  // Since this is a single-page application with hash navigation,
  // we only include the main page in the sitemap
  // Search engines will crawl the page and discover the hash sections
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
