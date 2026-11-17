import { blogs } from '@/features/home/data/blogs';
import { stories } from '@/features/home/data/stories';
import { destinationList } from '@/features/destinations/data/destinations';
import { absoluteUrl } from '@/lib/seo';

export default function sitemap() {
  const paths = [
    '/', '/about', '/contact', '/stories', '/blog',
    ...stories.map(({ slug }) => `/stories/${slug}`),
    ...blogs.map(({ slug }) => `/blog/${slug}`),
    ...destinationList.map(({ slug }) => `/destinations/${slug}`),
  ];

  return paths.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path.split('/').length === 2 ? 0.8 : 0.6,
  }));
}
