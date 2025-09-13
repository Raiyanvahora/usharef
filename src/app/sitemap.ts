import { MetadataRoute } from 'next';
import { categories } from '../../data/products';

export const dynamic = 'force-static';
export const revalidate = false;

const BASE_URL = 'https://usharefrigerationandservice.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Main pages with higher priority
  const mainPages = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/service`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/reviews`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ];

  // Category pages
  const categoryPages = categories.map((category) => ({
    url: `${BASE_URL}/products/category/${category.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Location-specific pages (High priority for local SEO)
  const locations = ['anand', 'vadodara', 'ahmedabad', 'surat', 'rajkot', 'bhavnagar', 'nadiad'];
  const locationPages = locations.map((location) => ({
    url: `${BASE_URL}/locations/${location}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Brand filter pages
  const brands = ['western', 'icemake', 'frigoglass', 'bluestar', 'voltas', 'haier'];
  const brandPages = brands.map((brand) => ({
    url: `${BASE_URL}/products?brand=${brand}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Product detail pages (for each model in each category)
  const productPages: MetadataRoute.Sitemap = [];
  categories.forEach((category) => {
    category.models.forEach((model) => {
      const modelId = model.id || model.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      productPages.push({
        url: `${BASE_URL}/products/${modelId}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      });
    });
  });

  return [...mainPages, ...locationPages, ...categoryPages, ...brandPages, ...productPages];
}